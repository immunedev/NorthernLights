import React from "react";


export default function Button({ placeholder, cssClass }) {

    return (
        <div className={cssClass}>
            <div className="button-text">{placeholder}</div>
        </div>
    );
}