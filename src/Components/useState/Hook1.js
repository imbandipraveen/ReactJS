import React from 'react'
import { useState } from 'react'
// import { useState } from 'react';
import '../Styles/styles.css'
function Hook1() {
    const [count,seScount]=useState(0);

    const increment=()=>{
        seScount(prevstate=>prevstate+1)
    }
    const decrement=()=>{
      // seScount(prevstate=>prevstate-1)
      seScount((prevState)=>{ return prevState-1})
  }
  const reset=()=>{
    seScount(0)
}
  return (
    <div>
        <button className='button button-count'>{count}</button>
        <button className='button' onClick={increment}>increment</button>
        <button className='button' onClick={decrement}>decrement</button>
        <button className='button' onClick={reset}>reset</button>
    </div>
  )
}

export default Hook1