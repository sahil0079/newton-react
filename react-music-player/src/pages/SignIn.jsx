import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Provider/UserProvider';


function SignIn() {

    const { setUserContext: signInContext } = useUser();
    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
    });



    function handleChange(event) {
        const { name, value } = event.target;

        setUserInfo({ ...userInfo, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        signIn(userInfo);
    }

    async function signIn() {
        try {
            //post request for signup

            const response = await fetch(
                "https://academics.newtonschool.co/api/v1/user/login", {
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
                signInContext(token);
                //navigate the user to home page
                navigate('/');


            } else {
                console.error("SignIn Failed")
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
                <input type='submit' value='Sign In' />
                <p>Don't have an account?</p>
                <button onClick={() => navigate('/signup')} >SignUp here!</button>
                {/* navigate user to the signin page */}
            </form>
        </section>
    )
}

export default SignIn