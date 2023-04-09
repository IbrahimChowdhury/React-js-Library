import React, { Component } from 'react'
import Home from "./home"
import Login from "./login"
export default class indx extends Component {

constructor(props) {
  super(props)

  this.state = {
     cndn:true
  }
}


  render() {
  
    return (
      <div>
        <hr/>
        <h3>Conditional Render</h3>
        {this.state.cndn?<Home/>: <Login/>}
      </div>
    )
  }
}
