import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import WordForm from './components/WordForm';

function App() {
  const [alert, setAlert] = useState(null);

  function onAlert(message, type) {
    setAlert({
      message: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000)
  }

  return (
    <>
      <BrowserRouter>
        <Navbar title='Word Analyzer' about='About' />
        <Alert alert={alert} />
        <Routes>
          <Route path='/' element={<WordForm title='Enter Any Text To Analyze' showAlert={onAlert} />} />
          <Route path='/about' element={<h1>About</h1>} />
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App