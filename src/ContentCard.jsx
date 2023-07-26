import React from 'react'
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";


export default function ContentCard({data}) {
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
              <LocationIcon></LocationIcon>
              <div className='card-icon-text'>{data.location}</div>
            </div>
            <div className='card-icon'>
              <DateIcon></DateIcon>
              <div className='card-icon-text'>{data.length}</div>
            </div>
            <div className='card-icon'>
              <PriceIcon></PriceIcon>
              <div className='card-icon-text'>{data.price}</div>
            </div>
          </div>
        </div>

        <div className='button-container'>
          <div className='card-button'>Check trip</div>
        </div>
    </div>
  )
}

