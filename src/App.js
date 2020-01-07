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
import React, {Component, Fragment} from 'react'
import {wrapContext} from "./common/js/common";
import {
    TodoHeader,
    TodoInput,
    TodoList,
    Like
} from './components'
import {ConponentsOne} from  './common/js/othersComponents'
import  {Get} from  'react-axios'
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('点击context');
export default class APP extends Component {
    constructor(props) {
        super(props)
        this.state = {
            header: '待办事项',
            inputBtn: '点击',
            article: '<h2>我是富文本</h2>',
            list: [
                {
                    id: 0,
                    name: '吃饭',
                    scrip: true,
                    finish: '我'
                },
                {
                    id: 1,
                    name: '睡觉',
                    scrip: false,
                    finish: 'xiao ming'
                },
                {
                    id: 2,
                    name: '工作',
                    scrip: true,
                    finish: 'du jing'
                }
            ],
            contextNum:10,
            contextStr:'全局context'
        }
    }

    addTodio = (value) => {//注意使用的是箭头函数，方法this取不到
        this.setState({
            list: this.state.list.concat(//这里不能用push，因为push有返回值是数组的长度，用map也可以；要使用可以先拷贝[...]
                {
                    id: Math.random(),
                    name: value,
                    scrip: true,
                    finish: 'du11 jing'
                }
            )
        })

    }
    componentDidMount() {
    }
    contextAdd = ()=>{//在list中修改全局变量
          this.setState({
              contextNum:this.state.contextNum+1
          })
    }
    deleteList = () => {
        this.setState({
            list: []
        })
    }
    chekboxCompleted = (id) => {
        this.setState(
            {
                list: this.state.list.map((item, index) => {
                    if (id == index) {
                        item.scrip = !item.scrip
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
                <wrapContext.Provider  value={{contextStr:this.state.contextStr,
                     contextAdd:this.contextAdd
                    }}>
                    <TodoHeader title='头部信息'>{this.state.header}</TodoHeader>
                    <TodoInput btn="点击"
                               addTodo={this.addTodio}
                               deleteList={this.deleteList}/>
                    <TodoList
                        todos={this.state.list}
                        chekboxCompleted={this.chekboxCompleted}
                    ></TodoList>
                    <Like/>
                    <h5>axios的使用</h5>
                    <Get url='http://jsonplaceholder.typicode.com/db'>
                        {(error, response, isLoading, onReload) => {
                            return '一定要有返回語句'
                        }}
                    </Get>
                    <div>全局值:{this.state.contextNum}</div>
                    <h5>高阶组件</h5>
                    <ConponentsOne></ConponentsOne>
                </wrapContext.Provider>
            </Fragment>
        )
    }
}
