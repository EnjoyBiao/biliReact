import React, {Component} from  'react'
//高阶组件

  export const  ConponentsOne=  ()=> {
       return class  extends  Component{
               render() {
                   return (
                       <div>
                           <span>我来自高阶组件</span>
                       </div>
                   )
               }
       }
 }
