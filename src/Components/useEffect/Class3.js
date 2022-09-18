import React, { Component } from 'react'

export class Class3 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    componentDidMount(){
        this.interval=setInterval(()=>{
            this.setState((prevState)=>{
                return {
                    count:prevState.count+1
            }
            })
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
  render() {
    return (
      <div>
        <button className='button button-count'>{this.state.count}</button>
      </div>
    )
  }
}

export default Class3