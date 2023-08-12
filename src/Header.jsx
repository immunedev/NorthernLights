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
                                <div className="navbar-more">
                                    More
                                    <DownArrow className="down-arrow"></DownArrow>
                                </div>
                            </div>
                            <div className="profile-text">Login</div>
                        </div>
                        
                    </div>
                </div>
                <div className="navbar-text">
                    <div className="navbar-main-text">Experience the magnificient Aurora</div>
                    <div className="navbar-sub-text">Trips starting at <span className="child-price">$399 for children</span> and <span className="child-price">$599 for adults</span></div>
                </div>
            </div>
        </div>
    )
}