import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';



function Profile() {

    const { setUserContext: signOutContext,
        isUserLoggedIn } = useUser();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);


    console.log('isUserLoggedIn', isUserLoggedIn)
    let loginUsername = sessionStorage.getItem('userInfo');


    function handleSignOut() {
        sessionStorage.removeItem('userInfo');

        sessionStorage.removeItem('authToken');
        signOutContext();
        navigate('/signin')
    }

    useEffect(() => {
        signOutContext(loginUsername)
    }, [])

    return (
        <section className='profile'
            onClick={() => setShowModal(!showModal)}
        >
            <section className='profile-icon'>
                P
            </section>

            <p>{isUserLoggedIn ? loginUsername : ""} </p>

            {showModal && (
                <section className='auth-modal'>
                    {isUserLoggedIn ? (
                        <button className='signin-btn' onClick={handleSignOut} >Sign Out</button>
                    ) : (
                        <button className='signin-btn' onClick={() => navigate('/signin')} >Sign In</button>
                    )}

                </section>
            )}
        </section>
    )
}

export default Profile