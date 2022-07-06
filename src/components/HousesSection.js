import React from 'react';
import './HousesSection.css';
import House from './House';
import { houses } from '../housesData';

function HousesSection() {
    return (
        <div>
            <h2>Houses</h2>
            <House image={houses[0].img} location={houses[0].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[1].img} location={houses[1].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[2].img} location={houses[2].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[3].img} location={houses[3].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[4].img} location={houses[4].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[5].img} location={houses[5].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
            <House image={houses[6].img} location={houses[6].location} participants={houses[0].participants} date={houses[0].date} price={houses[0].price}/>
        </div>
    )
}

export default HousesSection;