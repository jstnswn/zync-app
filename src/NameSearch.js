import React, { useEffect, useState } from 'react';
import './search.css'

export default function NameSearch({ students, setDisplayStudents }) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (query === '') {
            setDisplayStudents(students);
            return;
        }

        setDisplayStudents(students.filter(({firstName, lastName}) => {
            return query.split(' ').filter(word => word !== '').every(word => {
                return (word && lastName.toLowerCase().includes(word.toLocaleLowerCase()))
                    || (word && firstName.toLowerCase().includes(word.toLocaleLowerCase()));
            })

        }))
    }, [query, students, setDisplayStudents])

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
