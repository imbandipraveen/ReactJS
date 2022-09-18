import React from 'react'
import { useReducer } from 'react'
function ExampleHook1() {
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
    const [count,dispatch] = useReducer(reducer,intialState);
  return (
    <div>
        <button>{count}</button>
        <button onClick={()=>{dispatch({type:'incremet',payload:50})}}>increment</button>
        <button onClick={()=>{dispatch({type:'decrement',payload:4})}}>decrement</button>
        <button onClick={()=>{dispatch({type:"reset"})}}></button>
    </div>
  )
}

export default ExampleHook1