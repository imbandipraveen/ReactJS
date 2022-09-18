import React from 'react'
import Hook1 from './Hook1'
import Hook2 from './Hook2'
import Hook3 from './Hook3'
import '../Styles/styles.css'
function ReducerHooks() {
  return (
    <div>
         <div className='box'>
            <h1>useReducer</h1>
            <Hook1/>
        </div>
        <div className='box'>
            <h1>useReducer : two counters</h1>
            <Hook2/>
        </div>
        <div className='box'>
            <h1>useReducer : Object </h1>
            <Hook3/>
        </div>
    </div>
  )
}

export default ReducerHooks