import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(5);

  const handleClink = (type: string) => {
    if (type === 'increment') {
      setCount(count + 1);
    }
    if (type === 'decrement') {
      setCount(count - 1);
    }
  };

  return (
    <div className='flex items-center flex-col w-36'>
      {/* 向上箭頭*/}
      <div
        className={`${count >= 10 && 'hidden'} chevron hover:bg-chevronUpHover bg-chevronUp`}
        onClick={() => handleClink('increment')}
      ></div>
      {/* 數字*/}
      <div className='text-7xl text-white font-mono text-center leading-7 select-none'>{count}</div>
      {/* 向下箭頭*/}
      <div
        className={`${count <= 0 && 'hidden'} chevron hover:bg-chevronDownHover bg-chevronDown`}
        onClick={() => handleClink('decrement')}
      ></div>
    </div>
  );
}

export default Counter;
