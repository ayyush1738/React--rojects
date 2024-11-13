import { useState, useCallback, useEffect  } from 'react'

function App() {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*()_+"
 
    for(let i=1;i<length;i++)
    {
      const char = Math.floor(Math.random() * str.length + 1) 
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword()
  }, [length, numberAllowed, charAllowed])


  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-pink-500'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='Password'
        readOnly
        />
        <button className='px-4 text-white bg-gray-800 outline-none py-0.5 shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-4'>
          <input type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />
          <label htmlFor="length">Length:{length}</label>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="number">Numbers{numberAllowed}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor="Charachter">Charachter</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
