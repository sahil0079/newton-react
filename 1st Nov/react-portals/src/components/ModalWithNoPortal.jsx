import React, { useState } from 'react'
import ModalContent from './ModalContent';

function ModalWithNoPortal() {
    const [showModal, setShowModal] = useState(false);
    return (
        <>
            <button onClick={() => setShowModal(true)} >Show modal without portal</button>
            {showModal && (
                <ModalContent onClose={() => setShowModal(false)} />
            )}
        </>
    )
}

export default ModalWithNoPortal