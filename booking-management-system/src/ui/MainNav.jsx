import React from 'react'
import styled from 'styled-components';
import { HiOutlineHome, HiOutlineCalendarDays, HiOutlineHomeModern, HiOutlineUsers, HiOutlineCog6Tooth } from 'react-icons/hi2'

const NavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

function MainNav() {
    return (
        <nav>
            <NavList>
                <li>
                    <HiOutlineHome />
                    <span>Home</span>
                </li>
                <li>
                    <HiOutlineCalendarDays />
                    <span>Bookings</span>
                </li>
                <li>
                    <HiOutlineHomeModern />
                    <span>Cabins</span>
                </li>

                <li>
                    <HiOutlineUsers />
                    <span>Users</span>
                </li>

                <li>
                    <HiOutlineCog6Tooth />
                    <span>Settings</span>
                </li>
            </NavList>
        </nav>
    )
}

export default MainNav