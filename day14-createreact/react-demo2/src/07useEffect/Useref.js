import React,{createRef, useRef, useEffect} from 'react'

export default function Useref() {
    // createRef存储DOM元素对象，刚创建时为null，渲染完成后，可以获取到对应的DOM对象
    // 每一次重新渲染都会创建一个新的ref对象
    const createref = createRef()
    console.log(createref)  // {current: null}
    // useRef每一次渲染的时候创建一个对象，之后重新渲染时，如果发现已经创建过，则不会创建新的，故性能更好
    const useref = useRef()
    console.log(useref) // {current: undefined}
    // 在useEffect中能看到渲染完成后DOM对象是input
    useEffect( () => {
        console.log(createref)
    })

    return (
        <div>
            <input type='text' ref={createref} />
            <button onClick={ () => { createref.current.focus()} }>获取焦点</button>
            <br/>
            <input type='text' ref={useref} />
            <button onClick={ () => {useref.current.focus()} }>获取</button>
        </div>
    )
}
