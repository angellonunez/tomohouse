import React from 'react';
import FriendsMenu from '../components/FriendsMenu';
import Header from '../components/Header';
import HousesSection from '../components/HousesSection';
import NavMenu from '../components/NavMenu';

function Home() {
    return (
        <div>
            <Header />
            <FriendsMenu />
            <HousesSection />
            <NavMenu />
        </div>
    )
}

export default Home;