import React from "react";


export default function Button({ placeholder, cssClass }) {

    return (
        <button className={cssClass}>
            {placeholder}
        </button>
    );
}