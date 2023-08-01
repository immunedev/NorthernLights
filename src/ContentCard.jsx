import React from 'react'
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";


export default function ContentCard({ data, onTripSelect }) {

  const handleButtonClick = () => {
    onTripSelect(data); // Pass the selected trip data to the onTripSelect function
  };

  return (
    <div className='content-card'>
        <div className='card-photo'>
          img
        </div>
        <div className='card-texts'>
          <div className='card-main-text'>{data.title}</div>

          <div className='card-sub-text'>{data.subtitle}</div>

          <div className='card-icons'>
            <div className='card-icon'>
              <LocationIcon className='card-svg'></LocationIcon>
              <div className='card-icon-text'>{data.location}</div>
            </div>
            <div className='card-icon'>
              <DateIcon className='card-svg'></DateIcon>
              <div className='card-icon-text'>{data.length}</div>
            </div>
            <div className='card-icon'>
              <PriceIcon className='card-svg'></PriceIcon>
              <div className='card-icon-text'>{data.price}</div>
            </div>
          </div>
        </div>

        <div className='button-container'>
          <div onClick={handleButtonClick} className='card-button'>Check trip</div>
        </div>
    </div>
  )
}

