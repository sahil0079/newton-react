import React, { useState } from 'react'

function App() {

    const [user, setUser] = useState({
        name: "John Doe",
        mobileNo: "9876543210",
        position: "Manager",
        age: 34
    });

    function handleClick() {
        setUser({
            ...user,
            age: user.age + 1
        })
    }

    return (
        <div>
            <h1>Hello, my name is {user.name} and my contact number is {user.mobileNo}</h1>
            <p>I am {user.age} years old and I am working here as {user.position}</p>
            <button onClick={handleClick} >Increase Age</button>
        </div>
    )
}

export default App