import React, { useState, useEffect } from 'react';

interface WeatherMatchIcon {
  isThunderstorm: string;
  isClear: string;
  isCloudyFog: string;
  isCloudy: string;
  isFog: string;
  isPartiallyClearWithRain: string;
  isSnowing: string;
}

interface WeatherMoment {
  day: WeatherMatchIcon;
  night: WeatherMatchIcon;
}

export interface WeatherTypes {
  1: keyof WeatherMatchIcon;
  2: keyof WeatherMatchIcon;
  3: keyof WeatherMatchIcon;
  4: keyof WeatherMatchIcon;
  5: keyof WeatherMatchIcon;
  6: keyof WeatherMatchIcon;
  7: keyof WeatherMatchIcon;
  8: keyof WeatherMatchIcon;
  9: keyof WeatherMatchIcon;
  10: keyof WeatherMatchIcon;
  11: keyof WeatherMatchIcon;
  12: keyof WeatherMatchIcon;
  13: keyof WeatherMatchIcon;
  14: keyof WeatherMatchIcon;
  15: keyof WeatherMatchIcon;
  16: keyof WeatherMatchIcon;
  17: keyof WeatherMatchIcon;
  18: keyof WeatherMatchIcon;
  19: keyof WeatherMatchIcon;
  20: keyof WeatherMatchIcon;
  21: keyof WeatherMatchIcon;
  22: keyof WeatherMatchIcon;
  23: keyof WeatherMatchIcon;
  24: keyof WeatherMatchIcon;
  25: keyof WeatherMatchIcon;
  26: keyof WeatherMatchIcon;
  27: keyof WeatherMatchIcon;
  28: keyof WeatherMatchIcon;
  29: keyof WeatherMatchIcon;
  30: keyof WeatherMatchIcon;
  31: keyof WeatherMatchIcon;
  32: keyof WeatherMatchIcon;
  33: keyof WeatherMatchIcon;
  34: keyof WeatherMatchIcon;
  35: keyof WeatherMatchIcon;
  36: keyof WeatherMatchIcon;
  37: keyof WeatherMatchIcon;
  38: keyof WeatherMatchIcon;
  39: keyof WeatherMatchIcon;
  41: keyof WeatherMatchIcon;
  42: keyof WeatherMatchIcon;
}

const weatherTypes: WeatherTypes = {
  1: 'isClear',
  2: 'isCloudy',
  3: 'isCloudy',
  4: 'isCloudy',
  5: 'isCloudy',
  6: 'isCloudy',
  7: 'isCloudy',
  8: 'isPartiallyClearWithRain',
  9: 'isPartiallyClearWithRain',
  10: 'isPartiallyClearWithRain',
  11: 'isPartiallyClearWithRain',
  12: 'isPartiallyClearWithRain',
  13: 'isPartiallyClearWithRain',
  14: 'isPartiallyClearWithRain',
  19: 'isPartiallyClearWithRain',
  20: 'isPartiallyClearWithRain',
  29: 'isPartiallyClearWithRain',
  30: 'isPartiallyClearWithRain',
  31: 'isPartiallyClearWithRain',
  32: 'isPartiallyClearWithRain',
  38: 'isPartiallyClearWithRain',
  39: 'isPartiallyClearWithRain',
  15: 'isThunderstorm',
  16: 'isThunderstorm',
  17: 'isThunderstorm',
  18: 'isThunderstorm',
  21: 'isThunderstorm',
  22: 'isThunderstorm',
  33: 'isThunderstorm',
  34: 'isThunderstorm',
  35: 'isThunderstorm',
  36: 'isThunderstorm',
  41: 'isThunderstorm',
  25: 'isCloudyFog',
  26: 'isCloudyFog',
  27: 'isCloudyFog',
  28: 'isCloudyFog',
  24: 'isFog',
  23: 'isSnowing',
  37: 'isSnowing',
  42: 'isSnowing',
};

const weatherIcons: WeatherMoment = {
  day: {
    isThunderstorm:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_11-128.png',
    isClear:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-128.png',
    isCloudyFog:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_39-128.png',
    isCloudy:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_2-128.png',
    isFog: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_49-128.png',
    isPartiallyClearWithRain:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_17-128.png',
    isSnowing:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_28-128.png',
  },
  night: {
    isThunderstorm:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_25-128.png',
    isClear:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_4-128.png',
    isCloudyFog:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_40-128.png',
    isCloudy:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_5-128.png',
    isFog: 'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_50-128.png',
    isPartiallyClearWithRain:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_18-128.png',
    isSnowing:
      'https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_37-128.png',
  },
};

interface WeatherIconProps {
  currentWeatherCode: keyof WeatherTypes;
  moment: keyof WeatherMoment;
}

function WeatherIcon({ currentWeatherCode, moment }: WeatherIconProps) {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState<keyof WeatherMatchIcon>('isClear');

  useEffect(() => {
    const currentWeatherIcon: keyof WeatherMatchIcon = weatherTypes[currentWeatherCode];

    // STEP 3：透過 `setCurrentWeatherIcon` 修改組件內的資料狀態
    setCurrentWeatherIcon(currentWeatherIcon);

    // STEP 4：...
  }, [currentWeatherIcon]);

  const imgSrc = weatherIcons[moment][currentWeatherIcon];

  return (
    <div className='basis-2/6'>
      <img className='w-24' src={imgSrc} />
    </div>
  );
}

export default WeatherIcon;
