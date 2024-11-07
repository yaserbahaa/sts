import './App.css'
import { useEffect, useState } from 'react'
import { Route, Routes,useNavigate } from 'react-router-dom'
import axios from "axios"
import Home from './comp/home.jsx'
import AddNumbers from './comp/addNumbers.jsx'
import robot from './assets/image (1).png'
import chartGraph from './assets/stsgoldchartgraph(3).mp4'



function App() {
  const navigate = useNavigate()

  return (
    <>
    <Routes>
      <Route path='/info' element={<AddNumbers/>}/>
      <Route path='/' element={<Home/>}/>
    </Routes>
    {/* <video className='chartGraph' src={chartGraph} autoPlay muted playsInline /> */}
    {/* <div><h1>robot so ocool</h1>
    <img className="robot" src={robot} alt="" />
    </div> */}
    </>
  )
}

export default App
