// import React, { Component } from 'react' 、、使用rcc 使用class的方式创建组件 安装es7后

// export default class APP extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
// import React from 'react'  rfc使用function的方式穿件组件

// export default function APP() {
//     return (
//         <div>
            
//         </div>
//     )
// }
//Fragment相当于一个空标签，还可以直接写空标签<></>
import React, { Component , Fragment} from 'react'
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
}from './components'


export default class APP extends Component {
    constructor(){
        super()
      this.state={
            header:'待办事项',
            inputBtn:'点击',
            article:'<h2>我是富文本</h2>',
            list:[
                {
                    id:0,
                    name:'吃饭',
                    scrip:true,
                    finish:'我'
                },
                {
                    id:1,
                    name:'睡觉',
                    scrip:false,
                    finish:'xiao ming'
                },
                {
                    id:2,
                    name:'工作',
                    scrip:true,
                    finish:'du jing'
                }
            ]
        }
    }
    addTodio=(value)=>{//注意使用的是箭头函数，方法this取不到
        this.setState({
            list:this.state.list.concat(//这里不能用push，因为push有返回值是数组的长度，用map也可以；要使用可以先拷贝[...]
                {
                    id: Math.random(),
                    name:value,
                    scrip:true,
                    finish:'du11 jing'
                }
            )
        })
       
    }
    deleteList=()=>{
      this.setState({
          list:[]
      })
    }
    chekboxCompleted=(id)=>{
        console.log(id)
       this.setState(
           {
            list:this.state.list.map((item,index)=>{
               if(id == index){
                   item.scrip= !item.scrip
                   return item
               }
               return item 
            })
           }
       )
    }
    render() {
        return (
            <Fragment>
          <TodoHeader title='头部信息' >{this.state.header}</TodoHeader>
              <TodoInput  btn="点击" 
              addTodo={this.addTodio}
              deleteList={this.deleteList}/>
              <TodoList 
              todos={this.state.list}
              chekboxCompleted={this.chekboxCompleted}
              ></TodoList>
              <Like/>
            </Fragment>
        )
    }
}
