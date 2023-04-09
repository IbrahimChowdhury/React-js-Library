import React,{Component} from "react"
import { FaDraft2Digital } from "react-icons/fa";

class class_card extends Component{
    render(){

        return(
          <div className="fnc_crd">
                <h3>This is Class Component</h3>
                <span><FaDraft2Digital/></span>
                <h1>{this.props.title}</h1>
                <h2>{this.props.body}</h2>

          </div>
        )
    }
}


export default class_card