import React from 'react'

function Button(props) {
    return (
        <>
            <button className={`btn btn-${props.variant} m-1`} disabled={props.disabled} onClick={props.onClick}>
                {props.text}
            </button>
        </>
    )
}

export default Button