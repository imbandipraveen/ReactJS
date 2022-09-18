import React, { Component } from 'react'
import '../Styles/styles.css'
export class Class1 extends Component {   
  
    constructor(props) {
    super(props)
    this.state = {
       count:0
    }
  }
  increment=()=>{
    this.setState((prevState)=>{
     return {
         count:prevState.count+1
     }
    })
}
decrement=()=>{
  this.setState((prevState)=>{
   return {
       count:prevState.count-1
   }
  })
}
reset=()=>{
this.setState({count:0})
}
  render() {
    
    return (
      <div>
         <button className='button button-count'>{this.state.count}</button>
          <button className=' button' onClick={this.increment}>increment </button>
          <button className=' button' onClick={this.decrement}>decrement </button>
          <button className=' button' onClick={this.reset}>reset </button>
      </div>
    )
  }
}

export default Class1