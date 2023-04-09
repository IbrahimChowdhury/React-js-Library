 import React, { Component } from 'react'
 
 export default class binding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
      this.handleClick=this.handleClick.bind(this)
    }

    handleClick(){
        this.setState({
            count:this.state.count+1
        })
    }


   render() {
     return (
       <div>
        <hr/>
        <h3>Binding</h3>
        <h4>{this.state.count}</h4>
        <button onClick={this.handleClick}>clickme</button>

       </div>
     )
   }
 }
 