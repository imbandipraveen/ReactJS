import React from 'react'
import { useReducer } from 'react'
function Hook2() {
    const intialState=0
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return state+action.payload;
            case 'decrement':
                return state-action.payload;
            case 'reset':
                return intialState;
            default:
                return state;
        }
    }
    const [count1,dispatch1]=useReducer(reducer,intialState)
    const [count2,dispatch2]=useReducer(reducer,intialState)
  return (
    <div>
       <button className='button button-count'>{count1}</button>
        <button className='button' onClick={()=>dispatch1({type:"increment",payload:5})}>increment5</button>
        <button className='button' onClick={()=>dispatch1({type:'decrement',payload:5})}>decrement5</button>
        <button className='button' onClick={()=>dispatch1({type:'reset'})}>reset</button>
        <button className='button button-count'>{count2}</button>
        <button className='button' onClick={()=>dispatch2({type:"increment",payload:5})}>increment5</button>
        <button className='button' onClick={()=>dispatch2({type:'decrement',payload:5})}>decrement5</button>
        <button className='button' onClick={()=>dispatch2({type:'reset'})}>reset</button>
    </div>
  )
}

export default Hook2