import React, { Component } from 'react'
import PropUsername from './04highzj'

export class login extends Component {
    render() {
        return (
            <div>
                <h3>login</h3>
                <p>{this.props.username} 登录了</p>
            </div>
        )
    }
}

export default PropUsername(login)


// import React, { Component } from 'react'

// export class login extends Component {
//     state = {
//         username: ''
//     }

//     componentDidMount(){
//         const username = 'admin'
//         this.setState({username})
//     }

//     render() {
//         return (
//         <div>
//             <h3>login</h3>
//             <p>{this.state.username} 登录了</p>
//         </div>
//         )
//     }
// }

// export default login
