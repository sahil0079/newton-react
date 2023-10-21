import { sub } from 'date-fns';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AddPostForm from './features/posts/AddPostForm';
import PostsList from './features/posts/PostsList';

function App() {

    const date = sub(new Date(), { minutes: 10 }).toISOString()

    console.log('date', date)
    return (
        <>
            <Header />
            <Routes>
                {/* <Route path = '/' element = {<Layout/>}/> */}
                <Route index element={<PostsList />} />
                <Route path='post'>
                    <Route index element={<AddPostForm />} />
                    {/* <Route path = ':postId' element = {<SinglePostPage/>}/> */}

                </Route>

            </Routes>
        </>


    )
}

export default App