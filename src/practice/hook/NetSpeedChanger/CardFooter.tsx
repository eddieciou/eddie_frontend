import React from 'react';

interface CardFooterProps {
  inputValue: number;
}

function CardFooter({ inputValue }: CardFooterProps) {
  let criteria;
  if (inputValue === 0) {
    criteria = {
      title: '---',
      backgroundColor: 'bg-gray-400',
    };
  } else if (inputValue < 15) {
    criteria = {
      title: 'SLOW',
      backgroundColor: 'bg-red-500',
    };
  } else if (inputValue < 40) {
    criteria = {
      title: 'GOOD',
      backgroundColor: 'bg-green-500',
    };
  } else {
    criteria = {
      title: 'FAST',
      backgroundColor: 'bg-blue-500',
    };
  }
  return (
    <div
      className={`${criteria.backgroundColor} h-8 m-1 rounded-br-xl rounded-bl-xl flex items-center justify-center text-white`}
    >
      {criteria.title}
    </div>
  );
}

export default CardFooter;
