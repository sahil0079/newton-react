import React, { useState } from 'react'

function App() {
    const [count, setCount] = useState(0);

    function handleSetCounter(value) {

        setCount(value)
    }
    console.log('App component rendered')
    return (
        <div>
            <Counter count={count} onSetCount={handleSetCounter} />
        </div>
    )
}


function Counter({ count, onSetCount }) {
    console.log('Counter component rendered')

    return (
        <div>
            <h1>Counter: {count} </h1>
            <button onClick={() => onSetCount(count + 1)}> increment</button>

        </div>
    )
}

export default App