import React, { useState } from 'react'
import "./App.css" 
import Navbar from './components/Navbar'

const App = () => {

const [Screen, setScreen] = useState(2)
let messages = [
  {
    role:"user",
    content: "Hello, How are you?"
  },
  {
    role:"ai",
    content:"I am fine , thank you! How about you?"
  },
  {
    role:"user",
    content:"I am also good , thanks"
  },
  {
    role:"ai",
    content:"ohh , thats so great to hear!"
  }
]

  return (
    <div>
      <Navbar/>

      <div className="screens">

      {
        screen ===1 ?
         <div className="screen1 w-screen h-[65vh] px-[150px] flex items-center justify-center flex-col">
         <h3 className='text-2xl font-semibold'>AI<span className=' font-semibold text-2xl text-purple-500'>-BOT</span></h3>
        </div>  :<>
          <div className="screen2 w-screen h-[65vh] px-[150px]">
            {
              messages ? messages.map((item,index)=>{
                return(
                  <>
                  {
                    item.role === "user"?
                    <div className='user rounded-3xl bg-gray-800 w-fit max-w-[40vw] mb-3 ml-auto p-[15px]'>
                      <p className='text-[14px] text-[gray]'>User</p>
                      <p>{item.content}</p>
                    </div>: <div className='ai rounded-3xl mb-3 w-fit max-w-[40vw] bg-gray-800 mr-auto p-[15px]'>
                    <p className='text-[14px] text-[gray]'>AI-BOT</p>
                      <p>{item.content}</p>
                    </div>
                    
                    
                  }
                  </>
                )
              })  : "NO, Messages Yet!"
            }
          </div>
        </>

      }

       

        

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