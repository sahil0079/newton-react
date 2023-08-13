// import { useState } from "react";
import React from "react";
import './Counter.css'


export default function Counter() {

    // useState()

    // const stateHook = React.useState(0)

    const [count, setCount] = React.useState(0)


    console.log('count', count)
    // console.log('stateHook', stateHook)
    let counter = 0;


    function increment() {

        setCount(count + 1)


        // setCount((prevCount) => prevCount + 1)
        // setCount((prevCount) => prevCount + 1)


        setCount((prevCount) => {

            console.log('prevCount', prevCount)
            return prevCount + 1
        })
        setCount((prevCount2) => {

            console.log('prevCount2', prevCount2)
            return prevCount2 + 1
        })



        // counter++;
        // console.log('counter', counter)
    }

    console.log('Counter component rendered')

    return (
        <div className="container">
            <h2>{name}</h2>
            <h1>Counter : {count} </h1>
            <button onClick={increment}>Increment</button>
            <button>Decrement</button>
        </div>
    )
}

