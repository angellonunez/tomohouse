import React from 'react';
import './FriendsMenu.css';
import FriendBox from './FriendBox';
import { friends } from '../friendsData'

function FriendsMenu() {
    return (
        <div className='FriendsMenu'>
            <FriendBox firstName={friends[0].firstName} lastName={friends[0].lastName} image={friends[0].img}/>
            <FriendBox firstName={friends[1].firstName} lastName={friends[1].lastName} image={friends[1].img}/>
            <FriendBox firstName={friends[2].firstName} lastName={friends[2].lastName} image={friends[2].img}/>
            <FriendBox firstName={friends[3].firstName} lastName={friends[3].lastName} image={friends[3].img}/>
            <FriendBox firstName={friends[4].firstName} lastName={friends[4].lastName} image={friends[4].img}/>
            <FriendBox firstName={friends[5].firstName} lastName={friends[5].lastName} image={friends[5].img}/>
            <FriendBox firstName={friends[6].firstName} lastName={friends[6].lastName} image={friends[6].img}/>
        </div>
    )
}

export default FriendsMenu;