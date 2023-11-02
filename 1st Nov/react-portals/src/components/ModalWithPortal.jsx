import React, { useState } from 'react'
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

function ModalWithPortal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} >show modal using a portal</button>

            {showModal && (
                createPortal(
                    <ModalContent title='Title' onClose={() => setShowModal(false)} />,
                    document.body
                )
            )}
        </>
    )
}

export default ModalWithPortal