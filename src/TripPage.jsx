import React from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";


export default function TripPage(data){
    return(
        <div className="trip-container">
            <div className="trip-box">
                <div className="trip-photo">img</div>
                <div className="trip-rows">
                    <div className="trip-left-col">
                        <div className="trip-title">Lorem Ipsum</div>
                        <div className="trip-icons">
                            <div className="trip-cell">
                                <LocationIcon></LocationIcon>
                                <div className="trip-cell-text">Test</div>
                            </div>
                            <div className="trip-cell">
                                <DateIcon></DateIcon>
                                <div className="trip-cell-text">Test</div>
                            </div>
                            <div className="trip-cell">
                                <PriceIcon></PriceIcon>
                                <div className="trip-cell-text">Test</div>
                            </div>
                        </div>
                        <div className="trip-desc">Lorem ipsum dolor sit amet,  consectetur adipiscing elit, sed do eiusmod tempor incididunt    ut labore et dolore magna aliqua. Ut enim ad minim veniam,     quis nostrud exercitation ullamco laboris nisi ut aliquip ex    ea commodo consequat. Duis aute irure dolor in reprehenderit   in voluptate velit esse cillum dolore eu fugiat nulla     pariatur. Excepteur sint occaecat cupidatat non proident,   sunt in culpa qui officia deserunt mollit anim id est laborum.    </div>
                    </div>
                    <div className="trip-right-col">
                    
                        
                    </div>
                </div>
            </div>
        </div>
    )
}