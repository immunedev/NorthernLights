import React from "react";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";

export default function Header(){
    return(
        <div className="logo-container">

            <div className="navbar">
                <div className="navbar-logo">
                    <h1 className="logo-text">NorthernLights</h1>

                    <div className="navbar-content">
                        <div className="navbar-elements">
                            <div className="navbar-element">
                                Explore
                            </div>
                            <div className="navbar-element">
                                Places
                            </div>
                            <div className="navbar-element">
                                More
                                <DownArrow className="down-arrow"></DownArrow>
                            </div>
                            <div className="profile-text">Login</div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}