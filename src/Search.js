import React, { useEffect, useState } from 'react';
import './search.css'

export default function Search({ students, setDisplayStudents }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query === '') {
            setDisplayStudents(students);
            return;
        }

        setDisplayStudents(students.filter(({firstName, lastName}) => {
            return query.split(' ').some(word => {
                return lastName.toLowerCase().includes(word.toLocaleLowerCase())
                    || firstName.toLowerCase().includes(word.toLocaleLowerCase());
            })

        }))
    }, [query, students, setDisplayStudents])

    return (
        <div id='search'>
            <input
                id='search-input'
                type='text'
                value={query}
                onChange={e => setQuery(e.target.value)}
                onFocus={() => setQuery('')}
                placeholder='Search by name'
            />
        </div>
    )
}
