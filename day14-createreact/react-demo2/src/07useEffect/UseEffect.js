import React,{useState,useEffect} from 'react'

function Page(){
    return(
        <div>在一个函数式组件中嵌入另一个函数式组件</div>
    )
}

export default function UseEffect() {
    const [state,set] = useState(0)

    useEffect( () => {
        document.title = `你点击了${state}次`
    })
    return (
        <div>
            <p>{state}</p>
            <button onClick={ () => set(state+1) }>点击</button>
            <Page/>
        </div>
    )
}
