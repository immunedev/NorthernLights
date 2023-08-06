import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as CalenderIcon } from "./assets/calender.svg";

export default function DateForm({ placeholder }) {
  const [startDate, setStartDate] = useState(null);
  const [isDatePickerOpen, setDatePickerOpen] = useState(false);
  const datePickerRef = useRef(null);

  const handleIconClick = () => {
    setDatePickerOpen(true);
  };

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

  const handlePlaceholder = () => {
    return startDate ? startDate : placeholder;
  };

  return (
    <div className="date-picker-form" onClick={handleFormClick}>
      <div className="date-text" onClick={handleFormClick}>
        {handlePlaceholder()}
      </div>
      {isDatePickerOpen && (
        <div ref={datePickerRef}>
          <input type="date" value={startDate || ""} onChange={handleDateChange} />
        </div>
      )}
      <div className="icon-help">
        <CalenderIcon className="calender-icon" onClick={handleIconClick} />
      </div>
    </div>
  );
}