import React from 'react'
import Class1 from './Class1'
import Class2 from './Class2'
import Hook1 from './Hook1'
import Hook2 from './Hook2'
import '../Styles/styles.css'
import Class3 from './Class3'
import Hook3 from './Hook3'
import HookFetch from './HookFetch'
function useEffect() {
  return (
    <div>
        <div className='box'>
            <h1>useEffect1: class component</h1>
            <Class1/>
        </div>
        <div className='box'>
            <h1>useEffect1: Hook Component</h1>
            <Hook1/>
        </div>
        <div className='box'>
            <h1>useEffect2: Class Component</h1>
            <Class2/>
        </div>
        <div className='box'>
            <h1>useEffect2: Hook Component</h1>
            <Hook2/>
        </div>
        <div className='box'>
            <h1>useEffect3: Class Component</h1>
            <Class3/>
        </div>
        <div className='box'>
            <h1>useEffect3: Hook Component</h1>
            <Hook3/>
        </div>
        <div className='box'>
            <h1>useEffect3: Hook Component</h1>
            <HookFetch/>
        </div>
    </div>
  )
}

export default useEffect