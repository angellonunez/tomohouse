import React from 'react';
import './HousesSection.css';
import House from './House';
import { houses } from '../housesData';

function HousesSection() {
    return (
        <div className='HousesSection'>
            <h2>Houses</h2>
            <House image={houses[0].img} location={houses[0].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[0].owner}/>
            <House image={houses[1].img} location={houses[1].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[1].owner}/>
            <House image={houses[2].img} location={houses[2].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[2].owner}/>
            <House image={houses[3].img} location={houses[3].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[3].owner}/>
            <House image={houses[4].img} location={houses[4].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[4].owner}/>
            <House image={houses[5].img} location={houses[5].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[5].owner}/>
            <House image={houses[6].img} location={houses[6].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price} owner={houses[6].owner}/>
        </div>
    )
}

export default HousesSection;