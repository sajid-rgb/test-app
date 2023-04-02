import React from 'react';
import Loader from '../Loader';
import useUsers from '../../customHooks/useUsers';
import User from './User';

const Users = () => {
    const {usersData,error} = useUsers();

    if(usersData?.length){
        return (
            <div className='lists'>
                {
                     usersData.map(user=><User user={user} key={user?.id} />)
                }
            </div>
        );
    } else if(error){
        <h1>Something Went Wrong!</h1>
    } else {
        return <Loader />
    }
};

export default Users;