import React from 'react'

function Alert(props) {

    function capitalize(type) {
        return type
    }

    return (
        <div style={{ height: '45px' }}>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
                </div>
            )}
        </div>
    )
}

export default Alert