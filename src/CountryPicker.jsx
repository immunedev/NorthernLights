import React, { useState } from "react";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";
import { ReactComponent as GlobeIcon } from "./assets/globe.svg";

export default function CountryForm({ placeholder }) {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);

    const countriesData = [
        {
            name: 'United States',
            flagUrl: '',
        },
        {
            name: 'Canada',
            flagUrl: '',
        },
        {
            name: 'United Kingdom',
            flagUrl: '',
        },
        {
            name: 'Poland',
            flagUrl: '',
        },
        {
            name: 'Russia',
            flagUrl: '',
        },
        {
            name: 'China',
            flagUrl: '',
        },
        {
            name: 'Portugal',
            flagUrl: '',
        },
        
    ];

    const handleOpen = () => {
      setOpen((prevOpen) => !prevOpen); 
    };

    const handleMenuItemClick = (countryName) => {
      setValue(countryName); 
      setOpen(false); 
    };
 
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);


    return (
        <div onClick={handleOpen} className="country-picker-form">
          <div className="country-text">{value}</div>
          <div className="icon-help">
            <GlobeIcon className='guest-icon'></GlobeIcon>
            <DownArrow className="down-arrow"></DownArrow>
          </div>
          <div className={`menu-container ${open ? "active" : ""}`}>
            <ul className="menu">
              {countriesData.map((country, index) => (
                <li key={index} className="menu-item">
                  <button onClick={(e) => { 
                    e.stopPropagation();
                    handleMenuItemClick(country.name);
                  }}>
                    {country.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      );
}