import React from 'react';
import FriendsMenu from '../components/FriendsMenu';
import Header from '../components/Header';
import PartiesSection from '../components/PartiesSection';
import NavMenu from '../components/NavMenu';

function Home() {
    return (
        <div>
            <Header />
            <FriendsMenu />
            <PartiesSection />
            <NavMenu />
        </div>
    )
}

export default Home;