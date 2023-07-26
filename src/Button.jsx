import React, { useState } from "react";


export default function Button({ placeholder, cssClass }) {
    const [value, setValue] = useState('');

    
    React.useEffect(() => {
        setValue(placeholder);
    }, [placeholder]);

    return (
        <div className={cssClass}>
            <div className="button-text">{value}</div>
        </div>
    );
}