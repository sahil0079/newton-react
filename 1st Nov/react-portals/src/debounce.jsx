import React, { useRef } from 'react'


function DebouncedButton({ onClick, children }) {

    const timeoutRef = useRef(null);

    function debouncedFunction() {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            onClick();
            console.log('timeoutRef', timeoutRef.current)

        }, 1000)
    }

    return (
        <button onClick={debouncedFunction} >
            {children}
        </button>
    )
}

function Input() {

    const timeoutRef = useRef(null);

    function debouncedFunction(value) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            console.log(value);
            console.log('timeoutRef', timeoutRef.current)

        }, 1000)
    }

    return <input type='text' onKeyUp={(e) => debouncedFunction(e.target.value)} />
}

function App() {
    return (
        <>
            <Input />
            <DebouncedButton onClick={() => console.log('form submitted')} >
                submit a form
            </DebouncedButton>

            <DebouncedButton onClick={() => console.log('get products successfull')} >
                display products
            </DebouncedButton>

            <DebouncedButton onClick={() => console.log('get orders successfull')} >
                display orders
            </DebouncedButton>
        </>
    )
}

export default App