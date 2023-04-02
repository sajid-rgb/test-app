import React from 'react';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const getUserName = () => `${user?.firstName} ${user?.maidenName} ${user.lastName}`;

    return (
        <Link to={`/user/${user?.id}`} style={{ textDecoration: 'none' }} className="list-column">
            <div className="card">
                <h4>{getUserName()}</h4>
                <h5>Email: {user?.email}</h5>
                <h5>current company: {user?.company?.address?.address}</h5>
            </div>
        </Link>
    );
};

export default User;