import React from 'react'
import NameSearch from './NameSearch'
import TagSearch from './TagSearch'

export default function Search({ students, setDisplayStudents }) {
    return (
        <>
            <NameSearch students={students} setDisplayStudents={setDisplayStudents} />
            <TagSearch students={students} setDisplayStudents={setDisplayStudents} />
        </>
    )
}
