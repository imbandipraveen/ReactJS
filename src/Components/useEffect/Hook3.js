import React from 'react'
import { useState,useEffect } from 'react'
function Hook3() {
    const [count,setCount]=useState(0)
    useEffect(()=>{
      const interval=setInterval(()=>{
        setCount(prevState=>prevState+1)
      },1000)
      setTimeout(()=>{
        clearInterval(interval)
 
       },5000)
     return ()=>{
   
     }
    },[])
  return (
    <div>
        <button className='button button-count'>{count}</button>
    </div>
  )
}

export default Hook3