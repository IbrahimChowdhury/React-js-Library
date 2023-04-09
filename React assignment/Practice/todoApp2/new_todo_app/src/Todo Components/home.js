import React, { useState } from 'react'
import Todos from "./todos"
import NewTodo from "./newTodo"
import { v4 as uuidv4 } from 'uuid';



export default function Home() {

    const [AllTodos, setAllTodos] = useState([]);


    let handleNewTodo = (todo) => {

        let newTodo = {
            id: uuidv4(),
            title: todo.title,
            desc: todo.desc
        }

        setAllTodos((prev) => {
            return [...prev, newTodo]
        })
    }

    let deleteTodo = (id) => {
        setAllTodos((prev) => {
            let filterTodo = AllTodos.filter((todo) => todo.id !== id)
            return filterTodo
        })
    }

    return (
        <div className='mainHomeDiv'>
            
                <h1 className='heading'>Todo Application</h1>
                <NewTodo addNewTodo={handleNewTodo} />
                <Todos todos={AllTodos} removeTodo={deleteTodo} />

                <button className='btn3' onClick={()=>{
                    setAllTodos([])
                }}> Clear All</button>
        </div>
    )
}
