import React, { Component } from 'react'

class Login extends Component{
    render(){
        return(
            <div>
                <h3>登录组件</h3>
                <input type='text' placeholder='请输入姓名'/>
                <button>登录</button>
            </div>
        )
    }
}

class Register extends Component {
    render() {
        return (
            <div>
                <h3>注册组件</h3>
                <input type='text' placeholder='请输入用户名'/>
                <input type='password' placeholder='请输入密码'/>
                <button>注册</button>
            </div>
        )
    }
}

// 利用高阶组件实现登录鉴权
function Auth(Component){
    const Newcomponent = (props) => {
        const {islogin} = props
        if(islogin){
            return <Component {...props} />
        }else{
            return <Login/>
        }
    }
    return Newcomponent
}

const AuthAdmin = Auth(Register)

export class Logincheck extends Component {
    state = {
        islogin: true
    }
    render() {
        return (
        <div>
                <AuthAdmin islogin={this.state.islogin} />
                <button onClick={this.check}>
                    {this.state.islogin ? '登录' : '注册'}
                </button>
        </div>
        )
    }
    check = () => {
        this.setState({islogin: !this.state.islogin})
    }
}

export default Logincheck
