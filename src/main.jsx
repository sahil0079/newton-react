import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //connected react context api with react app
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <App />
    </QueryParamProvider>

  </BrowserRouter>
  // </React.StrictMode>,
)
