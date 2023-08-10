import React from 'react'
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as FlightOut } from "./assets/flighttakeof.svg";
import { ReactComponent as FlightIn } from "./assets/flightland.svg";
import { ReactComponent as Hotel } from "./assets/hotel1.svg";


export default function ContentCard({ data, onTripSelect }) {

  const handleButtonClick = () => {
    onTripSelect(data); // Pass the selected trip data to the onTripSelect function
  };

  return (
    <div className='content-card'>

        <div className='card-photo'></div>

        <div className='card-content'>

          <div className='card-title'>Lorem Ipsum</div>
          <div className='card-details'>
            <div className='card-details-cell'>
              <FlightOut className='icon-32'></FlightOut>
              <p className='details-text'>Poland, Katowice</p>
            </div>
            <div className='card-details-cell'>
              <DateIcon className='icon-32'></DateIcon>
              <p className='details-text'>14 days</p>
            </div>
            <div className='card-details-cell'>
              <FlightIn className='icon-32'></FlightIn>
              <p className='details-text'>Norway, Tromso</p>
            </div>
            <div className='card-details-cell'>
              <Hotel className='icon-32'></Hotel>
              <p className='details-text'>Hilton Oslo, Superior room</p>
            </div>
          </div>

          <div className='card-desc'>
            <div className='card-long-desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </div>
            <div className='card-price-cell'>
              <div className='card-price-text'>
                <div className='price'>599$</div>
                <div className='price'>399$</div>
                <div className='sub-price'>Per adult</div>
                <div className='sub-price'>Per child</div>
              </div>
              <button onClick={handleButtonClick} className='card-button'>Check trip</button>
            </div>
          </div>
        </div>
    </div>
  )
}

