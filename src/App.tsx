import React from 'react'
import './App.css'

function App() {
  function greet(person: string, date: string) {
    console.log(`Hello ${person}, today is ${date}!`)
  }

  greet('Brendan', 'Friday')

  return <h1 className='text-3xl font-bold underline'>Hello world!</h1>
}

export default App
