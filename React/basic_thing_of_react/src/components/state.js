import React, { Component } from 'react'

export default class state extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

    handleDecrement=()=>{
        this.setState({
            count:this.state.count-1
        })
    }




  render() {
    let {count}=this.state
    return (
      <div>
        <hr/>
        <h3>Create a state</h3>
        <h1>Count : {count}</h1>
        <button onClick={this.handleIncrement}>+</button>
        <button onClick={this.handleDecrement} disabled={count===0?true:false}>-</button>
      </div>
    )
  }
}
