import React from 'react'
import styled from 'styled-components';
import Logo from './Logo';
import MainNav from './MainNav';
const StyledSidebar = styled.aside`
    background-color: grey;
    padding: 3.2rem 2.4rem;
    border-right: 1px solid grey;
    grid-row: 1 / -1;
    display:flex;
    flex-direction:column;
    gap: 3.2rem;
`;


function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    )
}

export default Sidebar