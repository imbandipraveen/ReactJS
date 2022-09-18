import React from 'react'
import { useReducer } from 'react'
import '../Styles/styles.css'
function Hook3() {
    const intialState={firstCounter:0,secondCounter:0}
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment1':
                return {
                    ...state,firstCounter:state.firstCounter+action.payload
                }
            case 'decrement1':
                return {
                    ...state,firstCounter:state.firstCounter-action.payload
                }
            case 'reset1':
                return {
                    ...state,firstCounter:intialState.firstCounter
                }
            case 'increment2':
                return {
                    ...state,secondCounter:state.secondCounter+action.payload
                }
            case 'decrement2':
                return {
                    ...state,secondCounter:state.secondCounter-action.payload
                }
            case 'reset2':
                return {
                    ...state,secondCounter:intialState.secondCounter
                }
            default:
                return state;
        }
    }
    const [count,dispatch]=useReducer(reducer,intialState);
  return (
    <div>
        <button className='button button-count'>{count.firstCounter}</button>
        <button className='button' onClick={()=>dispatch({type:'increment1',payload:1})}>increment</button>
        <button className='button' onClick={()=>dispatch({type:'decrement1',payload:1})}>decrement</button>
        <button className='button' onClick={()=>dispatch({type:'reset1'})}>reset</button>

        <button className='button button-count'>{count.secondCounter}</button>
        <button className='button' onClick={()=>dispatch({type:'increment2',payload:1})}>increment</button>
        <button className='button' onClick={()=>dispatch({type:'decrement2',payload:1})}>decrement</button>
        <button className='button' onClick={()=>dispatch({type:'reset2'})}>reset</button>

    </div>
  )
}

export default Hook3