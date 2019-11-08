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
    TodoItem
}from './components'
const _json={
    header:'我是头部',
    inputBtn:'点击',
    list:[
        {
            id:1,
            name:'liming'
        },
        {
            id:2,
            name:'chenbiao'
        },
        {
            id:3,
            name:'xiaohua'
        }
    ]
}

export default class APP extends Component {
    render() {
        return (
            <Fragment>
              <TodoHeader  />
              <TodoInput />
              <TodoItem></TodoItem>
            </Fragment>
        )
    }
}
