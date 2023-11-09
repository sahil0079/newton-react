import React from 'react'
import { NavLink } from 'react-router-dom'
import { useUser } from '../../Provider/UserProvider'
import Logo from './Logo'
import Profile from './Profile'
import SearchBar from './SearchBar'

function Navbar() {

    return (
        <nav className='navbar'>
            <NavLink to='/'>
                <Logo />
            </NavLink>

            <ul className='nav-links'>
                <li className='link-item'>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </li>
                <li className='link-item'>
                    <NavLink to='/social'>
                        Social
                    </NavLink>
                </li>
                <li className='link-item'>
                    <NavLink to='/library'>
                        Library
                    </NavLink>
                </li>
            </ul>
            <SearchBar />
            <Profile />
        </nav>
    )
}

export default Navbar