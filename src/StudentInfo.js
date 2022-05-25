import React, { useEffect, useState } from 'react'
import { getGradeAverage } from './utils'

export default function StudentInfo({ student }) {
    const [showGrades, setShowGrades] = useState(false);

    const expandGrades = (e) => {
        e.preventDefault();
        setShowGrades(true);
    }

    const collapseGrades = (e) => {
        e.preventDefault();
        setShowGrades(false);
    }

    const button = showGrades === false
        ? <button className='fa-solid fa-plus' onClick={expandGrades}></button>
        : <button className='fa-solid fa-minus' onClick={collapseGrades}></button>



    return (
        <>
            <li className='student-card'>
                <div className='main-card-area'>
                    <div className='pic-container'>
                        <img src={student.pic} alt='student-pic'></img>

                    </div>
                    <div>
                        <p className='name'>{student.firstName} {student.lastName}</p>
                        <div className='info'>
                            <p className='email'>Email: {student.email}</p>
                            <p className='company'>Company: {student.company}</p>
                            <p className='skill'>Skill: {student.skill}</p>
                            <p className='grade-average'>Average: {getGradeAverage(student.grades)}%</p>
                        </div>

                    </div>

                    {button}

                </div>
                {showGrades && (
                    <div className='hidden-footer'>
                        <div className='empty-div'></div>
                        <ul className='all-grades'>
                            {student.grades.map((grade, idx) => (
                                <li key={idx}>
                                    <p>Text {idx + 1}</p>
                                    <p>{grade}%</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </li>
        </>
    )
}
