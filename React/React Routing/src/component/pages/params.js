import React from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {

        let {userID}=useParams()

  return (
    <div>
        
        <h1>{userID}</h1>

    </div>
  )
}
