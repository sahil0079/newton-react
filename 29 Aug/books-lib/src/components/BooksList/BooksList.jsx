import React from 'react';
import './BooksList.css';
import BookCard from '../BookCard/BookCard';

function BooksList({ books, fetchData }) {
    return (
        <div className='booklist'>
            {
                books.map((book) => {
                    const { id, author, genre, summary, title } = book;
                    return (
                        <BookCard
                            key={id}
                            id={id}
                            title={title}
                            author={author}
                            genre={genre}
                            summary={summary}
                            fetchData={fetchData}
                        />
                    )
                })
            }
        </div>
    )
}

export default BooksList;