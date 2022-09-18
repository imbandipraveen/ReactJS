import React from 'react'
import { useState } from 'react'
function Hook3() {
    const [A,setA]=useState([])
    const [value,setValue]=useState();

    const generateRandom=()=>{
    
        if(value){
        setA([...A,value])
        }
        else{
            const value=Math.ceil(Math.random()*10)
            setA([...A,value])
        }
    }
    const removeNumber=()=>{
        const values = [...A];
        values.pop();
        setA([...values]);
    }
  return (
    <div>
        <button className='button button-input'>{
            A?A.map((item)=>{
                return (
                    <button className='button'>
                        {item}
                </button>
                )
            }):null
        }</button>
        <br/>
        <input onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={generateRandom}>Add</button>
        <button onClick={removeNumber}>Remove</button>
    </div>
  )
}

export default Hook3