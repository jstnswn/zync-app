import React, { useEffect, useState } from 'react';
import './search.css'

export default function NameSearch({ query, setQuery }) {

    return (
        <div className='search' id='name-search'>
            <input
                className='search-input'
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setQuery('')}
                placeholder='Search by name'
            />
        </div>
    )
}
