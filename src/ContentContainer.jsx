import React, { useEffect, useRef } from 'react';
import ContentCard from './ContentCard'


export default function ContentContainer({ onTripSelect }) {
  const data = {
    "trips": [
      {
        id: 1,
        title: 'Northern fyords with lights',
        subtitle: 'Enchanting Northern Fjords, Ablaze with Lights',
        hotel: 'Hilton Oslo, Superior room',
        location: 'Norway, Tromso', 
        departure: 'Poland, Katowice',
        length: '7 days',
        price: '899 $',
        child_price: '699 $',
      },
      {
        id: 2,
        title: 'Lights on island',
        subtitle: 'Illuminated Icelandic Nights',
        hotel: 'Marriot Reykjavik, Standard room',
        location: 'Iceland, Reykjavik', 
        departure: 'Poland, Warszawa',
        length: '5 days',
        price: '699 $',
        child_price: '499 $',
      },
      {
        id: 3,
        title: 'Lapland beauty',
        subtitle: 'Lapland s Breathtaking Aurora',
        hotel: 'Golden Finland, Apartament',
        location: 'Finland, Helsinki', 
        departure: 'Poland, Poznać',
        length: '14 days',
        price: '1799 $',
        child_price: '1499 $',
      },
      {
        id: 4,
        title: 'Colorfull Sweden',
        subtitle: 'Vibrant Sweden: A Kaleidoscope of Colors',
        hotel: 'NoIdeaHotel, SomeRoom',
        location: 'Sweden, Stockholm', 
        departure: 'Poland, Radom',
        length: '10 days',
        price: '1199 $',
        child_price: '799 $',
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

