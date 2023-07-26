import React, { useState } from "react";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";


export default function CountryForm({ placeholder }) {
    const [value, setValue] = useState('');

    
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    return (
        <div className="country-picker-form">
            <div className="country-text">{value}</div>
            <div className="icon-help">
                <DownArrow className="down-arrow"></DownArrow>
            </div>
        </div>
    );
}