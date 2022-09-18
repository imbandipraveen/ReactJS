import React from 'react'
import { useReducer } from 'react'
function Hook1() {
   const intialState=0;
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
    const [count,dispatch]=useReducer(reducer,intialState);

  return (
    <div>
        <button className='button button-count'>{count}</button>
        <button className='button' onClick={()=>dispatch({type:"increment",payload:5})}>increment5</button>
        <button className='button' onClick={()=>dispatch({type:'decrement',payload:5})}>decrement5</button>
        <button className='button' onClick={()=>dispatch({type:'reset'})}>reset</button>
    </div>
  )
}

export default Hook1