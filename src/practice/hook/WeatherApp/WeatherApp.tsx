import React, { useState, useEffect } from 'react';
import useWeatherApi from './useWeatherApi';
import { WeatherTypes } from './WeatherIcon';
import WeatherCard from './WeatherCard';
import WeatherSetting from './WeatherSetting';
import { findLocation } from './availableLocations';

export interface WeatherElement {
  observationTime: Date;
  humid: number;
  temperature: number;
  windSpeed: number;
  description: string;
  weatherCode: keyof WeatherTypes;
  rainPossibility: number;
  comfortability: string;
}

function WeatherApp() {
  const storageCity = localStorage.getItem('cityName');

  const [currentCity, setCurrentCity] = useState(storageCity || '臺北市');
  const currentLocation = findLocation(currentCity) || { cityName: '' };

  const [weatherElement, fetchData] = useWeatherApi(currentLocation);
  const [currentPage, setCurrentPage] = useState('WeatherCard');

  useEffect(() => {
    localStorage.setItem('cityName', currentCity);
    // STEP 3-2：dependencies 中放入 currentCity
  }, [currentCity]);

  return (
    <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
      {currentPage === 'WeatherCard' && (
        <WeatherCard
          cityName={currentLocation.cityName}
          weatherElement={weatherElement}
          fetchData={fetchData}
          setCurrentPage={setCurrentPage}
        />
      )}
      {currentPage === 'WeatherSetting' && (
        <WeatherSetting
          cityName={currentLocation.cityName}
          setCurrentCity={setCurrentCity}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

export default WeatherApp;
