import React, { Component } from 'react'

export default class index extends Component {
    constructor(){
        super()
        this.state={
            isLiked:false
        }
    }
    handleClick=()=>{
     // this.state.isLiked=!this.state.isLiked;不允许使用这种方式修改状态，数据能改变，但界面不会刷新
     //要使用setState；是一个异步操作
     //有两个参数，第一个参数有两种情况、
     //1.传一个对象，2.传一个方法,retrun一个对象;方法可以有两个参数，上一次的值对象和上一次的参数
    //  this.setState({
    //      isLiked:!this.state.isLiked
    //  })
    this.setState((up,props)=>{
        return {
            isLiked:!up.isLiked
        }
    },()=>{
        //由于是异步的，要想获取最新的参数
       // 就要在这里获取
    })
    }
    render() {
        return (
            <div>
                <span onClick={this.handleClick}>
                {this.state.isLiked ? '取消 💝' :'喜欢 🖤'}
                </span>
            </div>
        )
    }
}
