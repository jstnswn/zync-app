import React from 'react';
import './search.css';

export default function TagSearch({ query, setQuery }) {

    return (
        <div className='search' id='tag-search'>
            <input
                className='search-input'
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setQuery('')}
                placeholder='Search by tag'
            />
        </div>
    )
}
