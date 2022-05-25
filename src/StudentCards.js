import React, { useEffect, useState } from 'react';
import { formatData } from './utils';
import './studentCards.css';
import StudentInfo from './StudentInfo';
import Search from './Search';

export default function StudentCards() {
    const [students, setStudents] = useState([]);
    const [displayStudents, setDisplayStudents] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.hatchways.io/assessment/students');
            const data = await res.json();
            const formatted = formatData(data.students);
            setStudents(formatted);
            setDisplayStudents(formatted);
        })();
    }, [])


    return (
        <div id='main-wrapper'>
            <Search students={students} setDisplayStudents={setDisplayStudents}/>
            <ul id='cards-wrapper'>
                {displayStudents.map(student => <StudentInfo student={student} setStudents={setStudents}/>)}
            </ul>
        </div>
    )
};
