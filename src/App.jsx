import React, { useState } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import ContentContainer from './ContentContainer';
import TripPage from './TripPage';
import FinalPage from './FinalPage';

export default function App() {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [showFinalPage, setShowFinalPage] = useState(false);

  const handleTripSelect = (tripData) => {
    setSelectedTrip(tripData);
    setShowFinalPage(false); // Reset showFinalPage when a new trip is selected
  };

  const handleBackToContent = () => {
    setSelectedTrip(null);
    setShowFinalPage(false); // Reset showFinalPage when going back to ContentContainer
  };

  const handleShowFinalPage = () => {
    setShowFinalPage(true);
    setSelectedTrip(null); // Reset selectedTrip to null when showing the FinalPage
  };



  return (
    <div>
      <Header />
      {showFinalPage ? (
        <FinalPage onBackClick={handleBackToContent} />
      ) : (
        <>
          <SearchBar />
          {selectedTrip ? (
            <TripPage
              tripData={selectedTrip}
              onBackClick={handleBackToContent}
              onShowFinalPage={handleShowFinalPage}
            />
          ) : (
            <ContentContainer onTripSelect={handleTripSelect} />
          )}
        </>
      )}
    </div>
  );
}