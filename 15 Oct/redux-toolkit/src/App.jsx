import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import GetUserDetails from './components/GetUserDetails/GetUserDetails';
import { login } from './features/userSlice';


//setup

//store
//actions
//reducers
//react-redux

function App() {

    const nameRef = useRef(null);
    const emailRef = useRef(null);

    const dispatch = useDispatch()

    function loginUser(e) {
        e.preventDefault();

        //user is logged in or not

        console.log('name', nameRef.current.value)
        console.log('email', emailRef.current.value)

        let name = nameRef.current.value;
        let email = emailRef.current.value;


        //dispatch login action and send login details to the store

        dispatch(login({
            user_name: name,
            user_email: email
        }))

        nameRef.current.value = null;
        emailRef.current.value = null;
    }

    return (
        <div className='app'>
            <form>
                <label>Name: </label>
                <input ref={nameRef} type='text' />

                <label>Email: </label>
                <input ref={emailRef} type='email' />

                <button type='submit' onClick={loginUser} >Submit</button>
            </form>
            <GetUserDetails />
        </div>
    )
}

export default App