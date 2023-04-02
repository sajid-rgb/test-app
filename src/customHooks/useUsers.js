import { useEffect, useState } from "react";
import axios from "../utils/axios";

const useUsers = () => {
    const [usersData, setUsersData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const getUsersData = async () => {
      try {
        const users =  await axios.get('/users?limit=100');
        setUsersData(users?.data?.users);
        setError(false);
      } catch (err) {
        setError(true);
      }
      setLoading(false);
    }

    useEffect(() => {
      setLoading(true);
       getUsersData();
    }, [])
    
    return {usersData,error,loading}; 
};

export default useUsers;