import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  const [Counter, setCounter] = useState(15);
  // let Counter = 15;

  // const addCounter = ()=>{
  //   setCounter(Counter + 1);
  // }

  // const removeCount = ()=>{
  //   setCounter(Counter - 1);
  // }

  return (
    <>
      <h1 className='bg-green-400 text-white p-4 rounded-xl'>Vite App</h1>
      {/* <h2>Counter Value: {Counter}</h2>

      <button onClick={addCounter}>Add value</button>
      <br />
      <button onClick={removeCount}>Remove value</button> */}
      <Card />
    </>
  )
}

export default App
1