import React, {Component} from 'react'

// 高阶组件也是函数，参数是一个组件，返回的是新的组件
export default function PropUsername(WrapComponent) {
    class NewComponent extends Component{
        state = {
            username:''
        }

        componentDidMount(){
            const username = 'admin'
            this.setState({username})
        }

        render(){
            return <WrapComponent username={this.state.username}/>
        }
    }
    return NewComponent
}
