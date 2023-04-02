import React from 'react';

const Post = ({post}) => {
    return (
        <div className="list-column">
            <div className='card-for-post'>
            <h5>{post?.title}</h5>
            <p>{post?.body}</p>
        </div>
        </div>
    );
};

export default Post;