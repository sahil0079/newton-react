import React, { forwardRef, useRef } from 'react'

const Input = forwardRef(function Input(props, ref) {

    const { label } = props


    // const buttonRef = useRef(null);

    console.log('inputRef', ref);
    // console.log('buttonRef', buttonRef);


    return (
        <label>
            {label}
            <input ref={ref} id='input' />

            {/* <button ref={buttonRef} >Increment</button> */}
        </label>
    )
})

export default Input