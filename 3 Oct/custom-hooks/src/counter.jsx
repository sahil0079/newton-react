import React, { useState } from 'react'
import './App.css'
import { useCounter } from './custom-hooks/useCounter'

function App() {

    const { count, increment, decrement, reset } = useCounter(0);

    return (
        <div className='app'>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={increment} >Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>


        </div>
    )
}

export default App