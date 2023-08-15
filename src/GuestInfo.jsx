import { useState, useEffect, useRef } from "react";
import { ReactComponent as ProfileIcon } from "./assets/profile.svg";
import { ReactComponent as DownArrow } from "./assets/downarrow.svg";
import { ReactComponent as PlusIcon } from "./assets/plus.svg";
import { ReactComponent as MinusIcon } from "./assets/minus.svg";
import classNames from "classnames";

export default function GuestForm({ placeholder }) {
  const [value, setValue] = useState(placeholder);
  const [open, setOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const [childrenCount, setChildrenCount] = useState(0);

  // Create a ref to store the reference to the guest menu container
  const inputRef = useRef(null);
  const menuRef = useRef(null);

  const handleOpen = (e) => {
    if (menuRef.current.contains(e.target)) return;

    setOpen((prevOpen) => !prevOpen);
  };

  // Close the guest menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setOpen(false);
      }
    };


    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handlePlusClick = () => {
    setGuestCount((prevCount) => prevCount + 1);
  };

  const handleMinusClick = () => {
    if (guestCount > 0) {
      setGuestCount((prevCount) => prevCount - 1);
    }
  };

  const handlePlusClickChildren = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleMinusClickChildren = () => {
    if (childrenCount > 0) {
      setChildrenCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    const totalGuests = guestCount + childrenCount;

    if (totalGuests === 0) {
      setValue(placeholder);
    } else {
      setValue(`${totalGuests} Guest${totalGuests !== 1 ? "s" : ""}`);
    }
  }, [guestCount, childrenCount, placeholder]);

  return (
    <div ref={inputRef} className="guest-picker-form" onClick={handleOpen}>
      <div className={"date-text " + (value == placeholder ? "placeholder" : "")}>
        {value}
      </div>
      <div className="icon-help-guest">
        <ProfileIcon className="guest-icon" />
        <DownArrow className={classNames("down-arrow", { flip: open })} />
      </div>

    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    {/* To na dole zostawiam bo funkcjonuje dobrze tylko trzeba zaimplementowac nowy design :>*/}
    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}


      <div ref={menuRef} className={`menu-container-guest ${open ? "active" : ""}`}>
        <div className="guest-menu">
          <div className="guest-menu-grid">
            <div className="guest-menu-content">
              <div className="guest-menu-content-row">
                <div className="guest-menu-type">Adults</div>
                <div className="guest-buttons">
                  <div className="guest-menu-number">{guestCount}</div>
                  <button className="guest-menu-button-plus">
                    <PlusIcon className="plus-icon" onClick={handlePlusClick} />
                  </button>
                  <button className="guest-menu-button-minus">
                    <MinusIcon className="minus-icon" onClick={handleMinusClick} />
                  </button>
                </div>
              </div>
              <div className="guest-menu-content-row">
                <div className="guest-menu-type">Children</div>
                <div className="guest-buttons">
                  <div className="guest-menu-number">{childrenCount}</div>
                  <button className="guest-menu-button-plus">
                    <PlusIcon className="plus-icon" onClick={handlePlusClickChildren} />
                  </button>
                  <button className="guest-menu-button-minus">
                    <MinusIcon className="minus-icon" onClick={handleMinusClickChildren} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}