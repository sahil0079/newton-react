import React, { forwardRef, useRef } from 'react'
import Input from './Input'

const Form = forwardRef(function Form(props, ref) {


    return (
        <form>
            <Input label="Enter full name" ref={ref} />
            <button type='button' onClick={props.onClick} >Edit</button>

        </form>
    )
})

export default Form