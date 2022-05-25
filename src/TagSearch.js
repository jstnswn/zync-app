import React, { useEffect, useState } from 'react';
import './search.css';

export default function TagSearch({ students, setDisplayStudents }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query === '') {
            setDisplayStudents(students);
            return;
        }

        setDisplayStudents(students.filter(({ tags }) => {
            return tags.includes(query);
        }))
    }, [query, students, setDisplayStudents])

    return (
        <div className='search' id='tag-search'>
            <input
                className='search-input'
                type='text'
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setQuery('')}
                placeholder='Search by tag'
            />
        </div>
    )
}
