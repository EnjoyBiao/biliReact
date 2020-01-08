import React, { Component } from 'react'
import TodoItem from './TodoItem'
export default class index extends Component {
    render() {
        return (
            <ul>
              {
                 
                  this.props.todos.map((item,index)=>{
                         return (
                            //  <TodoItem
                            //    name={item.name}
                            //    scrip={item.scrip}
                            //    finish={item.finish}
                            //    key={index}
                            //  ></TodoItem>
                            <TodoItem
                            key={index}
                            {...item}
                            chekboxCompleted={this.props.chekboxCompleted}
                            ></TodoItem>
                         )
                  })
        
              }
            </ul>
        )
    }
}
