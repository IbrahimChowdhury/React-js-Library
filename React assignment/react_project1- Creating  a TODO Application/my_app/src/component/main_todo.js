import React, { useState } from 'react'
import Todos from "./todos"
import "./css/maintodo.css"
import NewTodo from "./newTodo"
import { v4 as uuidv4 } from 'uuid';

export default function MainTodo() {

const [allTodos, setallTodos] = useState([]);

    
 
    let handleAddTodo=(todo)=>{
      setallTodos((prev)=>{
        
        let fulltodo={
          id:uuidv4(),
          title:todo.title,
          desc:todo.desc
        }
        console.log(allTodos)

        return [...prev,fulltodo]} )
      
        
    }


    let handleRemoveTodo=(id)=>{
      setallTodos((prevTodos) => {
        const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
        return filteredTodos;
      });
    }

  return (
    <div className='mainDiv' >
        <h2 className='todoHeading'>Todo App</h2>
        <NewTodo  addTodo={handleAddTodo} />
        {allTodos &&  <Todos tdos={allTodos} onRemoveTodo={handleRemoveTodo} />  }
        <button className='btn3' onClick={()=>{
          setallTodos([])
        }}>clear all</button>
    </div>

  )
}
