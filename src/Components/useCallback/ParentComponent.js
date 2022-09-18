import React from 'react'
import Title from './Title'
import { useState } from 'react'
import Button from './Button';
import Count from './Count';
import { useCallback } from 'react';
function ParentComponent() {
    const [age,setAge]=useState(25);
    const [salary,setSalary]=useState(50000);

  return (
    <div>
        <Title/>
        <Count text="age" count={age}></Count>
        <Button handleClick={useCallback(()=>setAge(prevState=>prevState+1),[age])}>increment age</Button>
        <Count text="salary" count={salary}></Count>
        <Button handleClick={useCallback(()=>setSalary(prevState=>prevState+1000),[salary])}>increment Salary</Button>
    </div>
  )
}

export default ParentComponent