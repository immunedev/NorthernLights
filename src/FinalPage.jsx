import React from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";

export default function FinalPage({ tripData, onBackClick }){

    return(
        <div className="final-page-container">
            <div className="final-page-box">
            <button onClick={onBackClick} className="back-button">
                <BackIcon className='back-arrow'></BackIcon>                    
            </button>
                <div className="final-page-left-col">
                    <div className="final-page-title">Contact information</div>
                    <div className="final-page-subtitle">Name</div>
                    <input type="text" className="text-input"></input>
                    <div className="final-page-subtitle">Surename</div>
                    <input type="text" className="text-input"></input>
                    <div className="final-page-subtitle">E-mail</div>
                    <input type="text" className="text-input"></input>
                    <div className="final-page-subtitle">Phone</div>
                    <input type="text" className="text-input"></input>
                    <div className="final-page-subtitle">Special wish</div>
                    <input type="text" className="text-input"></input>
                </div>
                <div className="final-page-right-col">
                    <div className="final-page-title">Summary</div>
                    <div className="photo-div">
                        <div className="summary-photo">Test</div>
                    </div>
                    <div className='card-icons-summary'>
                        <div className='card-icon-summary'>
                          <LocationIcon></LocationIcon>
                          <div className='card-icon-text-summary'>{tripData.location}</div>
                        </div>
                        <div className='card-icon-summary'>
                          <DateIcon></DateIcon>
                          <div className='card-icon-text-summary'>{tripData.length}</div>
                        </div>
                        <div className='card-icon-summary'>
                          <PriceIcon></PriceIcon>
                          <div className='card-icon-text-summary'>{tripData.price}</div>
                        </div>
                    </div>
                    <div className="price-summary-div">
                        <div className="price-summary">Total: {tripData.price}</div>
                    </div>
                    <div className="price-summary-button-div">
                        <div className="button-summary">Pay</div>
                    </div>
                </div>
            </div>
        </div>
    );
}