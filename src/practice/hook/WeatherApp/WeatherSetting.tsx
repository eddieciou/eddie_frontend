import React, { useState } from 'react';
import { availableLocations } from './availableLocations';

const locations = availableLocations.map((location) => location.cityName);

interface WeatherSettingProps {
  setCurrentPage: (value: string) => void;
  cityName: string;
  setCurrentCity: (value: string) => void;
}

function WeatherSetting({ setCurrentPage, cityName, setCurrentCity }: WeatherSettingProps) {
  const [locationName, setLocationName] = useState(cityName);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // STEP 5：把使用者輸入的內容更新到 React 內的資料狀態
    setLocationName(e.target.value);
  };

  const handleSave = () => {
    // STEP 2：判斷使用者填寫的地區是否包含在 locations 陣列內
    if (locations.includes(locationName)) {
      setCurrentCity(locationName);
      // STEP 3：透過 setCurrentPage 導回天氣資訊頁
      setCurrentPage('WeatherCard');
    } else {
      // STEP 4：若不包含在 locations 內，則顯示錯誤提示
      alert(`儲存失敗：您輸入的 ${locationName} 並非有效的地區`);
      return;
    }
  };

  return (
    <div className='relative w-72 shadow-lg shadow-gray-700 bg-white p-2'>
      <div className='text-xl mb-6'>設定</div>
      <label className='block text-sm mb-3' htmlFor='location'>
        地區
      </label>
      <input
        onChange={handleChange}
        className='block border border-black outline-0 w-full text-xl px-1 py-1.5 mb-6'
        list='location-list'
        id='location'
        name='location'
        value={locationName}
      />
      <datalist id='location-list'>
        {locations.map((location) => (
          <option value={location} key={location} />
        ))}
      </datalist>
      <div className='flex justify-between items-center'>
        <button
          onClick={() => setCurrentPage('WeatherCard')}
          className='flex items-center justify-center whitespace-nowrap select-none m-0 tracking-normal leading-4 cursor-pointer overflow-visible border rounded-lg w-20 h-12 bg-gray-500 text-white'
        >
          返回
        </button>
        <button
          onClick={handleSave}
          className='flex items-center justify-center whitespace-nowrap select-none m-0 tracking-normal leading-4 cursor-pointer overflow-visible border rounded-lg w-20 h-12 bg-blue-500 text-white'
        >
          儲存
        </button>
      </div>
    </div>
  );
}

export default WeatherSetting;
