import React from 'react'
import ModalWithNoPortal from './components/ModalWithNoPortal'
import ModalWithPortal from './components/ModalWithPortal'

function App() {
    return (
        <>
            <div className='modal-container'>
                <ModalWithNoPortal />
            </div>

            <div className='modal-container'>
                <ModalWithPortal />
            </div>
        </>
    )
}

export default App