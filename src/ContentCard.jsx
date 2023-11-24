import React from 'react'
import { Link } from "react-router-dom"

import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as FlightOut } from "./assets/flighttakeof.svg";
import { ReactComponent as FlightIn } from "./assets/flightland.svg";
import { ReactComponent as Hotel } from "./assets/hotel1.svg";



export default function ContentCard({ data, onTripSelect }) {

  const handleButtonClick = () => {
    
  };

  return (
    <div className='content-card'>

        <div className='card-photo'></div>

        <div className='card-content'>

          <div className='card-title'>{data.title}</div>
          <div className='card-details'>
            <div className='card-details-cell'>
              <FlightOut className='icon-32'></FlightOut>
              <p className='details-text'>{data.departure}</p>
            </div>
            <div className='card-details-cell'>
              <DateIcon className='icon-32'></DateIcon>
              <p className='details-text'>{data.length}</p>
            </div>
            <div className='card-details-cell'>
              <FlightIn className='icon-32'></FlightIn>
              <p className='details-text'>{data.location}</p>
            </div>
            <div className='card-details-cell'>
              <Hotel className='icon-32'></Hotel>
              <p className='details-text'>{data.hotel}</p>
            </div>
          </div>

          <div className='card-desc'>
            <div className='card-long-desc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitatio
            </div>
            <div className='card-price-cell'>
              <div className='card-price-text'>
                <div className='price'>{data.price}</div>
                <div className='price'>{data.child_price}</div>
                <div className='sub-price'>Per adult</div>
                <div className='sub-price'>Per child</div>
              </div>
              <Link to={'trip/' + data.id} className='card-button'>Check trip</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

