import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { BooleanParam, StringParam, useQueryParams, withDefault } from 'use-query-params';
import './App.css';

const App = () => {
    return (
        <>
            <h1>React Router Query Parameters</h1>
            <nav>
                &nbsp;  &nbsp;                &nbsp;  &nbsp;


                <Link to='/home'>Home</Link>                &nbsp;  &nbsp;                &nbsp;  &nbsp;

                <Link to='/bookshelf'>Bookshelf</Link>

            </nav>

            <Routes>
                <Route index element={<Home />} />
                <Route path='home' element={<Home />} />
                <Route path='bookshelf' element={<Bookshelf />} />
                <Route path='*' element={<NoMatch />} />

            </Routes>
        </>
    )
}

// const bySearch = (search) => (book) =>
//     book.title
//         .toLowerCase()
//         .includes((search.title || '').toLowerCase()) &&
//     book.isCompleted === search.isCompleted;


function bySearch(search) {
    return function (book) {
        const searchTitle = (search.title || '').toLowerCase();
        const bookTitle = book.title.toLowerCase();

        return bookTitle.includes(searchTitle) && book.isCompleted === search.isCompleted;
    }
}

const Bookshelf = () => {

    const [search, setSearch] = useQueryParams({
        title: withDefault(StringParam, ''),
        isCompleted: withDefault(BooleanParam, false)
    });

    const books = [
        {
            title: 'The Road to Rust',
            type: 'BOOK',
            isCompleted: true,
            rate: 5,
            stars: 2,
            edition: '3',
        },
        {
            title: 'Javascript Basics',
            type: 'BOOK',
            isCompleted: true,
            rate: 4.5,
            stars: 4,
            edition: '2',
        },
        {
            title: 'React Cookbook',
            type: 'BOOK',
            isCompleted: false,
            rate: 5,
            stars: 5,
            edition: '4',
        },
        {
            title: 'Node.js Mastery',
            type: 'BOOK',
            isCompleted: true,
            rate: 5,
            stars: 5,
            edition: '4',
        },
        {
            title: 'Python for Beginners ',
            type: 'BOOK',
            isCompleted: false,
            rate: 5,
            stars: 5,
            edition: '4',
        },
        {
            title: 'The Art of Data Science',
            type: 'DRAFT',
            isCompleted: false,
            rate: 3.5,
            stars: 4,
            edition: '6',
        },
    ]
    console.log('search', search)

    const handleTitle = (event) => {
        setSearch({ title: event.target.value });
    }

    const handleIsCompleted = (event) => {
        // console.log('event',)
        setSearch({ isCompleted: event.target.checked });
    }
    return (
        <>
            <h2>Bookshelf</h2>

            <input type='text' value={search.title} onChange={handleTitle} />

            <Checkbox
                label="Is Completed?"
                value={search.isCompleted}
                onChange={handleIsCompleted}
            />

            <ul>
                {books.filter(bySearch(search)).map((book) => (
                    <li key={book.title}>{book.title}</li>
                ))}
            </ul>
        </>
    )
}

const Home = () => {
    return (
        <>
            <h2>Home</h2>
        </>
    )
}

const NoMatch = () => {
    return (
        <>
            <h2>NoMatch</h2>
        </>
    )
}

const Checkbox = ({ label, value, onChange }) => {

    return (
        <label>
            <input type='checkbox' checked={value} onChange={onChange} />
            {label}
        </label>
    )
}

export default App