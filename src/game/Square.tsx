import React from 'react'

type SquareProps = {
  value: string | null
  onClick: () => void
}

function Square(props: SquareProps) {
  return (
    <button
      className='bg-white border border-solid border-black text-2xl float-left font-bold leading-8 h-8 -mr-px -mt-px p-0 text-center w-8'
      onClick={props.onClick}
    >
      {props.value}
    </button>
  )
}

export default Square
