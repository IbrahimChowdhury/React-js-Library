import React, { useContext } from 'react'
import { UserContext } from './userContext'
export default function Component4() {
    let user=useContext(UserContext)
  return (
    <div>
        <h5>This is how we can use useContext</h5>
        <h1>{user.id}</h1>
        <h1>{user.name}</h1>
    </div>
  )
}
