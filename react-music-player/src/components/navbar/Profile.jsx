import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Provider/UserProvider';



function Profile() {

    const { setUserContext: signOutContext,
        isUserLoggedIn } = useUser();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);



    let loginUsername = sessionStorage.getItem('userInfo');


    function handleSignOut() {
        signOutContext();
        navigate('/signin')
    }

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