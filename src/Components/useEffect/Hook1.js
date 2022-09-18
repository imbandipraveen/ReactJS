import React from 'react'
import { useState,useEffect } from 'react'
import '../Styles/styles.css'
function Hook1() {
    const [count,setCount]=useState(0)
    const increment=()=>{
        setCount(prevState=>prevState+1)
    }
    useEffect(()=>{ //componentDidMount
        document.title=`clicked ${count} times`
    },[])
    useEffect(()=>{  //componentDidUpdate
        document.title=`clicked ${count} times`
    },[count]) 
  return (
    <div>
        <button className='button button-count'>{count}</button>
        <button className='button' onClick={increment}>increment</button>
    </div>
  )
}

export default Hook1