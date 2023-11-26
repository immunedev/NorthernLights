import ReactDOM from 'react-dom/client';
import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from './Header';
import SearchBar from './SearchBar';
import ContentContainer from './ContentContainer';
import TripPage from './TripPage';
import FinalPage from './FinalPage';
import Lead from './Lead';
import Faq from './Faq';
import ErrorPage from './Error';


function Background({ children }) {
  const STARS_SMALL = 30;
  const STARS_MEDIUM = 5;
  const STARS_LARGE = 3;

  const STARS_POSITIONS = [["52.6028%", "55.1901%"], ["56.4629%", "50.2025%"], ["83.2456%", "22.6163%"], ["10.4996%", "71.2179%"], ["82.1531%", "76.8504%"], ["67.7184%", "75.0697%"], ["68.278%", "63.305%"], ["34.1448%", "2.9476%"], ["12.3896%", "22.9276%"], ["1.14802%", "2.35352%"], ["37.4057%", "11.4621%"], ["90.806%", "49.2803%"], ["99.3392%", "94.9814%"], ["91.3218%", "96.3487%"], ["11.5175%", "65.6935%"], ["47.1982%", "67.9014%"], ["82.7763%", "2.17399%"], ["34.6444%", "61.8139%"], ["20.7447%", "68.4092%"], ["26.8029%", "11.5974%"], ["39.3473%", "12.5132%"], ["89.7086%", "36.4056%"], ["69.7571%", "94.4975%"], ["9.65189%", "3.01875%"], ["25.5274%", "38.4982%"], ["53.1446%", "28.5003%"], ["77.693%", "54.2393%"], ["62.1586%", "17.9475%"], ["80.8534%", "68.4127%"], ["73.0455%", "53.8051%"], ["82.4067%", "28.994%"], ["3.12611%", "91.1206%"], ["97.5243%", "2.34456%"], ["13.3138%", "45.7797%"], ["43.6599%", "81.0112%"], ["51.4344%", "38.2547%"], ["9.88837%", "65.4686%"], ["31.0491%", "70.4578%"], ["0.897419%", "7.51539%"], ["8.69674%", "30.3451%"], ["94.5736%", "7.42756%"]];

  useEffect(() => {
    document.querySelectorAll(".star").forEach((star, i) => {
      star.style.top = STARS_POSITIONS[i][0];
      star.style.left = STARS_POSITIONS[i][1];
    })


    document.addEventListener("mousemove", starMouseMove);
  }, []);

  const coordTransform = (c) => {
    return Math.sin(Math.PI * 0.5 * c);
  }

  const starMouseMove = (e) => {
    let frX = ((e.pageX / window.innerWidth) - 0.5) * 2.0;
    let frY = ((e.pageY / window.innerHeight) - 0.5) * 2.0;

    let move = {
      x: 3 * coordTransform(frX),
      y: 3 * coordTransform(frY)
    };

    document.querySelector(".star-container").style.transform = `translate(${move.x}px, ${move.y}px)`;
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      {children}
    </div>
  )
}

export default function App() {
   
  return (
      // <Background>
      //   <Header />
      //   <Routes>

      //     <Route path="/" 
      //       element={
      //         <Fragment>
      //           <Lead />
      //           <SearchBar />
      //           <ContentContainer />
      //         </Fragment>
      //       }/>
      //     <Route path="/trip/:id" element={ <TripPage/> }/>
      //     <Route path="/final" element={ <FinalPage/> }/>
      //     <Route path="/faq" element={ <Faq /> }/>
      //     <Route path="/error" element={ <ErrorPage/> }/>

      //   </Routes>
      // </Background>
      <Background>
      <Header />
      <Routes>

        <Route path="/demos/nl/" 
          element={
            <Fragment>
              <Lead />
              <SearchBar />
              <ContentContainer />
            </Fragment>
          }/>
        <Route path="/demos/nl/trip/:id" element={ <TripPage/> }/>
        <Route path="/demos/nl/final" element={ <FinalPage/> }/>
        <Route path="/demos/nl/faq" element={ <Faq /> }/>
        <Route path="/demos/nl/error" element={ <ErrorPage/> }/>

      </Routes>
    </Background>
  );
}
