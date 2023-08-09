import React, { Component } from 'react'

class People extends Component{
    render(){
        return(
            <div>
                <h3>people组件</h3>
                <p>姓名：{this.props.name}, 年龄：{this.props.age}, {this.props.hobby}</p>
            </div>
        )
    }
}

class Boy extends Component {
    render() {
        return (
            <div>
                <h3>boy组件</h3>
                <p>姓名：{this.props.name}, 年龄：{this.props.age}, {this.props.hobby}</p>
            </div>
        )
    }
}

// 用高阶组件实现多个props的传值
const PropsComponent = (Component) => {
    // 返回一个函数式组件
    const newComponent = (props) => {
        return <Component {...props} hobby='看电视'/>
    }
    return newComponent
}

const Propspeople = PropsComponent(People)
const Propsboy = PropsComponent(Boy)

export class AddProps extends Component {
  render() {
    return (
      <div>
            <Propspeople name='韩信' age='34'/>
            <Propsboy name='项羽' age='42' />
      </div>
    )
  }
}

export default AddProps
