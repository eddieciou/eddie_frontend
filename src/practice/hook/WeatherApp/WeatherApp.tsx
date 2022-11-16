import React from 'react';
import useWeatherApi from './useWeatherApi';
import { WeatherTypes } from './WeatherIcon';
import WeatherCard from './WeatherCard';

export interface WeatherElement {
  observationTime: Date;
  locationName: string;
  humid: number;
  temperature: number;
  windSpeed: number;
  description: string;
  weatherCode: keyof WeatherTypes;
  rainPossibility: number;
  comfortability: string;
}

function WeatherApp() {
  const [weatherElement, fetchData] = useWeatherApi();

  return (
    <div className='bg-gray-200 min-h-screen flex items-center justify-center'>
      <WeatherCard weatherElement={weatherElement} fetchData={fetchData} />
    </div>
  );
}

export default WeatherApp;
