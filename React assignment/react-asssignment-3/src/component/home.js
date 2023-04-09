import React from 'react'
import { useState } from 'react';
import NewData from "./newData"
import Data from "./data"
export default function Home() {

    let alldata=[
        {
            id:1,
            title:"ibrahim",
            desc:"hellow everyone how are u"
        },
        {
            id:2,
            title:"ibrahim chowdhury",
            desc:"hellow everyone how are u"
        },
    ]

    const [AllData, setAllData] = useState(alldata);

   let handleAddData=(newData)=>{
        setAllData((prev)=> {
            return [...prev,newData]
        })
    }
    console.log(AllData)
    
  return (
    <div>
            <div>
                <h3>Collect Data from a Form </h3>
                <NewData  addData={handleAddData} />

            </div>

            <Data aldta={AllData}  />

    </div>
  )
}
