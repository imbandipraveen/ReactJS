import React from 'react'
import { useState } from 'react'

function Hook2() {
    const [Name,setName]=useState({firstName:'',lastName:"",age:""});

    const setValue=(e,name)=>{
      console.log(e);
      // setName({...Name, [name]:e.target.value})
      setName((prevState)=>{return {...prevState,[name]:e.target.value}})
    }
    
  return (
    <div>
        <button className='button button-input'>{Name.firstName?Name.firstName:"firstName"}</button>
        <button className='button button-input'>{Name.lastName?Name.lastName:"lastName"}</button>
        <button className='button button-input'>{Name.age?Name.age:"age"}</button>
        <input placeholder='firstName' value={Name.firstName} onChange={(e)=>{setValue(e,'firstName')}}></input>
        <input placeholder='lastName' onChange={(e)=>{setValue(e,'lastName')}}></input>
        <input placeholder='age' onChange={(e)=>{setValue(e,'age')}}></input>
    </div>
  )
}

export default Hook2

