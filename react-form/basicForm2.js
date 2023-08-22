import React, { useState } from 'react';
import './App.css';

function App() {
    const [submitting, setSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })



    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true)
        // alert('You have submitted the form')

        setTimeout(() => {
            //request is successfull
            setSubmitting(false)
        }, 3000)


    }
    // const handleFormChange = (event) => {
    //   // console.log(event.target.name)
    //   if (event.target.name === 'name') {
    //     setFormData({ ...formData, name: event.target.value })
    //   } else if (event.target.name === 'email') {
    //     setFormData({ ...formData, email: event.target.value })
    //   }
    // }

    const handleFormChange = (event) => {

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }

    console.log('formData', formData)

    return (
        <div className='wrapper'>
            <h1>Gift Items</h1>
            {submitting && <div> Submitting Form ... </div>}
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <label>
                        <p>Name</p>
                        <input name='name' onChange={handleFormChange} />
                    </label>
                    <label>
                        <p>Email</p>
                        <input name='email' onChange={handleFormChange} />
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default App