import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { store } from './app/store.js';
import { fetchPosts } from './features/posts/postsSlice.js';
import './index.css';

store.dispatch(fetchPosts());

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </Provider>



  // </React.StrictMode>,
)
