<!-- //相关笔记 

1.组件数据的传递：
   在函数组件中：使用props.xxx接收
   在内组件中使用：this.props.xxx
 组件在传递标签之类的使用children接收，如props.children.xx
 传递数据类型，要用{}；x='1' y='2'错误
 类型验证：使用第三方包prop-types;也可以设置默认值
 TodoHeader.PropTypes = {
    x:PropTypes.number,
    title:PropTypes.string,
    y:PropTypes.number,
}  
注意：有状态组件：类式组件 
           constructor(){
                 super()
              this._json={}
      无状态组件：函数式组件
      受控组件：传递的参数，子组件无法修改，只能通过父级改变参数
 对于富文本的渲染：dangerouslySetInnerHTML={{__html: props.fu}}}     
 循环展开项 传递{...item}
2.组件更新：state、setstate发生改变的时候