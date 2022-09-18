import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
function Hook1() {
    const [count1,setCount1]=useState(0)
    const [count2,setCount2]=useState(0)
    const isEven=useMemo(()=>{
        var i=0;
        while(i<=20000  ) {
            console.log("keerthi")
            i++
        }
        return count2%2===0;
    },[count2]);

  return (
    <div>
        <button className='button button-count' onClick={()=>setCount1(prevState=>prevState+1)}>{count1}</button>
        <button className='button button-count' onClick={()=>setCount2(prevState=>prevState+1)}>{count2}</button>
        <button className='button button-input'>{isEven?'even':'odd'}</button>
    </div>
  )
}
export default Hook1