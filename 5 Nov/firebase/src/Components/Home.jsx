import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';



function Home() {
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
    return (
        <h1>Home</h1>
    )
}

export default Home