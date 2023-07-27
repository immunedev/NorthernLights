import React, { useState } from "react";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";


export default function GuestForm({ placeholder }) {
    const [value, setValue] = useState('');
    const [open, setOpen] = useState(false);


    const handleOpen = () => {
        setOpen((prevOpen) => !prevOpen); 
      };
  

    
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    return (
        <div onClick={handleOpen} className="date-picker-form">
            <div className="date-text">{value}</div>
            <div className="icon-help-guest">
                <ProfileIcon className="calender-icon"></ProfileIcon>
                <DownArrow className="down-arrow"></DownArrow>
            </div>
            <div className={`menu-container-guest ${open ? "active" : ""}`}>
                <div className="guest-menu">
                    <div className="guest-menu-flex">
                        
                    </div>
                </div>
            </div>
        </div>
    );
}