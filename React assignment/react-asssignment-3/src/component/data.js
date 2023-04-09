import React from 'react'

export default function Data(props) {
  return (
    <div>
        {props.aldta.map((data)=>(
            <div>
                <p>{data.title}</p>
                <p>{data.desc}</p>
            </div>
        ))}
    </div>
  )
}
