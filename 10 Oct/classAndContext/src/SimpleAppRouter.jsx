import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        // basename='/app'
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<h1>HomePage</h1>} />
                <Route path='/categories' element={<h1>Categories</h1>} />
                <Route path='/products' element={<h1>Products</h1>} />
                <Route path='/cart' element={<h1>CartPage</h1>} />
                <Route path='/checkout' element={<h1>CheckoutPage</h1>} />
            </Routes>

        </BrowserRouter>

    )
}

export default App