import React, { useEffect, useState } from 'react';
import { getGradeAverage } from './utils';
import './studentCards.css';
import Search from './Search';
import StudentInfo from './StudentInfo';

export default function StudentCards() {
    const [students, setStudents] = useState([]);
    const [displayStudents, setDisplayStudents] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('https://api.hatchways.io/assessment/students');
            const data = await res.json();
            setStudents(data.students);
            setDisplayStudents(data.students);
        })();
    }, [])


    return (
        <div id='main-wrapper'>
            <Search students={students} setDisplayStudents={setDisplayStudents}/>
            <ul id='cards-wrapper'>
                {displayStudents.map(student => <StudentInfo student={student}/>)}
            </ul>
        </div>
    )
};
