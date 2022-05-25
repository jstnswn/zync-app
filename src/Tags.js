import React, { useState } from 'react'

export default function Tags() {
    const [tagInput, setTagInput] = useState('');
    const [tags, setTags] = useState([]);

    const submitTag = (e) => {
        e.preventDefault();
        setTags(prev => [...prev, tagInput]);
        console.log(tags);
        setTagInput('');
    }


    return (
        <div className='tags-wrapper'>
            {tags.length > 0 && (
                <ul className='tag-collection'>
                    {tags.map((tag, idx) => <li className='tag' key={idx}>{tag}</li>)}
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
