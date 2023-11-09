import React from 'react'

function SearchBar() {
    return (
        <section className='searchbar-container'>
            <input
                type='text'
                name='search'
                id='search'
                placeholder='search here'
                autoComplete='off'
            />
        </section>
    )
}

export default SearchBar