import React from 'react';
import './App.css';
import { useThemeContextValue } from './contexts/ThemeProvider';

function App() {

  const { toggle, toggleFunction } = useThemeContextValue()

  return (
    <div className='app' style={{ backgroundColor: toggle ? 'tomato' : 'blue' }}  >
      <div className='section'>
        <h1>Context API Example</h1>
        <button onClick={toggleFunction} >Change the theme</button>
      </div>
    </div>
  )
}

export default App