import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <h1>REDUX BLOG</h1>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link> </li>
                    <li><Link to='post'>Post</Link> </li>

                </ul>
            </nav>
        </header>
    )
}

export default Header