import React from 'react';
import './NavMenu.css';

function NavMenu() {
    return (
        <div className='navMenu'>
            <div className='nav-box first-icon'>
                <i class="fa-brands fa-hornbill"></i>
                <p>Houses</p>
            </div>
            <div className='nav-box'>
                <i class="fa-brands fa-pushed"></i> 
                <p>Parties</p>
            </div>
            <div className='nav-box'>
            <i class="fa-regular fa-message"></i>
                <p>Chat</p>
            </div>
            <div className='nav-box last-icon'>
                <img src='/img/angellonunez.jpg'/>
                <p>Profile</p>
            </div>
        </div>
    )
}

export default NavMenu;