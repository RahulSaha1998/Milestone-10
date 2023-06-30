import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <div className='text-center mt-2'>
            <Link className='text-decoration-none' to='/'> Home</Link>
            <Link className='text-decoration-none px-2' to='/login'> Login</Link>
            <Link className='text-decoration-none' to='/register'> Register</Link>
        </div>
    );
};

export default Header;