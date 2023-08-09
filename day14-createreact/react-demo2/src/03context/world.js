import React, { Component } from 'react'
import MainContext from './context'

export class world extends Component {
    render() {
        return (
            <MainContext.Consumer>
                {
                    context => {
                        return (
                            <div> world——孙子组件---{context.name}</div>
                        )
                    }
                }
            </MainContext.Consumer>
        )
    }
}

export default world
