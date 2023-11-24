import { useState, useEffect, forwardRef, useRef } from "react";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";
import { ReactComponent as HotelIcon } from "./assets/hotel.svg";
import { ReactComponent as CarIcon } from "./assets/car.svg";

import classNames from "classnames"
import AuthModal from "./AuthModal";

function NavbarMenuElement({name, desc, icon}) {
    return (
        <div className="navbar-menu-element">
            <div className="navbar-menu-element-icon">
                {icon}
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

const NavbarMenu = forwardRef(({open}, ref) => {
    return (
        <div className={classNames("navbar-menu", {active: open})} ref={ref}>
            <NavbarMenuElement name="Car rentals" desc="Learn about car rentals and their availability" icon={<CarIcon />} />
            <NavbarMenuElement name="Hotels" desc="Learn more about the places you will stay at" icon={<HotelIcon />} />
        </div>
    )
});

NavbarMenu.displayName = "navbarMenu";


export default function Header() {
    const [ navMenuOpen, setNavMenuOpen ] = useState(false);
    const navMenuRef = useRef(null);
    
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navMenuOpen && navMenuRef.current && !navMenuRef.current.contains(e.target)) {
                setNavMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return(
        <div className="logo-container">
            <div className="navbar">
                <div className="navbar-logo">
                    <h1 className="logo-text">NorthernLights</h1>

                    <div className="navbar-content">
                        <div className="navbar-elements">
                            <a href="/demos/nl/" className="navbar-element">
                                Explore
                            </a>
                            <a href="/demos/nl/faq" className="navbar-element">
                                FAQ's
                            </a>
                            <a href="#" className="navbar-element navbar-menu-link" onClick={() => setNavMenuOpen(!navMenuOpen)}>
                                More
                                <DownArrow style={{fill: "#fff"}}></DownArrow>
                                <NavbarMenu ref={navMenuRef} open={navMenuOpen} />
                            </a>
                            <AuthModal />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}