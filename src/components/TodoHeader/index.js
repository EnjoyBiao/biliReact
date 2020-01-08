import React from 'react'
import propsType from 'prop-types'
export default function TodoHeader(props) {//函数式组件没有this
    return (
        <div>
<<<<<<< HEAD
         头部weizhi
        </div>
=======
            头部位置
            <h1>{props.title}</h1>
            <span>{props.children}</span>
            <BoundaryError></BoundaryError>
        </div>

>>>>>>> origin/developer
    )
}

class BoundaryError extends React.Component {//边界错误
    constructor(props) {
        super(props)
        this.state = {
            error: false,
            count:0
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
            this.setState(({count}) => {
            return {
                count: count + 1
            }
        });
        // this.setState(({count}) => ({//返回值相当于obj.assign
        //     count: count + 1
        // }));

        // this.setState((prevState,props)=>{
        //     return {
        //         count:prevState.count+1
        //     }
        // })
    }
    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <div>出错了</div>
        } else {
            return (
                <div>
                    <h4>边界处理演示</h4>
                    <button onClick={this.clickHandler}>点击</button><span>当前数:{this.state.count}</span>
                    <BoundaryErrorChild num={this.state.count}/>
                </div>
            )
        }
    }
}


function BoundaryErrorChild(props) {
        if (props.num >= 4){
            throw new Error('I crashed!');
        }
       return (
           <div>
               <span>当前数字为4时，会得到错误页面:{props.num}</span>
           </div>
       )
}
BoundaryErrorChild.propsType = {
    num:propsType.string
}
