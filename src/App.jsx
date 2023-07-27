import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ContentContainer from './ContentContainer'
import TripPage from './TripPage'

function App() {
  return (
    <div>
      <Header></Header>
      <SearchBar></SearchBar>
      <ContentContainer></ContentContainer>
      {/* tymczasowo commented do momentu napisania przejscia do podstrony */}
      {/* <TripPage></TripPage> */}
    </div>
  )
}

export default App
