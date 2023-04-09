import React, { useState } from 'react'
import Todos from "./todos"
import AddTodo from "./newTodo"
import { v4 as uuidv4 } from 'uuid';

export default function Home() {

  
   
    
    const [allTodos, setallTodos] = useState([]);

    let addNewTodo=(todo)=>{
        setallTodos((prev)=>{
            let newTodo={
                id:uuidv4(),
                title:todo.title,
                desc:todo.desc
            }
            console.log(newTodo)
            return [...prev, newTodo]
        })
    }

    let deleteTodo=(id)=>{
            setallTodos((prev)=>{
                let filterTodo=allTodos.filter((todo)=>todo.id!==id)
                return filterTodo
            })
    }

  return (
    <div>
        <h2>Todo Application </h2> 
        
        <AddTodo addTodo={addNewTodo} />

       <Todos removeTodo={deleteTodo}  todos={allTodos}  />
    </div>
  )
}
