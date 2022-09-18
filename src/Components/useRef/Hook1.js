import React from 'react'
import { useRef } from 'react'
import {useState} from 'react';
import '../Styles/styles.css'
function Hook1() {
    const [count,setCount]=useState(0)
    const timerRef=useRef(null)

   const startTimer=()=>{
       timerRef.current=setInterval(()=>{
           setCount(prevState=>prevState+1)
           console.log('incremented')
       },1000)
    }
    const stopTimer=()=>{
        clearInterval(timerRef.current)
    }
  return (
    <div>
       <button className='button button-input'>{count}</button>
       <button className='button' onClick={startTimer}>start</button>
       <button className='button' onClick={stopTimer}>stop</button>
    </div>
  )
}

export default Hook1