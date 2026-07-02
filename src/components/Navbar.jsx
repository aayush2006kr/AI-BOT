import React from 'react'
import { RiRobot3Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div>
        <div className="nav flex items-center justify-between h-25 px-37.5 ">
        {/* bot logo and text */}
       <div className="logo flex items-center gap-2.5">

        <i className='text-5xl'><RiRobot3Fill /></i>
        <h3 className='text-2xl font-semibold'>AI<span className=' font-semiboldtext-2xl text-purple-500'>-BOT</span></h3>
       </div>
    {/* user */}
       <div className="user">
        <i className='text-2xl cursor-pointer'><FaRegUser /></i>
       </div>
        

      
        </div>
    </div>
  )
}

export default Navbar