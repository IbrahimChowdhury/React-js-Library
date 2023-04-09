import React, { useEffect, useState } from 'react'

export default function Fetch_data_using_useEffect() {

    const lodaingMessage=<p>Data is loading</p>

    const [todos, setTodos] = useState(null);
    const [isLoading, setisLoading] = useState(true);
    useEffect(() => {

       setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            setTodos(data)
            setisLoading(false)
        })
       }, 2000);


    }, [])


    return (
        <div>
            <br /><br />
            <hr /> <hr />
            <h2>fetch data from a Api  using useEffect</h2>
            {isLoading && lodaingMessage }
           {todos &&
            todos.map((todo)=> 
            (
              <div key={todo.id}>
                    <span > id:{todo.id} &nbsp;&nbsp; </span>
                    <span>name: {todo.name}</span>
                </div> 
            )
            )
           }


        </div>
    )
}
