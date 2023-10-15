import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { logout } from '../../features/userSlice';

function GetUserDetails() {

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    console.log(user)

    function logOut() {
        dispatch(logout());
    }

    return (
        <div>
            <>
                <h1>User: {user?.user_name} </h1>
                <h2>Email:{user?.user_email} </h2>
                <button onClick={logOut} >Logout</button>
            </>
        </div>
    )
}

export default GetUserDetails