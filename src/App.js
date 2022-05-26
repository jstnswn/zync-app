import { useEffect, useState } from "react";
import Search from "./Search";
import StudentCard from "./Card";
import { formatData } from "./utils";


export default function App() {
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
            <Search students={students} setDisplayStudents={setDisplayStudents} />
            <ul id='cards-wrapper'>
                {displayStudents.map(student => <StudentCard student={student} setStudents={setStudents} />)}
            </ul>
        </div>
    )
}
