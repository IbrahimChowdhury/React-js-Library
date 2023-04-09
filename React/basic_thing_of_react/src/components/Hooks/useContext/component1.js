import React, { useState } from 'react'
import Component2 from "./component2"
import { UserContext } from './userContext'
export default function Component1() {

    const [user, setuser] = useState({
        id:101,
        name:"ibrahim Chowdhury"
    });

  return (
    <div>
        <br /><br />
        <hr /><hr />
        <h3>Why we use useContext</h3>
        <p>we use useContext to avoid props drilling. Suppose we need to to send data from parent to child then we normally Props Drilling . But if we want to avoid the props drilling then we use <b>useContext</b>  </p>


        <UserContext.Provider value={user}>
            <Component2/>
        </UserContext.Provider>

    </div>
  )
}
