import React from "react";
import DateForm from "./DatePicker";
import GuestForm from "./GuestInfo";
import CountryForm from "./CountryPicker";
import Button from "./Button";

export default function SearchBar(){
    return(
        <div className="search-bar-container">
            <div className="search-bar">
                <DateForm placeholder="Check-in"></DateForm>
                <DateForm placeholder="Check-out"></DateForm>
                <GuestForm placeholder="Guest info"></GuestForm>
                <CountryForm placeholder="Country"></CountryForm>
                <Button placeholder="Search" cssClass="search-button"></Button>
            </div>
        </div>
    )
}