import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //connected react context api with react app
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>,
)
