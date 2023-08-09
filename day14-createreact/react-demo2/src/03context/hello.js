import React, { Component } from 'react'
import World from './world'
import MainContext from './context'

export class hello extends Component {
    static contextType = MainContext
    render() {
        return (
        <div>
                hello——父亲组件--{this.context.name}--{this.context.age}
                <World/>
        </div>
        )
    }
}

// hello.contextType = MainContext // 等价于 static contextType = MainContext

export default hello
