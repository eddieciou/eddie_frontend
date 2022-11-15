import React from 'react';

function UnitControl() {
  return (
    <div className='flex items-center justify-between mb-12'>
      <div className='inline-flex bg-sky-500 items-center justify-center text-white rounded-md w-16 h-8'>
        Mbps
      </div>
      <span className='px-10'>{'<=>'}</span>
      <div className='inline-flex bg-sky-500 items-center justify-center text-white rounded-md w-16 h-8'>
        MB/s
      </div>
    </div>
  );
}

export default UnitControl;
