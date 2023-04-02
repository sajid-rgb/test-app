import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
            <div>
                <nav className='nav'>
                <ul>
                    <li><Link to="/" style={{ textDecoration: 'none', color: 'black' }}>Home</Link></li>
                    <li>Profile</li>
                </ul>
            </nav>
            </div>
    );
};

export default Navbar;