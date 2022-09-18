import React, { useReducer } from 'react'
import '../Styles/styles.css'
import { buyCake } from '../../redux';
import { useSelector,useDispatch } from 'react-redux';
// import { Connect } from 'react-redux';
import { useState } from 'react';
import { addCake } from '../../redux';
function CakeContainer(props) {
 const cake= useSelector(state=>state.cake);
 const dispatch=useDispatch();
 const [number,setNumber]=useState({number1:1,number2:1});   

  return (
    <div>
          <h4>num of cakes - <button className='button button-input'>{cake.numOfCakes}</button> </h4> 
          <input type="number" value={number.number1} onChange={(e)=>setNumber((prev)=>{return {...prev,number1:e.target.value}})}/>
          <button className='button' onClick={()=>{dispatch(buyCake(number.number1))}}>buy {number.number1} {number?.number1>1?'cakes':'cake'}</button>
          <input type="number" value={number.number2} onChange={(e)=>{setNumber((prev)=>{return {...prev,number2:e.target.value}})}}/>
          <button className='button' onClick={()=>{dispatch(addCake(number.number2))}}>add {number.number2} {number?.number2>1?'cakes':'cake'}</button>

{/* 
        <h4>num of cakes - <button className='button button-input'>{props.numOfCakes}</button> </h4> 
        <button className='button' onClick={props.buyCake}>buy cakes</button> */}
    </div>
  )
}
// const mapStateToProps=(state)=>{
//     return {
//         numOfCakes:state.cake.numOfCakes
//     }
// }
// const mapDispatchToProps=(dispatch)=>{
//    return {
//        buyCake:()=>dispatch(buyCake())
//    }
// }
// export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer);

export default (CakeContainer)