import React, {useState} from 'react'

// 调用函数useState的返回值是一个数组，数组第一个元素是当前状态state，第二个元素是一个修改状态的函数
export default function Hookadd() {
    const arr = useState(0)
    const stat = arr[0]
    const set = arr[1]
  return (
    <div>
       <p>{stat}</p>
       <button onClick={() => set(stat+1)}>Hook+1</button>
    </div>
  )
}
