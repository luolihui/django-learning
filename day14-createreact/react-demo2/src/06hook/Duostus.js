import React,{useState} from 'react'

export default function Duostus() {
    const [age, setage] = useState(18)
    const [money, setmoney] = useState(1000)
    const [star, setsatr] = useState(['刘亦菲','古力娜扎','迪丽热巴'])
    const [movies, setmovie] = useState([
        { id: 1, name: '《内积》', price: 45 },
        { id: 2, name: '《神探狄仁杰》', price: 40 },
        { id: 3, name: '《通天狄仁杰》', price: 65 },
        { id: 4, name: '《大宋提刑官》', price: 42 },
    ])

    function changePrice(index){
        const movielist = [...movies]
        movielist[index].price +=1
        setmovie(movielist)
    }

    return (
        <div>
            <h3>王石</h3>
            <p>年龄——{age}岁</p>
            <p>存款——{money}元</p>
            <ul>
                {star.map(item => {
                    return <li key={item}>{item}</li>
                })}
            </ul>

            <ul>
                {movies.map((item,index) => {
                    return (
                        <li key={item.id}>
                            <span>电影名：{item.name}</span>
                            <span>票价：{item.price}元</span>
                            <button onClick={() => changePrice(index)}>涨价</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
