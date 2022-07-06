import React from 'react';
import './FriendBox.css';


function FriendBox(props) {
    return (
        <div className='FriendBox'>
            <div className='image-wrapper'>
                <img className='profileImg' src={props.image} alt={props.firstName + ' ' + props.lastName}/>
            </div>
            <img className='blueStar' src='/img/bluestar.svg'/>
            <span className='score'>4.7</span>
            <span className='review'> (6)</span>
            <h2>{props.firstName + " " + props.lastName}</h2>
            <p>Chorrilos, Peru</p>
        </div>
    )
}

export default FriendBox;