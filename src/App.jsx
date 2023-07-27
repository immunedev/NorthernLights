import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ContentContainer from './ContentContainer'
import TripPage from './TripPage'

function App() {
  return (
    <div>
      <Header></Header>
      {/* <SearchBar></SearchBar> */}
      {/* tymczasowo commented do momentu stworzenia TripPage */}
      {/* <ContentContainer></ContentContainer> */}
      <TripPage></TripPage>
    </div>
  )
}

export default App
