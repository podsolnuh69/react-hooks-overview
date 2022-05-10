import { useState, useEffect, useRef } from "react";

const App = (props) => {
    // const [renderCount, setRenderCount] = useState(1)
    const [value, setValue] = useState('initial')
    const renderCount = useRef(1);
    const inputRef = useRef('')

    useEffect(() => {
        renderCount.current++
        console.log(inputRef)
    })

    return <>
        <h1>render count: {renderCount.current}</h1>
        <input ref={ inputRef } onChange={e => setValue(e.target.value)} value={value}/>
    </>
}

export default App;