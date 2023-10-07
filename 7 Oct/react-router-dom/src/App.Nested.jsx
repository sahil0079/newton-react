import React from 'react';
import { Routes, Route, Link, Outlet } from 'react-router-dom';


function App() {
    return (
        <>
            <h1>React Router Nested</h1>
            <nav>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/home'>Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/user'>User</Link>
            </nav>

            <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='user' element={<User />}>
                    <Route index element={<Profile />} />
                    <Route path='profile' element={<Profile />} />
                    <Route path='account' element={<Account />} />
                    <Route path='*' element={<NoMatch />} />
                </Route>
                <Route path='*' element={<NoMatch />} />
            </Routes>
        </>
    )
}

const Home = () => {
    return (
        <>
            <h2>Home Page</h2>
        </>
    )
}

const User = () => {
    return (
        <>
            <h1>User</h1>

            <nav>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='profile'>Profile</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='account'>Account</Link>
            </nav>

            <Outlet />
        </>
    )
}

const Profile = () => {

    return (
        <>
            <h3>Profile</h3>
        </>
    )
}

const Account = () => {

    return (
        <>
            <h3>Account</h3>
        </>
    )
}

const NoMatch = () => {
    return (
        <h1>
            NoMatch
        </h1>
    )
}
export default App

