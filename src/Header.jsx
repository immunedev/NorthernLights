import { useState } from "react";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";

import classNames from "classnames"

function NavbarMenuElement({name, desc, icon}) {
    return (
        <div className="navbar-menu-element">
            <div className="navbar-menu-element-icon">
                <DownArrow></DownArrow>
            </div>
            
            <div className="navbar-menu-element-text">
                <span className="navbar-menu-element-header">
                    {name}
                </span>
                <span className="navbar-menu-element-desc">
                    {desc}
                </span>
            </div>
        </div>
    )
}

function NavbarMenu() {
    return (
        <div className={classNames("navbar-menu")}>
            <NavbarMenuElement name="Car rentals" desc="Learn about car rentals and their availability" />
            <NavbarMenuElement name="Hotels" desc="Learn more about the places you will stay at" />
        </div>
    )
} 

export default function Header() {
    return(
        <div className="logo-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <h1 className="logo-text">NorthernLights</h1>

                    <div className="navbar-content">
                        <div className="navbar-elements">
                            <a href="#" className="navbar-element">
                                Explore
                            </a>
                            <a href="#" className="navbar-element">
                                Places
                            </a>
                            <a href="#" className="navbar-element navbar-menu-link">
                                More
                                <DownArrow style={{fill: "#fff"}}></DownArrow>

                                <NavbarMenu />
                            </a>
                            <a href="#" className="navbar-element accent">Login</a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}