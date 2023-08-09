import React,{useState,useEffect} from 'react'

export default function ClearEffect() {
    const [sta, setsta] = useState(0)

    const timer = useEffect( () => {
        setInterval( () => {
            setsta( (prev) => prev + 1 )
        }, 1000)
        // 清除定时器
        return () => clearInterval(timer)
    }, [])
  return (
    <div>
        <h3>{sta}</h3>
    </div>
  )
}
