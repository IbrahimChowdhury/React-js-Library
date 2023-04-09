import React, { useEffect, useState } from 'react'
import useFetch from './useFetch'
export default function CustomDataFetching() {
    const lodaingMessage="data is loading"

    const {Data, isLoading,err }=useFetch("https://jsonplaceholder.typicode.com/users")


  return (
    <div>
        <hr /><hr />
        <h1>Custom data Fetching</h1>
        <p>{err}</p>
        {isLoading && lodaingMessage }
        {
            Data.map((usr)=>(
                <div key={usr.id}>
                    <span>id:{usr.id} &nbsp;&nbsp; </span>
                    <span>name:{usr.name}</span>
                </div>
            ))
        }
    </div>
  )
}
