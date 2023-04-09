import React from "react"

let date = new Date()

function Card(props){
return <div className="card">
    <h1 className="card_title">{props.title}</h1>    
    <p className="card_body"> {props.body}</p>
    
    <h2 className="card_footer">created at:  {date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear()}</h2>
    </div>
}


export default Card