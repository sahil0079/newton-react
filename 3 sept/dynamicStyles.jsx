import React from 'react';
import './App.css';
import styles from './App.module.css';

console.log(styles)
//dynamic styles
//inline styles

function Component(props) {

    const dynamicStyles = {
        color: props.isImportant ? 'red' : 'blue',
        fontSize: props.isLarge ? '24px' : '16px'
    }

    // const dynamicClassName = props.isImportant ? 'card' : 'normal';
    const dynamicClassName = props.isImportant ? styles.card : styles.normal;


    return (
        <div style={dynamicStyles}>
            This text has dynamic styles
            <div className={dynamicClassName}>
                This text has dynamic className
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Component isImportant={true} />
        </div>
    )
}

export default App