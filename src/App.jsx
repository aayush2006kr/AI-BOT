import React from 'react'
import "./App.css" 
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className="screens">

        <div className="screen1 w-screen h-[65vh] px-[150px] flex items-center justify-center flex-col">
         <h3 className='text-2xl font-semibold'>AI<span className=' font-semibold text-2xl text-purple-500'>-BOT</span></h3>
        </div>

        <div className="screen2"></div>

        <div className="inputBox px-[150px] h-[20vh] ">
          <div className="input w-[90%] mx-[auto] flex items-center gap-[10px] bg-zinc-800 rounded-lg">
            <input type="text" placeholder='Enter your prompt' className='flex-1 bg-transparent p-[15px] outline-none text-[18px] font-[500]' />
          </div>

        </div>
        
      </div>
    </div>
  )
}

export default App