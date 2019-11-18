import React from 'react'
export default function TodoHeader(props) {
    return (
        <div>
         头部weizhi
       <h1>{props.title}</h1>
       <span>{props.children}</span>
 
        </div>
       
    )
}
