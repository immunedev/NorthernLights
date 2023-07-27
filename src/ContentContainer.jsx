import React, { useEffect, useRef } from 'react';
import ContentCard from './ContentCard'


export default function ContentContainer({ onTripSelect }) {
  const data = {
    "trips": [
      {
        id: 1,
        title: 'Northern fyords with lights',
        subtitle: 'Enchanting Northern Fjords, Ablaze with Lights',
        location: 'Norway, Tromso', 
        length: '7 days',
        price: '900 $',
      },
      {
        id: 2,
        title: 'Lights on island',
        subtitle: 'Illuminated Icelandic Nights',
        location: 'Iceland, Reykjavik', 
        length: '5 days',
        price: '600 $',
      },
      {
        id: 3,
        title: 'Lapland beauty',
        subtitle: 'Lapland s Breathtaking Aurora',
        location: 'Finland, Helsinki', 
        length: '14 days',
        price: '1800 $',
      },
      {
        id: 4,
        title: 'Colorfull Sweden',
        subtitle: 'Vibrant Sweden: A Kaleidoscope of Colors',
        location: 'Sweden, Stockholm', 
        length: '10 days',
        price: '1200 $',
      }
    ],
  }
  

  return (
    <div className='content-container'>
        <div className="content-box" >
          {data.trips.map((trip) => (
            <ContentCard key={trip.id} data={trip} onTripSelect={onTripSelect}/>
            
          ))}
        </div>
    </div>
  )
}

