import React, { useEffect, useRef } from 'react';
import ContentCard from './ContentCard'
import { tripData } from './data';



export default function ContentContainer({ onTripSelect }) {

  return (
    <div className='content-container'>
        <div className="content-box" >
          {tripData.trips.map((trip) => (
            <ContentCard key={trip.id} data={trip} onTripSelect={onTripSelect}/>
            
          ))}
        </div>
    </div>
  )
}

