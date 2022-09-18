import React from 'react'
import '../Styles/styles.css'
import { useState,useEffect } from 'react'
function Hook2() {
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)
    const [positions,setPositions] = useState({x:0,y:0});
    
    const logMousePosition=(e)=>{
        setX(e.clientX);
        setY(e.clientY)
        setPositions({x:e.clientX,y:e.clientY});
    }
    useEffect(()=>{
        window.addEventListener('mousemove',logMousePosition);
    })
  return (
    <div>
        <button className='button button-count'>x-{positions.x}</button>
        <button className='button button-count'>y-{positions.y}</button>
    </div>
  )
}

export default Hook2