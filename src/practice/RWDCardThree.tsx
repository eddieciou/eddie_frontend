import React from 'react';

function RwdCardThree() {
  return (
    <div>
      <h1>標題</h1>
      <h2>副標題</h2>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
        <div className='md:flex'>
          <div className='md:shrink-0'>
            <img
              className='h-48 w-full object-cover md:h-full md:w-48'
              src='/img/store.jpg'
              alt='Modern building architecture'
            />
          </div>
          <div className='p-8'>
            <div className='uppercase tracking-wide text-sm text-indigo-500 font-semibold'>
              Company retreats
            </div>
            <a
              href='#'
              className='block mt-1 text-lg leading-tight font-medium text-black hover:underline'
            >
              Incredible accomodation for your team
            </a>
            <p className='mt-2 text-slate-500'>
              Looking to take your team away on a retreat to enjoy awesome food and take in some
              sunshine? We have a list of places to do just that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RwdCardThree;
