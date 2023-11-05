import { Box, TextField } from '@mui/material'
import React from 'react'
import Button from './Button'

function Form({ title, setPassword, setEmail, handleAction }) {
    return (
        <div>
            <div className='heading-container'>
                <h3>{title} </h3>
            </div>

            <Box>
                <TextField id='email' label='Enter email' variant='outlined' onChange={(e) => setEmail(e.target.value)} />
                <TextField id='password' label='Enter the password' variant='outlined' onChange={(e) => setPassword(e.target.value)} />
            </Box>

            <Button title={title} handleAction={handleAction} />
        </div>
    )
}

export default Form