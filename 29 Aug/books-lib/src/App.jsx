import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'
import BooksList from './components/BooksList/BooksList';

function App() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:3004/books";

  // console.log(books)

  async function fetchData() {
    const response = await fetch(url)
    // console.log(response)
    const data = await response.json()
    setBooks(data)
  }
  useEffect(() => {
    fetchData()

  }, [])

  // console.log('App rendered')

  return (
    <div className='app'>
      <Navbar />
      <div className='app_body'>
        {/* List of data */}
        <BooksList books={books} fetchData={fetchData} />
      </div>

    </div>
  )
}

export default App





