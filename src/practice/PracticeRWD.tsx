import React from 'react';

function PracticeRwd() {
  return (
    <div className='flex justify-center p-5'>
      <div className='product flex flex-col gap-2 sm:flex-row sm:w-full sm:gap-3 lg:justify-between'>
        <img className='rounded-lg sm:h-36' src='https://i.imgur.com/oLn9yvJ.jpg' />
        <span className='text-gray-700 flex flex-col gap-1 items-end'>
          <span className='text-xl font-bold sm:mb-1'>
            和兔兔一起用 Tailwind CSS 快速上手漂亮的原件開發
          </span>
          <span className='text-sm'>
            相信有在接觸前端領域的人或多或少都會聽過 Tailwind
            CSS，或是有一些人已經對它很熟悉、甚至是有用過了。 Tailwind 是一個 ...
          </span>
          <span className='text-red-600 font-black text-xl'>$ 790</span>
        </span>
      </div>
    </div>
  );
}

export default PracticeRwd;
