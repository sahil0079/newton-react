import React, { useState } from 'react'
import './App.css'
import Counter from './components/Counter/Counter'


function App() {
  const [showCounter, setShowCounter] = useState(false);

  console.log('App component rendered')
  return (
    <div className='app'>
      <div>
        <button onClick={() => setShowCounter(true)}> Mount</button>
        <button onClick={() => setShowCounter(false)}> UnMount</button>
      </div>
      {
        showCounter && <Counter />

      }
    </div>
  )
}

export default App