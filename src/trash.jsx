return (
    <div className="page">
      <div className="page-bg">
        <div className="star-container">
          {
            (() => {
              const e = [];

              for (let i = 0; i <= STARS_SMALL; i++) {
                e.push(<div className="star star-sm"></div>);
              }

              for (let i = 0; i <= STARS_MEDIUM; i++) {
                e.push(<div className="star star-md"></div>);
              }

              for (let i = 0; i <= STARS_LARGE; i++) {
                e.push(<div className="star star-lg"></div>);
              }


              return e
            })()
          }
        </div>
      </div>
 
      {/* <Header /> */}
      <Faq></Faq>
      {/* {showFinalPage ? (
        <FinalPage 
        tripData={selectedTrip}
        onBackClick={handleBackToContent} />
      ) : (
        <>
          {selectedTrip ? (
            <TripPage
              tripData={selectedTrip}
              onBackClick={handleBackToContent}
              onShowFinalPage={handleShowFinalPage}
            />
          ) : (
            <>
              <Lead />
              <SearchBar />
              <ContentContainer onTripSelect={handleTripSelect} />
            </>
          )}
        </>
      )} */}
    </div>
  );