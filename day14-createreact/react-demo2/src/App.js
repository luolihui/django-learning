// rec 按 tab 键 
import React, { Component } from 'react'
// import Header from './00buju/Header'
// import Main from './00buju/Main2'
// import Footer from './00buju/Footer'
// import './App.css'

// import FzIndex from './01fzProps/index'
// import ZsIndex from './02zsProps/index'
// import Context from './03context/main'
// import Button from './04lifeCycle/button'

// import Login from './05hocFun/01login'
// import Logout from './05hocFun/02logout'
// import Register from './05hocFun/03register'

// import Login from './05hocFun/01login'
// import Logout from './05hocFun/02logout'
// import Register from './05hocFun/03register'

// import AddProps from './04lifeCycle/AddProps'

// import LoginCheck from './04lifeCycle/Logincheck'

// import AddClass from './06hook/Addclass'
// import HookAdd from './06hook/Hookadd'
// import UseState from './06hook/Usestate'
// import DuoState from './06hook/Duostus'

// import UseEffect from './07useEffect/UseEffect'
// import ClearEffect from './07useEffect/ClearEffect'
// import UseRef from './07useEffect/Useref'
import UseReducer from './07useEffect/Usereducer'

export class App extends Component {
  render() {
    return (
      <div>
          {/* <p>父子组件互相传值和Props传值校验</p>
          <FzIndex /> */}

          {/* <Header />
          <Main/>
          <Footer/> */}

          {/* <p>祖孙组件传值</p>
          <ZsIndex/> */}

          {/* <p>使用context进行跨组件通信</p>
          <Context/> */}

          {/* <p>组件的生命周期</p>
          <Button name='舍得'/> */}
          
          {/* <p>一般组件</p>
          <Login/>
          <Logout/>
          <Register/> */}

          {/* <p>高阶组件</p>
          <Login/>
          <Logout/>
          <Register/> */}

          {/* <p>增加Props</p>
          <AddProps/> */}

          {/* <p>高阶组件登录鉴权</p>
          <LoginCheck/> */}

          {/* <p>class累加器</p>
          <AddClass/>
          <p>Hook累加器</p>
          <HookAdd/>
          <p>useState累计</p>
          <UseState />
          <p>多个状态及复杂状态</p>
          <DuoState/> */}

          {/* <UseEffect/>
          <ClearEffect/>
          <UseRef/> */}
          <UseReducer/>
      </div>
    )
  }
}

export default App
