import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ContentContainer from './ContentContainer';
import TripPage from './TripPage';

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);

  const handleTripSelect = (tripData) => {
    setSelectedTrip(tripData);
  };

  const handleBackToContent = () => {
    setSelectedTrip(null);
  };


  return (
    <div>
      <Header />
      <SearchBar />
      {selectedTrip ? (
        <TripPage tripData={selectedTrip} onBackClick={handleBackToContent}/>
      ) : (
        <ContentContainer onTripSelect={handleTripSelect} />
      )}
    </div>
  );
}