import React from 'react';
import './NavMenu.css';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';

function NavMenuGuest() {
    return (
        <div className='navMenu'>
            <Link to='/login'>
                <div className='nav-box'>
                    <i class="fa-brands fa-hornbill"></i>
                    <p>Houses</p>
                </div>
            </Link>
            <a href=''>
                <div className='nav-box'>
                    <i class="fa-brands fa-pushed"></i> 
                    <p>Parties</p>
                </div>
            </a>
            <Link to='/login'>
                <div className='nav-box'>
                <i class="fa-regular fa-message"></i>
                    <p>Chat</p>
                </div>
            </Link>
            <Link to='/login' >
                <div className='nav-box'>
                    <img src='https://www.treatmentatlas.org/sites/default/files/inline-images/generic%20headshot%20icon.jpg'/>
                    <p>Login</p>
                </div>
            </Link>
        </div>
    )
}

export default NavMenuGuest;