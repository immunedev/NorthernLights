import React, { useState } from "react";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";


export default function GuestForm({ placeholder }) {
    const [value, setValue] = useState('');

    
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    return (
        <div className="date-picker-form">
            <div className="date-text">{value}</div>
            <div className="icon-help-guest">
                <ProfileIcon className="calender-icon"></ProfileIcon>
                <DownArrow className="down-arrow"></DownArrow>
            </div>
        </div>
    );
}