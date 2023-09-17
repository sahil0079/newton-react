import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import StateProvider from './context/StateProvider.jsx'
import './index.css'
import reducer, { initialState } from './reducer/reducer.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //connected react context api with react app
  <StateProvider reducer={reducer} initialState={initialState} >
    <App />
  </StateProvider>
  // </React.StrictMode>,
)
