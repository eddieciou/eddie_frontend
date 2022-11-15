import React, { useState, useEffect, useCallback } from 'react';

const fetchWeatherForecast = () => {
  return fetch(
    'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-9E7309C0-D1AD-4512-B2CB-82FD51676F05&locationName=臺北市',
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

const fetchCurrentWeather = () => {
  // STEP 3-1：修改函式，把 fetch API 回傳的 Promise 直接回傳出去
  return fetch(
    'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=CWB-507B37E0-0383-4D8C-878D-628B54EC3536&locationName=臺北',
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

function WeatherApp() {
  const [weatherElement, setWeatherElement] = useState({
    observationTime: new Date(),
    locationName: '',
    humid: 0,
    temperature: 0,
    windSpeed: 0,
    description: '',
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: '',
  });

  console.log('--- invoke function component ---');

  const fetchData = useCallback(() => {
    // STEP 3：把原本的 fetchData 改名為 fetchingData 放到 useCallback 的函式內
    const fetchingData = async () => {
      const [currentWeather, weatherForecast] = await Promise.all([
        fetchCurrentWeather(),
        fetchWeatherForecast(),
      ]);

      setWeatherElement({
        ...currentWeather,
        ...weatherForecast,
      });
    };

    // STEP 4：記得要呼叫 fetchingData 這個方法
    fetchingData();
    // STEP 5：因為 fetchingData 沒有相依到 React 組件中的資料狀態，所以 dependencies 陣列中不帶入元素
  }, []);

  // useState ...

  // STEP 2：使用 useEffect Hook
  useEffect(() => {
    console.log('execute function in useEffect');
    // STEP 1：在 useEffect 中定義 async function 取名為 fetchData
    fetchData();
  }, [fetchData]);

  return (
    <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
      <div className='relative w-96 shadow-lg shadow-gray-700 bg-white p-2'>
        <div className='text-3xl mb-6'>{weatherElement.locationName}</div>
        <div className='text-sm text-gray-500 mb-6'>{weatherElement.description}</div>
        <div className='flex justify-between items-center mb-6'>
          <div className='text-gray-500 text-6xl flex font-light'>
            {Math.round(weatherElement.temperature)}
            <div className='text-3xl font-normal'>°C</div>
          </div>
          <img
            className='basis-2/6 w-16'
            src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_5-128.png'
          />
        </div>
        <div className='flex items-center text-xl font-light text-gray-500 mb-4'>
          <img
            className='w-6 mr-6'
            src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_9-128.png'
          />
          <div>{weatherElement.windSpeed} m/h</div>
        </div>
        <div className='flex items-center text-xl font-light text-gray-500'>
          <img
            className='w-6 mr-6'
            src='https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_31-128.png'
          />
          <div>{Math.round(weatherElement.humid * 100)} %</div>
        </div>
        <div className='absolute right-1 bottom-1 cursor-pointer inline-flex items-end'>
          最後觀測時間：
          {new Intl.DateTimeFormat('zh-TW', {
            hour: 'numeric',
            minute: 'numeric',
          }).format(new Date(weatherElement.observationTime))}{' '}
          <img
            className='w-8 ml-3'
            onClick={fetchData}
            src='https://cdn-icons-png.flaticon.com/512/44/44650.png'
          />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
