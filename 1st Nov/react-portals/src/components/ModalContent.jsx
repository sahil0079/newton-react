import React from 'react'

function ModalContent({ onClose, title }) {
    return (
        <div className='modal'>
            <h1>{title}</h1>
            <div>I am a dialog box</div>

            <button onClick={onClose} >Close</button>
        </div>
    )
}

export default ModalContent