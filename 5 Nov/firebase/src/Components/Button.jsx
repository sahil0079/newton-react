import { Button } from '@mui/material'
import React from 'react'

function CustomButton({ title, handleAction }) {
    return (
        <Button variant='contained' onClick={handleAction} >{title}</Button>
    )
}

export default CustomButton