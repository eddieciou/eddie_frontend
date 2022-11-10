import React from 'react';

function PracticeVariants() {
  return (
    <div>
      {/* Hover*/}
      <div className='flex justify-evenly p-10'>
        <div className='box bg-red-500 hover:bg-red-400' tabIndex={1}>
          1
        </div>
        <div className='box bg-blue-500 hover:bg-blue-400' tabIndex={1}>
          2
        </div>
      </div>

      {/* Focus + ring*/}
      <div className='flex justify-evenly p-10'>
        <div className='box bg-red-500 hover:bg-red-400 ring-red-300 focus:ring-4' tabIndex={1}>
          1
        </div>
        <div className='box bg-blue-500 hover:bg-blue-400 ring-blue-300 focus:ring-4' tabIndex={1}>
          2
        </div>
      </div>

      {/* Focus-within*/}
      <div className='flex justify-evenly p-10 focus-within:bg-green-100'>
        <div className='box bg-red-500 hover:bg-red-400 ring-red-300 focus:ring-4' tabIndex={1}>
          1
        </div>
        <div className='box bg-blue-500 hover:bg-blue-400 ring-blue-300 focus:ring-4' tabIndex={1}>
          2
        </div>
      </div>

      {/* Group-hover*/}
      <div className='flex justify-evenly p-10 focus-within:bg-green-100 group'>
        <div
          className='box bg-red-500 hover:bg-red-400 ring-red-300 focus:ring-4 group-hover:text-gray-600'
          tabIndex={1}
        >
          1
        </div>
        <div
          className='box bg-blue-500 hover:bg-blue-400 ring-blue-300 focus:ring-4 group-hover:text-gray-600'
          tabIndex={1}
        >
          2
        </div>
      </div>
    </div>
  );
}

export default PracticeVariants;
