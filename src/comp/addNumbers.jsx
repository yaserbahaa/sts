import { useEffect, useState } from 'react'
import axios from "axios"
import "../css/addNumbers.css"



export default function AddNumbers(){
    const [num,setNum]= useState(0)
    const [numberRes,setNumberRes]= useState(0)
  
  useEffect(()=>{
  },[])
  const senddata = async(e)=>{
    e.preventDefault()
    try{
      const res = await axios.post("http://localhost:4000/number",{number:num})
      console.log(res)
      setNumberRes(res.data.number)
      setNum(0)
    }
    catch{
      console.log("COULDENT SEND DATA")
      setNum(0)
    }
    }

    return(<>
        <div>
      <h2>number you have added is {numberRes} </h2>
      <h1>add your number</h1>
      <input type="text" onChange={(e)=>{setNum(e.target.value)}} value={num}/>
      <button className='btnNumberAdd' onClick={senddata}>sumbit</button>
    </div>
    </>)
}


