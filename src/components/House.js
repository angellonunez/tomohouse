import React from 'react';
import './House.css';

function House(props) {
    return (
        <div className='house'>
            <div className='house-image-container'>
                <img className='houseImg' src={props.image}/>
            </div>
            <div className='first-details'>
                <span className='location'>{props.location}</span>
                <span className='calification'><i className="fa-solid fa-star"></i> 4.1</span>
            </div>
                <p><span className='owner-word'>Owner:</span> {props.owner}</p>
                <div className='participants-container'>
                <span className='participants'>{props.participants}</span>
                <span className='participants-logo'><i className="fa-solid fa-user-group"></i></span>
                </div>
            <p className='date'>{props.date}</p>
            <p className='price'>{props.price}</p>
        </div>
    )
}

export default House