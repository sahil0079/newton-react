import React from 'react'

import styled from 'styled-components';


const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 7.6rem;
    width: auto;
`;

function Logo() {
    return (
        <StyledLogo>
            <Img src='https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg' alt='logo' />
        </StyledLogo>
    )
}

export default Logo