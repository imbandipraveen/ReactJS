import React from 'react'
import {connect} from 'react-redux'
import '../Styles/styles.css'
import { buyChocolate } from '../../redux'
function ChocolateContainer({numOfChocolates,buyChocolate}) {
  return (
    <div>
      <h4>num of choclates <button className='button button-count'>{numOfChocolates}</button> </h4>
      <button className='button' onClick={buyChocolate}>buy choclate</button>
      {console.log("bandi praveen",numOfChocolates)}
    </div>
  )
}
const mapStateToProps=(state)=>{
return {
    numOfChocolates:state.chocolate.numOfChocolates
}
}
const mapDispatchToProps=(dispatch)=>{
  return {
    buyChocolate:()=>{
      dispatch(buyChocolate())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChocolateContainer)