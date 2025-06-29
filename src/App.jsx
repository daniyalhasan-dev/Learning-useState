import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter , setCounter] = useState(0)
  const [color , setColor] = useState("black")
  const [textcolor , settextcolor] = useState("white")

  const addValue = () => {
    if (counter < 20) {
      // counter = counter + 1
    setCounter(counter + 1)

    }
  }

  const removeValue = () => {
    if (counter > 0) {
      // counter = counter - 1
    setCounter(counter - 1)
    }
  }
  
  const bgColorChanger = (Value) => {
    if (Value=="black") {
      settextcolor("white")
      setColor("black")
    }else{
      settextcolor("black")
      setColor("white")

    }
  }

  return (
    <>
    <div className='flex justify-end gap-2 p-2 text-lg leading-[18px]'>
      <button onClick={()=>bgColorChanger("black")} className='border border-amber-600 px-4 py-1 rounded-lg hover:bg-amber-500 hover:text-amber-50 duration-350 active:bg-amber-700'>Dark</button>
      <button onClick={()=>bgColorChanger("white")} className='border border-amber-600 px-4 py-1 rounded-lg hover:bg-amber-500 hover:text-amber-50 duration-350 active:bg-amber-700'>Light</button> 
    </div>
      < div  style={{
        backgroundColor: color,
        color:textcolor,
      }} className={`border  duration-400 transition-colors flex flex-col justify-center items-center border-black   w-[100vw]  `}>
      <h1 className='text-5xl'>Chai Aur React {counter}</h1>
      <h2>Counter Value: {counter}</h2>

      <button className='border px-4 mt-4 rounded-3xl' onClick={addValue}>Add Value</button>
      <br/>
      <button onClick={removeValue} className='border px-4 mt-4 rounded-3xl'>Remove Value</button>

      <p>Footer: {counter}</p>
      </div>
      
    </>
  )
} 

export default App