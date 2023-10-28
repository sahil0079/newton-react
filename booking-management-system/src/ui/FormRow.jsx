

import React from 'react'
import { styled } from 'styled-components';

const StyledFormRow = styled.div`
    display:grid;
    align-items:center;
    grid-template-columns: 24rem 1fr 1.2fr;
    gap: 2.4rem;
    padding: 1.2rem 0;
`;

const Label = styled.label`
    font-weight: 500;
`;

const Error = styled.span`
    font-size: 1.4rem;
    color: var(--color-red-700);
`;

function FormRow({ label, children, error }) {
    return (
        <div>
            <StyledFormRow>
                {label && <Label> {label} </Label>}
                {children}
                {error && <Error> error </Error>}
            </StyledFormRow>
        </div>
    )
}

export default FormRow