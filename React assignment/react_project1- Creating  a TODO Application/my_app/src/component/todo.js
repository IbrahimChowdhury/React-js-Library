import { MdOutlineDeleteOutline } from "react-icons/md";
import { RiDeleteBinFill } from "react-icons/ri";
import "./css/todo.css"

import React from 'react'

export default function ShowTodo(props) {



  

  const handleClick = () => {
    props.onRemoveTodo(props.tdo.id);
  };
  return (
    <div className="maindiv">
        <div>
            <h2>{props.tdo.title}</h2>
            <p>{props.tdo.desc}</p>
            

        </div>
        <button className="btn" onClick={handleClick}> <RiDeleteBinFill/> </button>
    </div>
  )
}
