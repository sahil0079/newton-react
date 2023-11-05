import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Form from './Components/Form'
import Home from './Components/Home';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase-config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        let authToken = sessionStorage.getItem('Auth Token');

        if (authToken) {
            navigate('/home')
        }
        if (!authToken) {
            navigate('/login')
        }
    }, [])

    function handleAction(id) {

        const authentication = getAuth();
        // console.log(authentication)

        if (id == 1) {
            //sign in
            signInWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    navigate('/home')
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
                })
                .catch((error) => {
                    console.log('error', error.code)
                    if (error.code == 'auth/invalid-login-credentials') {
                        toast.error('Check email and password')
                    }
                    console.error(error)
                })
        }
        if (id == 2) {
            //register
            createUserWithEmailAndPassword(authentication, email, password)
                .then((response) => {
                    //navigate the user to home page
                    console.log('register', response)
                    navigate('/home');
                    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);

                })
                .catch((error) => {
                    // console.log('error', error.code)
                    if (error.code == 'auth/email-already-in-use') {
                        toast.error('Email already in use')
                    }
                    console.error(error)
                })
        }
    }

    return (
        <div className='app'>
            <>
                <ToastContainer />
                <Routes>
                    <Route path='/login' element={
                        <Form
                            title='Login'
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleAction={() => handleAction(1)}

                        />} />
                    <Route path='/register' element={
                        <Form
                            title='Register'
                            setEmail={setEmail}
                            setPassword={setPassword}
                            handleAction={() => handleAction(2)}

                        />} />
                    <Route path='/home' element={<Home />} />
                </Routes>
            </>
        </div>
    )
}

export default App