import React, {Component, createRef} from 'react'
import {useState,useEffect } from 'react'
import {wrapContext} from "../../common/js/common";
export default class TodoInput extends Component {
    constructor() {
        super()
        this.state = {
            inputValue: 'dddd',
            deleteBtn: '删除'
        }
        this.btnClickCopy = this.btnClick.bind(this);
        //在react中获取DOM，使用ref，只是要引入内置的方法createRef，一般在constructor中创建
        this.inputDom = createRef();
    }

    handlerInput = (e) => {//调用箭头函数不用bind，this
        this.setState({
                inputValue: e.currentTarget.value
            }
        )
    }
    //1. btnClick=()=>{
    //     alert(this.state.inputValue)
    // }
    handkeyUp = (e) => {

        //   (e.keyCode === 13 ) ? this.btnClick() : ''
        if (e.keyCode == 13) {
            this.btnClick()
            this.setState({
                inputValue: ''
            }, () => {//设置后回调函数
                this.inputDom.current.focus()
            })

        }

    }

    btnClick() {
        this.props.addTodo(this.state.inputValue)
    }

    btnDelete = () => {
        this.props.deleteList()
    }

    render() {
        return (
            <div>
                <input onChange={this.handlerInput}
                       onKeyUp={this.handkeyUp} placeholder='请输入 234'
                       ref={this.inputDom}
                       value={this.state.inputValue}></input>
                <button onClick={this.btnClickCopy}>{this.props.btn}</button>
                <button onClick={this.btnDelete}>{this.state.deleteBtn}</button>
                <wrapContext.Consumer>
                    {
                        ({contextAdd})=>{
                            return <button onClick={contextAdd}>修改全局变量+</button>
                        }
                    }
                </wrapContext.Consumer>
                 <HookExample></HookExample>
            </div>
        )
    }
}

function HookExample() {
    // 声明一个叫 “count” 的 state 变量。
    const [count, setCount] = useState(10);
    // 相当于 componentDidMount 和 componentDidUpdate:
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked ${count} times`;
    });
    const add=()=>{
        setCount(count + 1)
    }
    return (
        <>
            <fieldset>
                <legend>hook-learn</legend>
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={add }>
                        Click me
                    </button>
                </div>
            </fieldset>

        </>
    );
}

//绑定事件的几种方式 因为有this的关系
//1.事件直接就是用箭头函数
//使用函数需要bind(this),可以直接在dom元素中bing,ru  如：<button onClick={this.btnClick.bind(this)}>{this.props.btn}</button>
//但是不推荐，每次render的时候都要去绑定，推荐在构造函数中bind，因为构造函数只是执行一次， 如上,注意对应,
//传参：箭头函数不适用，一般使用bind
