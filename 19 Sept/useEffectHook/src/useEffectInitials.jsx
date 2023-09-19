import React, { useEffect } from 'react';
import './App.css';


//useEffect => React hook
//syntax useEffect(function, dependenct array)
//dependenct array is optional

//sideEffects => fetch requests, manipulating DOM directly, setTimeout and more

//component rendering => It is done by react u cannot stop it
//side effects => 
//have separate component rendering and side effects logic


// function Greet({ name }) {
//   const message = `Hello, ${name}`;  //calculating the output

//   document.title = `Greetings to ${name}`; //side - effect

//   return <div>{message}</div> //calculating the output

// }

function Greet({ name }) {
    const message = `Hello, ${name}`;  //calculating the output

    useEffect(function () {
        console.log('useEffect running')
        document.title = `Greetings to ${name}`;
    }, [name])

    console.log('Greet renders')
    return <div>{message}</div> //calculating the output
}

//useEffect() - the hook that runs side effects independently of rendering.

function App() {
    return (
        <div>
            <Greet name='John' />
        </div>
    )
}

export default App