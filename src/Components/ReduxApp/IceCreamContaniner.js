import React from 'react'
import { buyIceCream } from '../../redux'
import { useSelector,useDispatch } from 'react-redux'
function IceCreamContaniner() {
    const numOfIceCreams=useSelector((state)=>state.iceCream.numOfIceCreams);
    const dispatch=useDispatch();
  return (
    <div>
         <div>
      <h4>num of ice creams <button className='button button-count'>{numOfIceCreams}</button> </h4>
      <button className='button' onClick={()=>dispatch(buyIceCream())}>buy choclate</button>
    </div>
    </div>
  )
}

export default IceCreamContaniner