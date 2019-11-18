// 第一种导出方式


// import TodoHeader  from './TodoHeader'
// import TodoInput from './TodoInput'
// export {
//     TodoHeader,
//     TodoInput
// }

//第二种导出方式;不需要加处理时候可以这样导出

export {default as TodoHeader } from './TodoHeader'
export {default as TodoInput } from './TodoInput'
export {default as TodoList}   from './TodoList'
export {default as Like}   from './Like'