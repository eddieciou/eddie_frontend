import { useState, useEffect, useCallback } from 'react';
import { WeatherElement } from './WeatherApp';

const fetchCurrentWeather = (locationName: any) => {
  // STEP 3-1：修改函式，把 fetch API 回傳的 Promise 直接回傳出去
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=${locationName}`,
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];

      const weatherElements = locationData.weatherElement.reduce(
        (neededElements: any, item: any) => {
          if (['WDSD', 'TEMP', 'HUMD'].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {},
      );

      // STEP 3-2：把取得的資料內容回傳出去，而不是在這裡 setWeatherElement
      return {
        observationTime: locationData.time.obsTime,
        locationName: locationData.locationName,
        temperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
        humid: weatherElements.HUMD,
      };
    });
};

const fetchWeatherForecast = (cityName: any) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-9E7309C0-D1AD-4512-B2CB-82FD51676F05&locationName=${cityName}`,
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements: any, item: any) => {
          if (['Wx', 'PoP', 'CI'].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {},
      );

      return {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
      };
    });
};

const useWeatherApi = (currentLocation: any) => {
  const [weatherElement, setWeatherElement] = useState<WeatherElement>({
    observationTime: new Date(),
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: '',
    weatherCode: 1,
    rainPossibility: 0,
    comfortability: '',
  });

  const { locationName, cityName } = currentLocation;

  const fetchData = useCallback(() => {
    // STEP 3：把原本的 fetchData 改名為 fetchingData 放到 useCallback 的函式內
    const fetchingData = async () => {
      const [currentWeather, weatherForecast] = await Promise.all([
        fetchCurrentWeather(locationName),
        fetchWeatherForecast(cityName),
      ]);

      setWeatherElement({
        ...currentWeather,
        ...weatherForecast,
      });
    };

    // STEP 4：記得要呼叫 fetchingData 這個方法
    fetchingData();
    // STEP 5：因為 fetchingData 沒有相依到 React 組件中的資料狀態，所以 dependencies 陣列中不帶入元素
  }, [locationName, cityName]);

  useEffect(() => {
    // STEP 1：在 useEffect 中定義 async function 取名為 fetchData
    fetchData();
  }, [fetchData]);

  return [weatherElement, fetchData] as const;
};

export default useWeatherApi;
