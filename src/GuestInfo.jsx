import React, { useState } from "react";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as MinusIcon } from "./assets/minus.svg"; //ten svg do zmiany


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
                        <div className='guest-menu-content'>
                            <div className='guest-menu-content-row'>
                                <div className='guest-menu-type'>Adults  </div>
                                <div className='guest-menu-number'>1</div>
                                <div className='guest-menu-button-plus'>
                                    <PlusIcon></PlusIcon>
                                </div>
                                <div className='guest-menu-button-minus'>
                                    <MinusIcon className='minus-icon'></MinusIcon>
                                </div>
                            </div>
                            <div className='guest-menu-content-row'>
                                <div className='guest-menu-type'>Adults</div>
                                <div className='guest-menu-number'>0</div>
                                <div className='guest-menu-button-plus'>
                                    <PlusIcon></PlusIcon>
                                </div>
                                <div className='guest-menu-button-minus'>
                                    <MinusIcon className='minus-icon'></MinusIcon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}