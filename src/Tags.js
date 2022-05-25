import React, { useState } from 'react'

export default function Tags({student, setStudents}) {
    const [tagInput, setTagInput] = useState('');

    const setTag = (tag) => {
        setStudents(prev => {
            prev[student.id - 1].tags.push(tag);
            return prev;
        })
    }

    const submitTag = (e) => {
        e.preventDefault();
        setTag(tagInput);
        setTagInput('');
    }




    return (
        <div className='tags-wrapper'>
            {student.tags.length > 0 && (
                <ul className='tag-collection'>
                    {student.tags.map((tag, idx) => <li className='tag' key={idx}>{tag}</li>)}
                </ul>
            )}

            <form onSubmit={submitTag}>
                <input
                    placeholder='Add a tag'
                    className='tag-input'
                    type='text'
                    value={tagInput}
                    onChange={e => setTagInput(e.target.value)}
                />
            </form>
        </div>
    )
}
