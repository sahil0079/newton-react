import React from 'react'
import { createPortal } from 'react-dom'


//rendering to a different part of the DOM
function App() {
    return (
        <div>
            <h1>This is App component</h1>

            {createPortal(
                <p>This is the child element created using portal</p>,
                document.body
            )}
        </div>
    )
}

export default App