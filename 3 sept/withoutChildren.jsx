import React from 'react';
import './App.css'

//children proip

function Card({ title, description, subtitle = '', heading, subject, subheading, comment }) {

    return (
        <div className='card'>
            <h2>{title}</h2>
            <h5>{subtitle}</h5>
            <p>{description}</p>
        </div>
    )
}

function App() {
    return (
        <div>
            <Card title='Hello World' description='This is a simple card component' />

            <Card title='Hello World' description='This is a simple card component' subtitle='this is a subtitle' />

            <Card heading='this is a ehading' subject='This is a simple subject' subheading='this is a subheading' comment='This is a comment' />
        </div>
    )
}

export default App