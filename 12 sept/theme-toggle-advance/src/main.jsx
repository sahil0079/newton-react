import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './contexts/theme-context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //connected react context api with react app
  <ThemeProvider>
    <App />
  </ThemeProvider>
  // </React.StrictMode>,
)
