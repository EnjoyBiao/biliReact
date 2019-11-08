import React from 'react'
import {render} from 'react-dom'
import APP from './APP'
 render(
     <APP></APP>,
     document.querySelector('#root')
 )
//  index.js是一个入口文件，渲染入口

//其余单页面应该放在App中