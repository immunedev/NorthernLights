import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CalenderIcon } from "./assets/calender.svg";

export default function DateForm({ placeholder }) {
  const [startDate, setStartDate] = useState(null);
  const datePickerRef = useRef(null);



  const handleDateChange = (event) => {
   
    const selectedDate = event.target.value;

  
    setStartDate(selectedDate);
    setDatePickerOpen(false);
  };

  const handleFormClick = () => {
    setDatePickerOpen(true);
  };

  
  useEffect(() => {
    function handleClickOutside(event) {
      if (datePickerRef.current && !datePickerRef.current.contains(event.target)) {
        setDatePickerOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [datePickerRef]);

 

  return (

    
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // do fixa jest button do otwierania tego forma tbh nie wiem jak to zrobic :/
    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    <div className="date-picker-form" onClick={handleFormClick}>
      <input placeholder={placeholder} className="input-date" type="date" value={startDate || ""} onChange={handleDateChange} />
      <span className="open-button">
        <button type="button">
          <CalenderIcon className='calender-icon'></CalenderIcon>
        </button>
      </span>
    </div>
  );
}