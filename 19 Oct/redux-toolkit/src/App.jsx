import { sub } from 'date-fns';
import React from 'react';
import './App.css';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {

    const date = sub(new Date(), { minutes: 10 }).toISOString()

    console.log('date', date)
    return (
        <main className='App'>
            <AddPostForm />
            <PostsList />
        </main>
    )
}

export default App