import React, { useState } from 'react';
import './App.css';



function App() {
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    // console.log(state)

    function handleSubmit(e) {
        e.preventDefault();
        console.log(state)
    }
    function handleInputChange(e) {

        const { name, value } = e.target;


        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))

    }

    return (
        <div className='app'>
            <form onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label>Email</label>
                    <input
                        type='text'
                        name='email'
                        value={state.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-control'>
                    <label>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={state.password}
                        onChange={handleInputChange}
                    />
                </div>
                <div className='form-control'>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export default App