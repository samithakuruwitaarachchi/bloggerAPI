
import React, { useState } from 'react';
import axios from 'axios';

export default({wallPostId}) => {
    const [content, setComment] = useState('');

    const onSubmit = async(event) => {
        event.preventDefault();

        await axios.post(`http://localhost:3211/posts/${wallPostId}/comments`,{
            content,
        });

        setComment('');
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label> Add Comment</label>
                    <input className='form-control' value={content} onChange={(e) => setComment(e.target.value)}/>    
                </div>
                <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
};