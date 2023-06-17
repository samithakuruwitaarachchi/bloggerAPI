import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CreateComments from './CreateComments';
import CommentList from './CommentList';


export default () => {

    const [wallPosts, setWallPosts] = useState({});
    const fetchWallPosts = async() => {
        const res = await axios.get('http://localhost:3210/posts');
        setWallPosts(res.data);
    }

    useEffect(() => {
        fetchWallPosts();
    },[]);

    console.log(wallPosts);

    const renderWallPosts = Object.values(wallPosts).map((wallPost) => {
        return ( 
        <div className='card' style={{width: '30%', marginBottom: '20%'}} key={wallPost.id} >
            <div className='card-body'>
                <h3>{wallPost.title}</h3>
                <hr/>
                <CommentList wallPostId={wallPost.id} />
                <CreateComments wallPostId={wallPost.id} />
            </div> 
        </div>
        );
    });

    return (
        <div className="d-flex flex-row flex-wrap justify-content-between"> 
            {renderWallPosts}
        </div>
        );
}