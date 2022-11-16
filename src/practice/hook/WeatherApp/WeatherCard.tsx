import React from 'react';
import WeatherIcon from './WeatherIcon';
import { WeatherElement } from './WeatherApp';

interface WeatherCardProps {
  cityName: string;
  weatherElement: WeatherElement;
  fetchData: () => void;
  setCurrentPage: (value: string) => void;
}

function WeatherCard({ weatherElement, fetchData, setCurrentPage, cityName }: WeatherCardProps) {
  return (
    <div className='relative w-96 shadow-lg shadow-gray-700 bg-white p-2'>
      <img
        onClick={() => setCurrentPage('WeatherSetting')}
        className='absolute top-2 right-1 w-8 cursor-pointer'
        src='https://cdn-icons-png.flaticon.com/512/126/126472.png'
      />
      <div className='text-3xl mb-6'>{cityName}</div>
      <div className='text-sm text-gray-500 mb-6'>{weatherElement.description}</div>
      <div className='flex justify-between items-center mb-6'>
        <div className='text-gray-500 text-6xl flex font-light'>
          {Math.round(weatherElement.temperature)}
          <div className='text-3xl font-normal'>°C</div>
        </div>
        <WeatherIcon currentWeatherCode={weatherElement.weatherCode} moment='night' />
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
  );
}

export default WeatherCard;
