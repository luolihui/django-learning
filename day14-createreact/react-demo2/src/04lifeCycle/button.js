import React, { Component } from 'react'

export class button extends Component {
    constructor(props){
        // 第一个阶段——初始化阶段
        super(props)
        this.state = {liked:false}
        console.group("%c 1-初始化阶段", "color: red", props, this.state)
    }

    handleClick(){
        this.setState({liked: !this.state.liked})
    }

    UNSAFE_componentWillMount(){ 
        // 需要加UNSAFE，DOM未渲染，只会在组件加载前调用一次，在render之前调用，可以调用setState改变状态
        console.group("%c 2-组件加载前", "color: green")
    }

    componentDidMount(){
        // 只会在加载后调用一次，在render后调用
        console.group('%c 4-组件加载后', 'color:orange')
    }

    // 改变状态时，执行顺序是5638
    shouldComponentUpdate(){
        console.group('%c 5-数据是否需要更新', 'color:#00ae9d')
        return true // true 代表组件需要更新
    }

    UNSAFE_componentWillUpdate(nextProps, nextState){
        console.group('%c 6-数据将要更新', 'color:#8552a1')
    }

    componentDidUpdate(nextProps, nextState){
        console.group('%c 8-数据已经更新', 'color:#7fb80e')
    }

    componentWillUnmount(){
        console.group('9-组件销毁')
    }
    render() {
        console.group("%c 3-组件加载或数据更新", "color:blue")
        const text = this.state.liked ? '喜欢':'不喜欢'
        return (
        <div>
               <p onClick={this.handleClick.bind(this)}>你{text}学习react</p>
        </div>
        )
    }
}

export default button
