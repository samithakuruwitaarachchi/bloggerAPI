import React, {useState} from 'react';
import axios from 'axios';


export default () => {
    const [title, setTitle] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();

        await axios.get('http://localhost:3210/posts',
        {
            title,
        });

        setTitle('');

    };

    return(
        <div>
            <form onSubmit={onSubmit} >
                <div className='form-group'>
                    <label>Title</label>
                    <input 
                        className='form-control' 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button className='btn btn-primary'>Create</button>
                
            </form>
        </div>
    );
}