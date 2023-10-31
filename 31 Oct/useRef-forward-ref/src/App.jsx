import React, { useRef, useState } from 'react'


// function Toggle() {
//     const isOnRef = useRef(false);
//     console.log(isOnRef)
//     return (
//         <button onClick={() => isOnRef.current = !isOnRef.current} > {isOnRef.current ? 'On' : 'Off'} </button>
//     )
// }

function Toggle() {
    const [isOn, setIsOn] = useState(false);
    console.log(isOn)
    return (
        <button onClick={() => setIsOn(!isOn)} > {isOn ? 'On' : 'Off'} </button>
    )
}

function App() {
    return (
        <>
            <Toggle />
        </>
    )
}

export default App