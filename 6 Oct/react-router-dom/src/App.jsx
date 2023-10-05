import { useState } from 'react';
import './App.css';
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';

function App() {

  const [users, setUsers] = useState([
    { id: '1', fullName: 'John Cena' },
    { id: '2', fullName: 'Peter Pan' },

  ])

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='home' element={<Home />} />
        <Route path='users' element={<Users users={users} />}>
          <Route path=':userId' element={<User />} />
        </Route>



      </Route>
    </Routes>
  )
}

export default App

const Layout = () => {

  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal'
  })

  return (
    <>
      <h1>React Router Example</h1>

      <nav style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
        paddingLeft: '1rem'

      }}>
        <NavLink to='/home' style={style}>
          Home
        </NavLink>&nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink to='/users' style={style}>
          Users
        </NavLink>


      </nav>
      <main style={{ padding: '1rem' }} >
        <Outlet />
      </main>
    </>
  )
}

const Home = () => {
  return (
    <>
      <h2>Home</h2>
    </>
  )
}

const Users = ({ users }) => {
  return (
    <>
      <h2>Users</h2>
      <input type='text' />

      <ul>

        {users?.map((user) => (
          <li key={user.id}>
            <Link to={user.id}> {user.fullName} </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  )
}

const User = () => {

  return (
    <>
      <h2>User Component</h2>
    </>
  )
}