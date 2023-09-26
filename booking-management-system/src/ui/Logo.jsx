import React from 'react'

import styled from 'styled-components';


const StyledLogo = styled.div`
    text-align: center;
`;

const Img = styled.img`
    height: 9.6rem;
    width:auto;
`;

function Logo() {
    return (
        <div>
            <Img src='https://cdn.worldvectorlogo.com/logos/bookingcom-1.svg' alt='logo' />
        </div>
    )
}

export default Logo