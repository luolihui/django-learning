import React, { Component } from 'react'
import PropUsername from './04highzj'

export class register extends Component {
    render() {
        return (
            <div>
                <h3>register</h3>
                <p>{this.props.username} 注册了</p>
            </div>
        )
    }
}

export default PropUsername(register)

// import React, { Component } from 'react'

// export class register extends Component {
//     state = {
//         username: ''
//     }

//     componentDidMount() {
//         const username = 'admin'
//         this.setState({ username })
//     }

//     render() {
//         return (
//             <div>
//                 <h3>register</h3>
//                 <p>{this.state.username} 注册了</p>
//             </div>
//         )
//     }
// }

// export default register
