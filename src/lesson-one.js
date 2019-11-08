import React from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classNames'
import styled from 'styled-components'
import './index.css'
// es7插件;
// const app=(props)=>{//通过箭头函数
//     return (
//         <div>
//             <h1>{props.title}</h1>
//         </div>
//     )
// }
// const app1=<div>woshi</div>;//第一种方式
// const app2=app({title:'我是第二种方式'});

// ReactDOM.render(
//     app2,
//     document.querySelector('#root')
//     )
 // 第三种通过通过组件的形式，也就是标签的形式调用
 //创建组件的第一种方式，使用箭头函数（函数式创建），但是名字要大写；上面是原理
 const APP=(props)=>{
    return (
        <div>
            <span>{props.title}</span>
        </div>
    )
 };
//  ReactDOM.render(
//      <APP title='标签的形式'/>,
//      document.querySelector('#root')
//  )
 //第二种使用类的方式创建
//注意this来
 class APPCLASS extends React.Component{
       render(){
           return (
               <div>
                   <span >类的方式调用</span>
                   <h4>{this.props.title}</h4>
                    <APPZ></APPZ>
               </div>
           )
       }
 }
 const style2={color:'yellow'}
 const Styledcompent=styled.h3`
  color:red
 `
 class APPZ extends React.Component{//样式的使用方法
     render(){
         return (
            <div>
                <h5>内联式创建</h5>
            <p style={{color:'red'}}>方式一：记住style是一个对象</p>
            <p style={style2}>方式二</p>
            <h5>添加class方式创件，注意叫clasName</h5>
            <p className='class-name'>添加class方式创件</p>
            <h5>使用第三方包动态添加classnames、styledComponents等</h5>
            <p className={classNames('a',{'b':true,'c':false})}>
               我是第三方classNames 
            </p>
            <Styledcompent>styledCompents,相当于创建了一个组件</Styledcompent>
           </div>
         )
     }
 }
 ReactDOM.render(
     <APPCLASS title="类组件创建出来的参数"></APPCLASS>,
     document.querySelector('#root')
 )
//jsx的原理：jsx中包含的元素原本不是一个合法的js 语法；而通过jsx，把这些不合法的元素转化为含有该标签的对象
//{tag:'div',className:'name'};在react中就可以通过react.creatElement()方法结合jsx的标签对象来创建出合法的js
// React.createElement(
//     'div',
//     {
//         className:'name',
//         id:'name'
//     }
// )