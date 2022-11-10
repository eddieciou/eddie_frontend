import React from 'react';

function PracticeAnimation() {
  return (
    <div className='flex justify-evenly p-10 focus-within:bg-green-100 group transition-all duration-1000 delay-1000'>
      <div
        className='box bg-red-500 hover:bg-red-400 ring-red-300 focus:ring-4 group-hover:text-gray-600 transition-all animate-bounce'
        tabIndex={0}
      >
        1
      </div>

      <div
        className='box bg-blue-500 hover:bg-blue-400 ring-blue-300 focus:ring-4 group-hover:text-gray-600 transition-all animate-pulse'
        tabIndex={1}
      >
        2
      </div>
    </div>
  );
}

export default PracticeAnimation;
