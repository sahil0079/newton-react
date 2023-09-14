import React from 'react';
import './App.css';
import { useThemeContextValue } from './contexts/theme-context';


function App() {


  const { theme, dark, toggle } = useThemeContextValue()

  return (
    <div className='app'>
      <h1>Theme Toggler</h1>
      <div className='app-header' onClick={toggle} style={{
        backgroundColor: theme.backgroundColor,
        color: theme.color
      }} >
        <h1>Context API Theme Toggler</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, eius minima? Sint voluptas quisquam perferendis nihil! Debitis sapiente, eveniet fugit commodi, voluptate consequatur aliquid quos, culpa assumenda quia optio architecto.</p>
        <div className='button-container'>
          {`Toggle to ${!dark ? 'Dark' : 'Light'} Theme`}
        </div>
      </div>

    </div>
  )
}

export default App