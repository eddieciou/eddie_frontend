import React, { useState } from 'react';
import UnitControl from './UnitControl';
import CardFooter from './CardFooter';

function NetSpeedChanger() {
  const [inputValue, setInputValue] = useState(0);
  // STEP 3: 定義事件處理器
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // STEP 3-1: 取出使用者輸入的值
    const { value } = e.target;

    // STEP 3-2: 將這個值設定到 state 中
    setInputValue(parseInt(value));
  };

  return (
    <div className='m-0 p-0 min-h-screen flex items-center justify-center bg-gradient-to-tr from-sky-500 to-blue-700'>
      <div className='flex flex-col shadow-md shadow-gray-700 border rounded-xl bg-white h-96 w-72'>
        <div className='flex items-center justify-center leading-10 bg-blue-500 text-white text-xl rounded-tr-xl rounded-tl-xl'>
          Network Speed Converter
        </div>
        <div className='flex-1 p-8'>
          <UnitControl />
          <div className='flex items-center justify-between'>
            <div className='flex-1'>
              <div className='text-gray-500 font-bold mb-1'>Set</div>
              <input
                onChange={handleInputChange}
                type='number'
                className='text-3xl w-16 flex-1 inline-block bg-transparent border-0 outline-0 text-blue-500 font-bold'
                min='0'
              />
            </div>
            <span>{'=>'}</span>
            <div className='text-right flex-1'>
              <div className='text-gray-500 font-bold mb-1'>Show</div>
              <input
                type='text'
                className='text-3xl w-16 flex-1 inline-block bg-transparent border-0 outline-0 text-blue-500 font-bold text-right'
                disabled
                value={inputValue / 8}
              />
            </div>
          </div>
        </div>
        <CardFooter inputValue={inputValue} />
      </div>
    </div>
  );
}

export default NetSpeedChanger;
