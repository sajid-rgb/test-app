import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useUser = (id) => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getPosts = async () => {
      try {
        const res =  await axios.get(`/users/${id}/posts`);
        setPosts(res?.data?.posts);
        setError(false);
      } catch (err) {
          setError(true);
        }
        setLoading(true);
    }

    useEffect(() => {
        setLoading(false);
       getPosts();
    }, [id])
    
    return {posts,loading,error}; 
};

export default useUser;