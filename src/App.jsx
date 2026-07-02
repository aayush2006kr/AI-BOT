import React from 'react'
import "./App.css" 
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>

      <div className="screens">

        <div className="screen1"></div>

        <div className="screen2"></div>

        <div className="inputBox"></div>
        
      </div>
    </div>
  )
}

export default App