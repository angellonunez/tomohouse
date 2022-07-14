import React from 'react';
import './NavMenu.css';
import Login from '../pages/Login';
import { Link } from 'react-router-dom';

function NavMenu() {
    return (
        <div className='navMenu'>
            <div className='nav-box'>
                <i className="fa-brands fa-hornbill"></i>
                <p>Houses</p>
            </div>
            <div className='nav-box'>
                <i className="fa-brands fa-pushed"></i> 
                <p>Parties</p>
            </div>
            <Link to='/' >
            <div className='nav-box'>
            <i className="fa-regular fa-message"></i>
                <p>Chat</p>
            </div>
            </Link>
            <Link to='/profile' >
                <div className='nav-box'>
                    <img src='/img/angellonunez.jpg'/>
                    <p>Profile</p>
                </div>
            </Link>
        </div>
    )
}

export default NavMenu;