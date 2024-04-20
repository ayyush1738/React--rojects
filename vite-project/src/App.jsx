import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [Counter, setCounter] = useState(15);
  // let Counter = 15;

  const addCounter = ()=>{
    setCounter(Counter + 1);
  }

  const removeCount = ()=>{
    setCounter(Counter - 1);
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value: {Counter}</h2>

      <button onClick={addCounter}>Add value</button>
      <br />
      <button onClick={removeCount}>Remove value</button>
    </>
  )
}

export default App
