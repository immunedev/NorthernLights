import React from 'react'
import Header from './Header'
import SearchBar from './SearchBar'
import ContentContainer from './ContentContainer'

function App() {
  return (
    <div className='background-scene'>
      <Header></Header>
      <SearchBar></SearchBar>
      <ContentContainer></ContentContainer>
    </div>
  )
}

export default App
