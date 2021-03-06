import React, { useEffect, useState } from 'react';
import NameSearch from './NameSearch';
import TagSearch from './TagSearch';

export default function Search({ students, setDisplayStudents }) {
    const [nameQuery, setNameQuery] = useState('');
    const [tagQuery, setTagQuery] = useState('');

    const checkTagQuery = (query, tags) => {
        return tags.some(tag => tag.includes(query));
    }
    const checkNameQuery = (query, firstName, lastName) => {
        return query.split(' ').filter(word => word !== '').every(word => {
            return (word && lastName.toLowerCase().includes(word.toLocaleLowerCase()))
                || (word && firstName.toLowerCase().includes(word.toLocaleLowerCase()));
        })
    };

    useEffect(() => {
        // Reset display
        if (tagQuery === '' && nameQuery === '') {
            setDisplayStudents(students);
            return;
        }
        // Name only search
        if (nameQuery && !tagQuery) {
            setDisplayStudents(students.filter(({ firstName, lastName }) => (
                checkNameQuery(nameQuery, firstName, lastName))));

        // Tag only search
        } else if (!nameQuery && tagQuery) {
            setDisplayStudents(students.filter(({ tags }) => (
                checkTagQuery(tagQuery, tags)
            )))

        // Combined search
        } else {
            setDisplayStudents(students.filter(({ firstName, lastName, tags}) => (
                checkNameQuery(nameQuery, firstName, lastName) && checkTagQuery(tagQuery, tags)
            )))
        }
    }, [nameQuery, students, setDisplayStudents, tagQuery])

    return (
        <div id='search-area'>
            <NameSearch query={nameQuery} setQuery={setNameQuery}/>
            <TagSearch query={tagQuery} setQuery={setTagQuery}/>
        </div>
    )
}
