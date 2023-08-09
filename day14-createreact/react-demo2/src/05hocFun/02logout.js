import React, { Component } from 'react'
import PropUsername from './04highzj'

export class logout extends Component {
    render() {
        return (
            <div>
                <h3>logout</h3>
                <p>{this.props.username} 退出登录</p>
            </div>
        )
    }
}

export default PropUsername(logout)

// import React, { Component } from 'react'

// export class logout extends Component {
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
//                 <h3>logout</h3>
//                 <p>{this.state.username} 退出登录</p>
//             </div>
//         )
//     }
// }

// export default logout
