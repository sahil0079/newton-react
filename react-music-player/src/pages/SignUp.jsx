import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Provider/UserProvider';


function SignUp() {

    const { setUserContext: signUpContext } = useUser()
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: ''
    });



    function handleChange(event) {
        const { name, value } = event.target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        signUp(userInfo)
    }

    async function signUp() {
        try {
            //post request for signup

            const response = await fetch(
                "https://academics.newtonschool.co/api/v1/user/signup", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    projectID: '8nbih316dv01',
                },
                body: JSON.stringify({
                    ...userInfo,
                    appType: 'music'
                })
            }
            );

            if (response.ok) {
                const data = await response.json();
                // console.log({ response, data });

                const { token, data: { name } } = data;

                console.log({ name });

                sessionStorage.setItem('authToken', token);
                sessionStorage.setItem('userInfo', JSON.stringify(name));
                //pass the user data to the context
                signUpContext(token);
                //navigate the user to home page
                navigate('/');


            } else {
                console.error("SignUp Failed")
            }

        } catch (err) {
            if (err) {
                console.error(err.response.data.message);
            }
        }
    }
    console.log(userInfo)
    return (
        <section style={{ marginTop: '100px' }}>
            <form onSubmit={handleSubmit} >
                <label htmlFor='name'>Name: </label>
                <input
                    type='text'
                    name='name'
                    id='name'
                    value={userInfo.name}
                    onChange={handleChange}
                />
                <label htmlFor='email'>Email: </label>
                <input
                    type='text'
                    name='email'
                    id='email'
                    value={userInfo.email}
                    onChange={handleChange}
                />
                <label htmlFor='password'>Password: </label>
                <input
                    type='password'
                    name='password'
                    id='password'
                    value={userInfo.password}
                    onChange={handleChange}
                />
                <input type='submit' value='Sign Up' />
                <p>Already have an account?</p>
                <button onClick={() => navigate('/signin')} >SignIn here!</button>
                {/* navigate user to the signin page */}
            </form>
        </section>
    )
}

export default SignUp