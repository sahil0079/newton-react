import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    // / - Home Page
    // /checkout - Checkout Page
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' element={<h1>Checkout Page</h1>} />
        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App