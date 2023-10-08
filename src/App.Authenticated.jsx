import React, { createContext, useState } from 'react'
import { useContext } from 'react';
import { Routes, Route, NavLink, useLocation, useNavigate, Navigate } from 'react-router-dom'

const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve('2442f2f1d174fh12'), 300)
    })

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const location = useLocation();
    const navigate = useNavigate()
    const [token, setToken] = useState(null);
    console.log('token', token)

    const handleLogin = async () => {
        const token = await fakeAuth();
        setToken(token);

        console.log('location', location)

        const origin = location.state?.from?.pathname || '/dashboard';
        navigate(origin);

    }
    const handleLogout = () => {
        setToken(null);
    }

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout
    };
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

const ProtectedRoute = ({ children }) => {

    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        //navigate the user to the public route or home page
        return <Navigate to='/home' replace state={{ from: location }} />
    }

    return children

}

function App() {
    return (
        <AuthProvider>
            <h1>React Router Authentication</h1>
            <Navigation />
            <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='dashboard' element={
                    <ProtectedRoute>
                        <Dashboard />
                    </ProtectedRoute>

                } />
                <Route path='admin' element={
                    <ProtectedRoute>
                        <Admin />
                    </ProtectedRoute>} />
                <Route path='*' element={<NoMatch />} />

            </Routes>
        </AuthProvider>
    )
}

const Navigation = () => {

    const { token, onLogout } = useAuth();

    return (
        <nav>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavLink to='/home'>Home</NavLink>                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavLink to='/dashboard'>Dashboard</NavLink>                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

            <NavLink to='/admin'>Admin</NavLink>

            {token && (
                <button type='button' onClick={onLogout} >Sign Out</button>
            )}
        </nav>
    )
}

const Home = () => {

    const { token, onLogin } = useAuth();
    return (
        <>
            <h2>Home (Public)</h2>
            {!token && (
                <button type='button' onClick={onLogin} >Sign In</button>

            )}
        </>
    )
}

const Dashboard = () => {

    return (
        <>
            <h2>Dashboard (Protected) </h2>
            <div>Authenticated as user</div>
        </>
    )
}

const Admin = () => {

    return (
        <>
            <h2>Admin (Protected) </h2>
        </>
    )
}
const NoMatch = () => {

    return (
        <>
            <h1>NoMatch </h1>
        </>
    )
}
export default App