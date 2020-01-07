<!-- //相关笔记 

1.组件数据的传递：
   在函数组件中：使用props.xxx接收
   在内组件中使用：this.props.xxx
 组件在传递标签之类的使用children接收，如props.children.xx
 传递数据类型，要用{}；x='1' y='2'错误
 类型验证：使用第三方包prop-types;也可以设置默认值;只是在开发环境有效
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
2.组件更新：state、setState发生改变的时候setState参数是函数时候得要retrun{}；两个参数，一个是改变前state，
  另外一个改变后的state值
    this.setState(({count}) => {
                return {
                    count: count + 1
                }
            },()=>{
            //修改后的值
            });
3.标签事件，如果是函数，需要bind（this）一般在构造函数中绑定；或者使用箭头函数
3.方法的传递，注意this，在父级使用箭头函数
4.周期函数的使用：
shouldComponentUpdate();为了防止循环渲染render，可以在里面进行相关判断。   
5. 组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
     通过props接收：
       父：  <SplitPane
           left={
             <Contacts />
           }
           right={
             <Chat />
           } />
        子：<div className="SplitPane-left">
                  {props.left}
                </div>
                <div className="SplitPane-right">
                  {props.right}
                </div>
     通过：{props.children}接收
        父：
          <FancyBorder color="blue">
               <h1 className="Dialog-title">
                 Welcome
               </h1>
               <p className="Dialog-message">
                 Thank you for visiting our spacecraft!
               </p>
             </FancyBorder>
        子：  <div className={'FancyBorder FancyBorder-' + props.color}>
                {props.children}//上面放在标签间的内容
              </div> 
              
 6.设置焦点（选中dom元素）：使用ref;但是先要使用react内置方法创建：
        this.textInput = React.createRef();然后在dom中绑定 ref={this.textInput}
        // 注意：我们通过访问 “current” 来获得 DOM 节点
        方法中使用：  this.textInput.current.focus();           
 7.代码分割：
    a.动态导入： 使用了动态导入之后,webpack检测到这种语法会自动代码分割,也就是压缩到两个文件里
      前                                 后：
      ；import { add } from './math';        import("./math").then(math => {
                                               console.log(math.add(16, 26));
                                             });
     b.React.lazy:（还不支持服务端渲染）懒加载：需要结合Suspense使用，不然要报错 
            以前：import OtherComponent from './OtherComponent';
            现在：const OtherComponent = React.lazy(() => import('./OtherComponent'));  React.lazy接受一个函数，
                  函数需要动态的调用import   
          const OtherComponent = React.lazy(() => import('./OtherComponent'));             
          <Suspense fallback={<div>Loading...</div>}>
             <section>
               <OtherComponent />
               <AnotherComponent />
             </section>
           </Suspense                            
       Suspense使用场景：1.动态引入组件；2.异步请求数据的时候。可以在 fallback属性中添加loading
       https://blog.csdn.net/deng1456694385/article/details/88999842
       配合路由使用：
                   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
                   import React, { Suspense, lazy } from 'react';
                  const Home = lazy(() => import('./routes/Home'));
                  const About = lazy(() => import('./routes/About'));
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                      <Route exact path="/" component={Home}/>
                      <Route path="/about" component={About}/>
                    </Switch>
                  </Suspense>
                                    
     c.命名导出：export const MyUnusedComponent = /* ... */;     
                export { MyComponent as default } from "./ManyComponents.js"; //中间模块
                const MyComponent = lazy(() => import("./MyComponent.js"));                                     
 8.context ‘全局’数据：https://www.jianshu.com/p/eba2b76b290b
 如果要Context发挥作用，需要用到两种组件，一个是Context生产者(Provider)，通常是一个父节点，
 另外是一个Context的消费者(Consumer)。Provider子孙组件都可以通过Consumer接收
 通常是一个或者多个子节点。所以Context的使用基于生产者消费者模式。
 链接：https://www.jianshu.com/p/eba2b76b290b
      通过打印     console.log(React.createContext())；可以看到Provider和Consumer两个组件（注意是两个组件）
             当作组件使用：<Provider value=""/>  <Consumer>{方法、函数  }</Consumer>
     使用 context, 我们可以避免通过中间元素传递 props：
       https://www.jianshu.com/p/eba2b76b290b       
     方法二：参数为整个组件（底层组件）  ；便于控住，不需要中间层；减少了参数的传递数量；只需要顶层知道怎样使用的就可以了；
     function Page(props) {
       const user = props.user;
       const userLink = (
         <Link href={user.permalink}>
           <Avatar user={user} size={props.avatarSize} />
         </Link>
       );
       return <PageLayout userLink={userLink} />;
     }
     // 现在，我们有这样的组件：
     <Page user={user} avatarSize={avatarSize} />
     // ... 渲染出 ...
     <PageLayout userLink={...} />
     // ... 渲染出 ...
     <NavigationBar userLink={...} />
     // ... 渲染出 ...
     {props.userLink}
 9.错误边界：错误边界是一种 React 组件，
       这种组件可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI
    下列场景无法捕获错误：a.事件处理；b.异步代码；c.服务端渲染；d.自身抛出的错误
    如果一个 class 组件中定义了 static getDerivedStateFromError() 或 
    componentDidCatch() 这两个生命周期方法中的任意一个（或两个）时，那么它就变成一个错误边界。
    当抛出错误后，请使用 static getDerivedStateFromError() 渲染备用 UI ，使用 componentDidCatch() 打印错误信息。
 8.React 中的一个常见模式是一个组件返回多个元素。Fragments 允许你将子列表分组，而无需向 DOM 添加额外节点。
    比如在table组件中使用，用来包裹<td>
    也可以使用段语法来声明 Fragments。<> </>;但是没有key值以及其他属性
 9.类型检查： prop-types
 10.hook
     只用于函数式组建中，帮助函数式组件使用‘react’特性
     useState： 是允许你在 React 函数组件中添加 state 的 Hook。稍后我们将学习其他 Hook。     
        使用方法：
          import {useState} from 'react'
          const [count, setCount] = useState(10);useState('初始值')其返回值是state的值（count）和返回修改参数函数setCount
            其实就是一个数组的解构
          修改： setCount(count + 1)；调用的是修改函数;相当于类组件中this.setSate({})
          使用：函数中直接使用{count}，相当于类组件的{this.state.count}
     useEffect:执行一些‘副作用的操作’；比如dom更新后所做的一些操作；也就是常用的周期函数（只有class有）中的操作  
     使用： 参数为一个函数是回调函数（也有第二个）    useEffect（()=>{}） ;dom渲染后会执行函数内部的操作，此函数称之为effect；react并将保存
           该函数，以便以后使用。组件内部调用，其实使用了闭包的概率，可以获取该组件的state和props
           每次dom渲染后默认都会执行该操作；  可以返回一个清除函数；组件销毁时候清除
            第二个参数：如果不需要每次更新都去执行操作，可以传一个状态数组
            useEffect(() => {
              document.title = `You clicked ${count} times`;
            }, [count]); // 仅在 count 更改时更新；每次都会与上一次比较count的值，是否发生变化， 
         如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
         这就告诉 React 你的 effect 不依赖于 props 或 state 中的任何值，所以它永远都不需要重复执行。
     
     意义：不会像周期函数一样阻塞屏幕更新浏览器，这样感觉相应更快 ；可以多次使用，便于分割代码功能块，按照声明顺序依次调用；
            不像class组将那样
           需要在首次渲染时候处理的逻辑都放在componentDdidmounted周期中          
 11.hook使用规则：
      1.只在顶层调用，不要在循环、条件、嵌套函数中使用hook；
      2.不要在普通的js 函数中调用hook，（react组件中，自定义hook组件中调用）   
  12.自定义hook                
         为了公用性质；可以自定义hook，。自定义的hook像正常函数一样，但其名字应该始终以use开头；
         不同组件调用同一个自定义组件，不会共享里面的state等状态，也就是说这些状态是相对独立的，被隔开了的。   
         
         
 13.有状态和无状态组件
    state: 用于改变组件内容状态的值(动态)
    props: 用于组件通信进行传值
    
    无状态组件：其实就是一个函数，应该保持模板的纯粹性（少逻辑判断），便于复用，
    有状态组件，是一个class类，继承了类的组件是有状态组件，App.js就是一个有状态的组件
    
    区别:
    1.有状态组价是可以使用state的，只有继承了Component的组件才可以拥有state进行一些数据的存储和管理，同时可以拥有props
    2.但是无状态组件不存在state,只会有props
    最重要的区别是：
    有状态组件拥有生命周期这些函数，如果是无状态组件，那么就没有生命周期的函数
    原文链接：https://blog.csdn.net/rjn0814/article/details/90544237               
                   
                   
