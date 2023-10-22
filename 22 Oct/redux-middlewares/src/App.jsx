import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './actions';


// npm i redux react-redux



function App() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    function incrementCounter() {
        dispatch(increment());
    }
    function decrementCounter() {
        dispatch(decrement());
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={incrementCounter} >Increment</button>
            <button onClick={decrementCounter} >Decrement</button>
        </div>
    )
}

export default App