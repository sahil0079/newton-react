import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({ id, title, answer }) {
    // console.log(props)
    const [showAnswer, setShowAnswer] = useState(false);

    const handleClick = () => {
        setShowAnswer(!showAnswer)
    }
    return (
        <article className='question'>
            <header>
                <h4>{title}</h4>
                <button onClick={handleClick} className='btn'>
                    {
                        showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>

            </header>
            {showAnswer && <p>{answer}</p>}
        </article>
    )
}

export default Question;