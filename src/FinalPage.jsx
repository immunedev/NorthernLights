import React, { useState, useEffect  } from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";
import { ReactComponent as PolandFlag } from "./assets/polandflag.svg";
import { ReactComponent as NorwayFlag } from "./assets/norwayflag.svg";
import { ReactComponent as HotelIcon } from "./assets/hotel.svg";
import { ReactComponent as TripIcon } from "./assets/trip.svg";

export default function FinalPage({ tripData, onBackClick }) {
  const [showPopup, setShowPopup] = useState(false);
  const [thankYouPopup, setThankYouPopup] = useState(false);
  const [formValid, setFormValid] = useState(false); 
  const [time, setTime] = useState(15);
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    specialWish: "",
  });

  const toggleThankYouPopup = () => {
    setThankYouPopup(!thankYouPopup);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    let intervalId;

    if (thankYouPopup) {
      setTime(15); 

      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000); 
    }

    return () => {
      clearInterval(intervalId); 
    };
  }, [thankYouPopup]);

  useEffect(() => {
    if (time === 0) {
      window.location.reload();
    }
  }, [time]);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

 
  const validateForm = () => {
    const { name, surname, email, phone } = formData;
  
    const isFormValid = name !== "" && surname !== "" && email !== "" && phone !== "";
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailPattern.test(email);
  
    const phonePattern = /^[0-9]+$/;
    const isPhoneValid = phonePattern.test(phone) && phone.length >= 7; 
  
    setFormValid(isFormValid && isEmailValid && isPhoneValid);
    console.log(formValid)
  };

  const handlePayClick = () => {
    setShowPopup(true);
  };

 
  React.useEffect(() => {
    validateForm();
  }, [formData]);




  return (
    <div className={`final-page-container ${showPopup ? "blurred" : ""}`}>
      {/* <BackIcon className="back-arrow" onClick={onBackClick}/> */}
      <div className="final-page-box">
        <form className="final-page-left" id='test'>

          <div className="final-page-form-cell">
            <label className="form-label">Name</label>
            <input
                type="text"
                className="text-input"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
            />
          </div>

          <div className="final-page-form-cell">
            <label className="form-label">Surname</label>
            <input
                type="text"
                className="text-input"
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
            />
          </div>

          <div className="final-page-form-cell">
            <label className="form-label">Phone</label>
            <input
                type="phone"
                className="text-input"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
            />
          </div>

          <div className="final-page-form-cell">
            <label className="form-label">E-mail</label>
            <input
                type="email"
                className="text-input"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
            />
          </div>

          <div className="final-page-form-cell">
          <label className="form-label">Special wish</label>
            <input
                type="text"
                className="text-input-special"
                name="specialWish"
                value={formData.specialWish}
                onChange={handleInputChange}
            />
          </div>
        </form>
        <div className="final-page-right"> 
          <h1 className="final-h1">Summary</h1>
          <div className="final-flight-row">
            <div className="final-flight-cell">
              <PolandFlag className='flag'></PolandFlag>
              <h2 className="destination">Pol to Nor</h2>
            </div>
            <div className="final-flight-cell">
              <h2 className="destination">25.07.2023</h2>
            </div>
          </div>
          <h3 className="details">2 x Adults, Baggage included</h3>
          <div className="divide-line"></div>
          <div className="final-flight-row">
            <div className="final-flight-cell">
              <NorwayFlag className='flag'></NorwayFlag>
              <h2 className="destination">Nor to Pol</h2>
            </div>
            <div className="final-flight-cell">
              <h2 className="destination">7.08.2023</h2>
            </div>
          </div>
          <h3 className="details">2 x Adults, Baggage included</h3>
          <div className="divide-line"></div>
          <div className="final-icon-cell">
            <HotelIcon className='icon'></HotelIcon>
            <h2 className="icon-text">Hilton Oslo, Superior room, 13 nights</h2>
          </div>
          <div className="final-icon-cell">
            <TripIcon className='icon'></TripIcon>
            <h2 className="icon-text">Aurora lights in norwegian fyords</h2>
          </div>
          <div className="final-icon-cell">
            <PriceIcon className='icon'></PriceIcon>
            <h2 className="icon-text">1299$</h2>
          </div>
          <button 
            className={`button-summary ${formValid ? "" : "inactive"}`}
            onClick={formValid ? handlePayClick : undefined}
            >
                Pay
          </button>
        </div>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Payment Information</h2>
            <p>Name: {formData.name}</p>
            <p>Surname: {formData.surname}</p>
            <p>E-mail: {formData.email}</p>
            <p>Phone: {formData.phone}</p>
            <p>Special Wish: {formData.specialWish}</p>
            <button onClick={toggleThankYouPopup} className="send-email-button">Send E-mail with informations</button>
          </div>
        </div>
      )}

      {thankYouPopup && (
          <div className="popup">
            <div className="popup-content">
              <h2>Thank you for trust!</h2>
              <h3>Folow instructions in e-mail</h3>
              <h4 className="countdown">page will refresh in {time} seconds</h4>
            </div>
          </div>
        )}




    </div>



        
    
  );
}