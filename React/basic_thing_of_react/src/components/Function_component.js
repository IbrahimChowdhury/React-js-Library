import React from "react";

let function_card=(props)=>{
        return(
           <div className="fnc_crd">
                <h1>{props.title}</h1>
                <h2>{props.body}</h2>

           </div>
        )
}

export default function_card