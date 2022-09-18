import React, { Component } from 'react'

export class Class2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    logMousePosition=(e)=>{
        this.setState({x:e.clientX,y:e.clientY})
    }
    componentDidMount(){
        window.addEventListener('click',this.logMousePosition)
    }
  render() {
    return (
      <div>
          <h1>X -<button className='button button-count'>{this.state.x}</button> Y-<button className='button button-count'>{this.state.y}</button></h1>
      </div>
    )
  }
}

export default Class2