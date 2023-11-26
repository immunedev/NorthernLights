import React, { useState, useEffect  } from "react";
import { useParams, Link  } from 'react-router-dom';
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";
import { ReactComponent as FlightOut } from "./assets/flighttakeof.svg";
import { ReactComponent as FlightIn } from "./assets/flightland.svg";
import { ReactComponent as Hotel } from "./assets/hotel1.svg";
import { tripData } from './data';



export default function TripPage(){

    // const tripPageData = useParams();
    // tripPageData = tripData.trips[tripPageData.id]

    const { id } = useParams(); 
    const tripPageData = tripData.trips[id]; 

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return(
        <div className="trip-container">
            <div className="trip-box">
                <div className="trip-photo"></div>
                <div className='trip-content-grid'>
                    <div className='trip-left-cell'>
                        <div className='trip-boxes'>
                            <div className='trip-box-info'>All inclusive</div>
                            <div className='trip-box-info'>Aurora hunt</div>
                            <div className='trip-box-info'>Private guide</div>
                            <div className='trip-box-info'>Rental car</div>
                        </div>
                        <div className='trip-subtitle'>Description</div>
                        <div className='trip-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>

                        <div className='trip-desc'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>

                        <div className='trip-desc-last'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </div>
                        
                        <div className='trip-subtitle padding-top'>Amenities</div>
                        <div className='trip-boxes trip-boxes-low'>
                            <div className='trip-box-amenities'>
                                All inclusive
                            </div>
                            <div className='trip-box-amenities'>
                                Aurora hunt
                            </div>
                            <div className='trip-box-amenities'>
                                Private guide
                            </div>
                            <div className='trip-box-amenities'>
                                Rental car
                            </div>
                        </div>

                    </div>

                    <div className="trip-right-cell">
                        <div className="trip-right-cell-photos">
                            <div className="trip-grid-photo-placeholder"></div>
                            <div className="trip-grid-photo-placeholder"></div>
                            <div className="trip-grid-photo-placeholder"></div>
                            <div className="trip-grid-photo-placeholder"></div>
                            <div className="trip-grid-photo-placeholder"></div>
                            <div className="trip-grid-photo-placeholder"></div>
                        </div>
                        <div className="trip-summary">
                            <div className="trip-summary-title">Trip summary</div>
                            <div className="trip-summary-icons">
                                <FlightOut className='icon-32'></FlightOut>
                                {tripPageData.departure}
                            </div>
                            <div className="trip-summary-icons">
                                <DateIcon className='icon-32'></DateIcon>
                                {tripPageData.length}
                            </div>
                            <div className="trip-summary-icons">
                                <Hotel className='icon-32'></Hotel>
                                {tripPageData.hotel}
                            </div>
                            <div className='card-price-cell trip-price-cell'>
                                <div className='card-price-text trip-price-text'>
                                    <div className='price'>{tripPageData.price}</div>
                                    <div className='price'>{tripPageData.child_price}</div>
                                    <div className='sub-price trip-sub-price'>Per adult</div>
                                    <div className='sub-price'>Per child</div>
                                </div>
                                <div className="trip-buttons">
                                    {/* <Link to='/final' className='card-button'>Finalize</Link>
                                    <Link to='/final' className='card-button trip-button'>Lorem Ipsum</Link> */}
                                    <Link to='/demos/nl/final' className='card-button'>Finalize</Link>
                                    <Link to='/demos/nl/final' className='card-button trip-button'>Lorem Ipsum</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}