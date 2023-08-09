import React, { Component } from 'react'
import Hello from './hello'
import MainContext from './context'

export class main extends Component {
    render() {
        let obj = {name:'韩信', age:18}
        return (
        <div>
                <MainContext.Provider value={obj}>
                    main——爷爷组件
                    <Hello />
                </MainContext.Provider>
        </div>
        )
    }
}

export default main
