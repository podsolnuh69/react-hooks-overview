import React, { useState, useEffect } from 'react';

const App = (props) => {
    const [type, setType] = useState('users')
    const [pos, setPos] = useState({x: 0, y: 0})
    
    const mousemoveHandler = (e) => {
        setPos({
            x: e.clientX,
            y: e.clientY,
        })
    }

    useEffect(() => {
        window.addEventListener("mousemove", mousemoveHandler)
    }, [])

    return <div>
        <h1>Ресурс: {type}</h1>

        <button onClick={() => {setType('users')}}>Пользователи</button>
        <button onClick={() => {setType('todo')}}>Todo</button>
        <button onClick={() => {setType('posts')}}>Посты</button>

        <p>{JSON.stringify(pos)}</p>
    </div>
}

export default App;