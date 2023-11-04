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

          <div className='card-title'>{data.Trip_Title}</div>
          <div className='card-details'>
            <div className='card-details-cell'>
              <FlightOut className='icon-32'></FlightOut>
              <p className='details-text'>{data.Flight_From}</p>
            </div>
            <div className='card-details-cell'>
              <DateIcon className='icon-32'></DateIcon>
              <p className='details-text'>{data.How_long}</p>
            </div>
            <div className='card-details-cell'>
              <FlightIn className='icon-32'></FlightIn>
              <p className='details-text'>{data.Flight_to}</p>
            </div>
            <div className='card-details-cell'>
              <Hotel className='icon-32'></Hotel>
              <p className='details-text'>{data.Hotel}</p>
            </div>
          </div>

          <div className='card-desc'>
            <div className='card-long-desc'>
              {data.Trip_Description}
            </div>
            <div className='card-price-cell'>
              <div className='card-price-text'>
                <div className='price'>{data.Price_Adult}$</div>
                <div className='price'>{data.Price_child}$</div>
                <div className='sub-price'>Per adult</div>
                <div className='sub-price'>Per child</div>
              </div>
              <Link to={'trip/' + data.TripID} className='card-button'>Check trip</Link>
            </div>
          </div>
        </div>
    </div>
  )
}

