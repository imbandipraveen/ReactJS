import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
function HookFetch() {
    const [id,setId]=useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1)
    const [post,setPost]=useState({});
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
        .then((res)=>{
            setPost(res.data);
        }).catch((err)=>{
            console.log(err)
        })
    },[idFromButtonClick])
  return (
    <div>
        <input  value={id}  onChange={(e)=>{setId(e.target.value)}}></input>
        <button className='button' onClick={()=>setIdFromButtonClick(id)}>submit</button>
        <button className='button button-input'>{post.title}</button>

    </div>
  )
}

export default HookFetch