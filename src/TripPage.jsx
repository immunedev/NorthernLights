import React from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";


export default function TripPage({tripData, onBackClick, onShowFinalPage  }){


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
                        <div className='trip-boxes'>
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

                    <div></div>
                </div>
            </div>
        </div>
    )
}