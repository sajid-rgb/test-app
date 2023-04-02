import React from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import useUser from '../../customHooks/useUser';
import Post from './Post';

const Posts = () => {
    const { id } = useParams();
    const {posts,error} = useUser(id);

    if(posts?.length){
        return (
            <div className='posts'>
                {
                    posts.length ? posts.map(post =><Post post={post} key = {post?.id} />):''
                }
            </div>
        );
    } else if(error){
       return <h3>Something went wrong</h3>
    } else {
        return <Loader />
    }
};

export default Posts;