import React, { Component,createRef } from 'react'

export default class TodoInput extends Component {
    constructor(){
        super()
        this.state={
            inputValue:'dddd',
            deleteBtn:'删除'
        }
        this.btnClickCopy=this.btnClick.bind(this);
        //在react中获取DOM，使用ref，只是要引入内置的方法createRef，一般在constructor中创建
        this.inputDom=createRef();
    }
    handlerInput=(e)=>{
        this.setState({
            inputValue:e.currentTarget.value
        }
        )
    }
    //1. btnClick=()=>{
    //     alert(this.state.inputValue)
    // }
    handkeyUp=(e)=>{
    
        //   (e.keyCode === 13 ) ? this.btnClick() : ''
        if( e.keyCode == 13){
            this.btnClick()
            this.setState({
                inputValue:''
            },()=>{//设置后回调函数
                this.inputDom.current.focus()
            })
            
        }
        
    }
    btnClick(){
        this.props.addTodo(this.state.inputValue)
    }
    btnDelete=()=>{
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
            </div>
        )
    }
}
//绑定时间的几种方式 因为有this的关系
//1.时间直接就是用箭头函数 
//使用函数需要bind(this),可以直接在dom元素中bing,ru  如：<button onClick={this.btnClick.bind(this)}>{this.props.btn}</button>
  //但是不推荐，每次render的时候都要去绑定，推荐在构造函数中bind，如上,注意对应
//传参：箭头函数不适用，一般使用bind