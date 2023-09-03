import React from 'react';
import './App.css';


function Card({ children }) {
    console.log(children)
    return (
        <div className='card'>
            {children}
            <CommonComponent />

        </div>
    )
}

function CommonComponent() {
    return <h3>Common Data</h3>
}

function App() {
    return (
        <div>
            <Card>
                <h2>hello world</h2>
                <p>This is a simple card component</p>

            </Card>
            <Card>
                <a>link to the app</a>
                <span>This is a simple description</span>

            </Card>
        </div>
    )
}

App.user = { name: 'john' }

// console.log('user', App.user)

export default App