import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";
import { ReactComponent as GlobeIcon } from "./assets/globe.svg";

import classNames from 'classnames'

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
 
    useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    const menuRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [])


    return (
        <div ref={menuRef} onClick={handleOpen} className="country-picker-form">
          <div className={"country-text " + (value == placeholder ? "placeholder" : "")}>{value}</div>
          <div className="icon-help">
            <GlobeIcon className='guest-icon'></GlobeIcon>
            <DownArrow className={classNames("down-arrow", { flip: open })}></DownArrow>
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