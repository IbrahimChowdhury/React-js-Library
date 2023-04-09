import React, { Component } from 'react'

export default class onchange extends Component {


    constructor(props) {
      super(props)
    
      this.state = {
        changedValue:''
      }
    }



    handleChange=(e)=>{
           this.setState({
            changedValue:e.target.value
           },()=>{
            console.log(e.target.value)
           })
    }


  render() {
    return (
      <div>
        <hr/>
        <h3>onChange listner</h3>
        <input onChange={this.handleChange} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
