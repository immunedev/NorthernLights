import { useState } from "react";
import DatePickerCustomInput from "./DatePicker";
import GuestForm from "./GuestInfo";
import CountryForm from "./CountryPicker";
import Button from "./Button";
import DatePickerWrapper from "./DatePicker";



export default function SearchBar(){
    const [ checkInDate, setCheckInDate ] = useState(null);
    const [ checkOutDate, setCheckOutDate ] = useState(null);


    
    return(
        <div className="search-bar-container">
            <div className="search-bar">
                <DatePickerWrapper selected={checkInDate} maxDate={checkOutDate} placeholder="Check-in" onChange={(date) => setCheckInDate(date)} />
                <DatePickerWrapper selected={checkOutDate} minDate={checkInDate} placeholder="Check-out" onChange={(date) => setCheckOutDate(date)} />
                
                
                <GuestForm placeholder="Guests"></GuestForm>
                <CountryForm placeholder="Country"></CountryForm>
                <Button placeholder="Search" cssClass="search-button"></Button>
            </div>
        </div>
    )
}