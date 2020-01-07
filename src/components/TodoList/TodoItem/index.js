import React, { Component } from 'react'
import {wrapContext} from "../../../common/js/common";

export default class index extends Component {
    constructor(){
        super()
        this.state={
            completeText:''
        }
    }
    // shouldComponentUpdate(nextProps,nextState){//有两个参数，一个是nextProps,nextState

    // //优化，如果不处理，每次点击都会去render每一个既是三次render；可以使用第三方验证（比对），或者有个purComponent
    // //还可以通过下面的getDerivedStateFromProps来优化
    //      return nextProps.scrip !== this.props.scrip
    // }
    // static getDerivedStateFromProps(props){

    // }
   checkoxChanged= ()=>{
     this.props.chekboxCompleted(this.props.id)
   }
   globalDatas= ()=>{
        return (
            <wrapContext.Consumer>{({contextStr})=>{
                return <span style={{margin:'0 10px'}}>{contextStr}</span>

            }}</wrapContext.Consumer>
        )
   }
    render() {

        return (
            <li>
                <input type="checkbox"
                checked={this.props.scrip}
                onChange={this.checkoxChanged}
                ></input>
                 {this.props.name}{this.props.scrip ? '完成' : '失败'}
                {this.globalDatas()}
            </li>
        )
    }
}
