import React, { useState } from 'react';
import './App.css';

function App() {
    const [submitting, setSubmitting] = useState(false)
    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')



    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
        // alert('You have submitted the form')

        setTimeout(() => {
            //request is successfull
            setSubmitting(false)
        }, 3000)


    }

    const handleNameInput = (e) => {
        setInputName(e.target.value)
    }


    const handleEmailInput = (e) => {
        setInputEmail(e.target.value)
    }


    console.log({ inputName, inputEmail })
    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && <div> Submitting Form ... </div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name' onChange={handleNameInput} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input name='email' onChange={handleEmailInput} />
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App