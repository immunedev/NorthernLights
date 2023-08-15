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

  const handleChangeInput = (e) => {
    let value = parseInt(e.target.value);

    if (value < 0) value = 0;

    if (e.target.name == "adultGuests") {
      setGuestCount(parseInt(e.target.value));
    } else if (e.target.name == "smallGuests") {
      setChildrenCount(parseInt(e.target.value));
    }
  }

  const changeGuestCount = ({adult, children}) => {
    if (adult == undefined) adult = guestCount;
    if (children == undefined) children = childrenCount;

    if (adult < 0) adult = 0;
    if (children < 0) children = 0;

    setGuestCount(adult);
    setChildrenCount(children);
  }


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


  useEffect(() => {
    const totalGuests = (guestCount + childrenCount) || 0;

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
      <div className="icon-help">
        <ProfileIcon className="guest-icon" />
        <DownArrow className={classNames("down-arrow", { flip: open })} />
      </div>

    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
    {/* To na dole zostawiam bo funkcjonuje dobrze tylko trzeba zaimplementowac nowy design :>*/}
    {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}


      <div ref={menuRef} className={`menu-container-guest ${open ? "active" : ""}`}>
        <span>Adults</span>
        <div className="menu-guest-controls">
          <input type="number" value={guestCount} onChange={handleChangeInput} max={9} name="adultGuests" className="menu-guest-control menu-guest-control-count"></input>
          <button className="menu-guest-control menu-guest-control-sub" onClick={() => changeGuestCount({adult: guestCount - 1})}>-</button>
          <button className="menu-guest-control menu-guest-control-add" onClick={() => changeGuestCount({ adult: guestCount + 1 })}>+</button>
        </div>

        <span>Children</span>
        <div className="menu-guest-controls">
          <input type="number" value={childrenCount} onChange={handleChangeInput} max={9} name="smallGuests" className="menu-guest-control menu-guest-control-count"></input>
          <button className="menu-guest-control menu-guest-control-sub" onClick={() => changeGuestCount({ children: childrenCount - 1 })}>-</button>
          <button className="menu-guest-control menu-guest-control-add" onClick={() => changeGuestCount({ children: childrenCount + 1 })}>+</button>
        </div>
      </div>
    </div>
  );
}