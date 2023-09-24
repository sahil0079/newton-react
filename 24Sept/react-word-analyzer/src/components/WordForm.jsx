import React, { useState } from 'react';
import Button from './Button';

function WordForm(props) {
    const [text, setText] = useState('');

    function calculateReadTime(text) {
        const wpm = 225;
        const words = text.split(/\s+/)?.length;

        const time = Math.ceil(words / wpm);
        console.log('calculateReadTime', { words, wpm, time, text })

        return time
    }
    function handleButtonClick(type) {

        switch (type) {

            case 'uppercase':
                setText(text.toUpperCase())
                return;
            case 'lowercase':
                setText(text.toLowerCase())
                return;
            case 'extra-space':
                let newText = text;
                newText = newText.replace(/\s+/g, ' ').trim();

                // newText = newText.split(/[]+/);
                setText(newText);
                props.showAlert('Extra spacing is removed', 'success')
                return;
            case 'copy':
                navigator.clipboard.writeText(text);
                props.showAlert('Copied to clipboard', 'success')
                return;
            case 'clear':
                setText("")
                props.showAlert('Cleared', 'success')

                return;
            default:
                return;
        }
    }



    return (
        <>
            <div className='container my-3'>
                <h1> {props.title} </h1>
                <div className='mb-3'>
                    <textarea
                        className='form-control'
                        id='myBox'
                        rows='8'
                        placeholder='Enter the Text here...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <Button variant='primary' text='Make Uppercase' disabled={text.length === 0} onClick={() => handleButtonClick('uppercase')} />
                <Button variant='primary' text=' Make Lowercase' disabled={text.length === 0} onClick={() => handleButtonClick('lowercase')} />
                <Button variant='primary' text='Remove Extra Spacing' disabled={text.length === 0} onClick={() => handleButtonClick('extra-space')} />
                <Button variant='primary' text='Copy' disabled={text.length === 0} onClick={() => handleButtonClick('copy')} />
                <Button variant='primary' text='Clear' disabled={text.length === 0} onClick={() => handleButtonClick('clear')} />
            </div>
            <div className='container my-3'>
                <h2>Summary</h2>
                <p>{text.split(/\s+/)?.length} words and {text?.length} characters </p>
                <p>{text?.length === 0 ? 0 : calculateReadTime(text)} Mins read</p>
                <br />
                <h2>Preview</h2>
                <p>{text?.length === 0 ? 'Nothing to preview' : text}</p>
            </div>
        </>
    )
}

export default WordForm