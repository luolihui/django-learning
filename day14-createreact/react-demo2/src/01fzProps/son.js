import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class son extends Component {
    // state = {
    //     name:'儿子',
    //     msg:'这是子组件'
    // }
    constructor(props){
        super()
        this.state = {
            name:'儿子',
            msg:'这是子组件',
            parentMsg: props.msg, // 通过props接收父组件传的某个值
        }
    }

    handleChange = (e) =>{
        this.setState({parentMsg: e.target.value})
        this.props.parentChange(e.target.value) // 调用父组件传过来的值
    }

    render() {
        let {name, msg, parentMsg} = this.state
        let {name: pName, msg: pMsg} = this.props // 将props中的值重命名
        return (
        <div>
                <h3>son 页面</h3>
                <p>姓名：{name}</p>
                <p>信息：{msg}</p>
                <p>来自父组件的信息：{parentMsg}--{pName}--{pMsg}</p>
                <input type='text' defaultValue={parentMsg} onChange={this.handleChange}/>
        </div>
        )
    }
}

// 使用props校验
son.propTypes = {
    name: PropTypes.string,
    msg: PropTypes.string.isRequired,
}

son.defaultProps = {
    name: '默认值',
    msg: '默认信息'
}

export default son
