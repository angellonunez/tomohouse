import React from 'react';
import FriendsMenu from '../components/FriendsMenu';
import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import './Profile.css'

function Profile() {
    const logout = () => {
        localStorage.removeItem("user");
        window.location.reload();
    }

    return (
        <div className='profile'>
            <Header />
            <div className='box'>
                <img className='profile-picture' src='/img/angellonunez.jpg' />
                <div className='container'>
                    <h2>Angello Nunez</h2>
                    <h3>Home Owner Premium</h3>
                    <div>
                        <img className='blueStar' src='/img/bluestar.svg'/>
                        <span className='score'>4.7</span>
                    </div>
                </div>
            </div>
            <button className='logout' id='logout' onClick={logout}>Logout</button>
            <NavMenu />
        </div>
    )
}

export default Profile