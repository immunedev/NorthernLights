import React, { useState } from "react";
import { ReactComponent as CalenderIcon } from "./assets/calender.svg";


export default function DateForm({ placeholder }) {
    const [value, setValue] = useState('');

    
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    return (
        <div className="date-picker-form">
            <div className="date-text">{value}</div>
            <div className="icon-help">
                <CalenderIcon className="calender-icon"></CalenderIcon>
            </div>
        </div>
    );
}