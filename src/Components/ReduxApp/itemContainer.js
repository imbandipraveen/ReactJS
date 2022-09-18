import React from 'react'
import { connect } from 'react-redux';
import { buyCake,buyChocolate } from '../../redux';
function itemContainer(props) {
  return (
    <div>
         <h4>num of choclates <button className='button button-count'>{props.item}</button> </h4>
      <button className='button' onClick={props.dispatchItem}>buy {props.cake?'cake':'chocolate'}</button>
      {/* {console.log("bandi praveen",numOfChocolates)} */}
        
    </div>
  )
}
const mapStateToProps=(state,ownProps)=>{
    const itemValue = ownProps.cake?state.cake.numOfCakes:state.chocolate.numOfChocolates;
    return {
        item:itemValue
    }
}
const mapDispatchToProps=(dispatch,ownProps)=>{
    const dispatchFunction = ownProps.cake?()=>dispatch(buyCake()):()=>dispatch(buyChocolate())
    return {
        dispatchItem:dispatchFunction
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(itemContainer) 