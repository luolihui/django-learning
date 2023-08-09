import React,{useState} from 'react'

export default function Usestate() {
    const [stus, set] = useState(0)
    const [sata, setsata] = useState( () => 100 )

    return (
      <div>
        <p>{stus}</p>
        <button onClick={() => set(stus + 1)}>加1</button>
        <button onClick={() => set(stus - 1)}>减1</button>
        <p>{sata}</p>
        <button onClick={ () => { setsata( (prev) => prev + 100 ) } }>+100</button>
        <button onClick={ () => { setsata( (prev) => prev - 100 ) } }>-100</button>
      </div>
    )
}
