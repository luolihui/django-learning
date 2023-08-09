import React, {useReducer} from 'react'
// 初始值
const initstate = {count: 0}
// 处理函数
function addsub(state,action){
    switch(action.type){
        case 'add':
            return {count: state.count + 1}
        case 'sub':
            return {count: state.count - 1}
        default:
            throw new Error()
    }
}


export default function Usereducer() {
    // 把函数和值分离
    const [state, dispatch] = useReducer(addsub, initstate)

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch( {type: 'add'} )}>加1</button>
            <button onClick={() => dispatch( {type: 'sub'} )}>减1</button>
        </div>
    )
}

// export default function Usereducer() {
//     // useReducer接收两个参数：reducer函数和初始值
//     // 这里的reducer函数接收两个参数：state和action，然后返回state和dispatch，dispatch用来发布更新state的事件
//     const [state, dispatch] = useReducer( (state, action) =>{
//         if(action === 'add'){
//             return state+1
//         }else if(action === 'cut'){
//             return state-1
//         }
//         return state
//     }, 0)

//     return (
//         <div>
//             <h3>{state}</h3>
//             <button onClick={ () => dispatch('add')}>加1</button>
//             <button onClick={ () => dispatch('cut')}>减1</button>
//         </div>
//     )
// }

