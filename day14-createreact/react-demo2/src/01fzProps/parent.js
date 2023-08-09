import React, { Component } from 'react'
import Son from './son'

export class parent extends Component {
    state = {
        name:'父亲',
        msg:'这是父组件'
    }
    // 子组件修改父组件值的函数
    parentChange(data){
        this.setState({msg:data}) // 接收子组件传过来的值，改变父组件的值
    }

    render() {
        let {name, msg} = this.state
        return (
        <div>
                <h3>parent 页面</h3>
                <p>姓名：{name}</p>
                <p>信息：{msg}</p>
                <p>...this.state 把所有值都传出去</p>
                <Son {...this.state} parentChange={this.parentChange.bind(this)}/>
        </div>
        )
    }
}

export default parent
