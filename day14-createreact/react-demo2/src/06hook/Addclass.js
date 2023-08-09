import React, { Component } from 'react'

export class Addclass extends Component {
    state = {
        count: 1
    }
    render() {
        return (
        <div>
            <p>{this.state.count}</p>
            <button onClick={this.add}>加1</button>
        </div>
        )
    }

    add = () => {
        this.setState({count:this.state.count+1})
    }
}

export default Addclass
