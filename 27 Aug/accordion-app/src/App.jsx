import React, { useState } from 'react';
import './App.css';
import data from './data';
import Question from './components/Question';


console.log(data)
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h1>Frequently Asked Questions</h1>
        <p>Below are some common questions from our customers that may very well give you the answer you are looking for.</p>

        <section className='answer'>
          {/* list of all accordion components */}
          {
            questions.map(function (question) {
              // console.log(question)
              return (
                <Question key={question.id} {...question} />
              )
            })
          }
        </section>
      </div>
    </main>
  )
}

export default App