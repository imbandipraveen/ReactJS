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
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`
    }
    componentDidUpdate(){
        document.title=`clicked ${this.state.count} times`
    }
  render() {
    return (
      <div>
          <button className='button button-count'>{this.state.count}</button>
          <button className='button' onClick={this.increment}> increment</button>
      </div>
    )
  }
}

export default Class1