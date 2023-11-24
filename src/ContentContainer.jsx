import React, { useEffect, useState } from 'react';
import ContentCard from './ContentCard';
import { tripData } from "./data.jsx"

export default function ContentContainer({ onTripSelect }) {
  const [apiData, setApiData] = useState({ data: [] });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:1337/api/trips');

        if (!response.ok) {
          throw new Error('Network response was not OK');
        }

        const data = await response.json();

        if (data.data && Array.isArray(data.data)) {
          setApiData(data);
        } else {
          throw new Error('Invalid API response data');
        }
      } catch (error) {
        console.error('Error fetching or processing data:', error);
        setApiData({ data: [] }); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className='content-container'>
      <div className="content-box" >
        {/* {apiData.data.map((trip) => (
          <ContentCard key={trip.id} data={trip.attributes} onTripSelect={onTripSelect}/>
        ))} */}
        {tripData.trips.map((trip) => (
          <ContentCard key={trip.id} data={trip} onTripSelect={onTripSelect}/>
        ))}
      </div>
    </div>
  );
}



