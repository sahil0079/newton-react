import React from 'react';
import './BookCard.css';

const url = "http://localhost:3004/books";

function BookCard({ id, title, author, genre, summary, fetchData }) {

    const deleteBook = () => {

        fetch(`${url}/${id}`, {
            method: "DELETE"
        })
            .then(response => {
                console.log('Book deleted successfully');
                fetchData()
            }).catch(error => {
                console.log('error deleting book:', error)
            })
    }
    return (
        <div className='card'>
            <h4 className='card_title'>{title}</h4>
            <div className='card_description'>
                <p>Author: {author}</p>
                <p>Genre: {genre}</p>
            </div>
            <div className='card_summary'>{summary}</div>
            <div className='card_buttons'>
                <button className='button'>Edit</button>
                <button onClick={deleteBook} className='button'>Delete</button>

            </div>
        </div>
    )
}

export default BookCard