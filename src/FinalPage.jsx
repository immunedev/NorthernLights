import React, { useState, useEffect  } from "react";
import { ReactComponent as LocationIcon } from "./assets/location.svg";
import { ReactComponent as DateIcon } from "./assets/date.svg";
import { ReactComponent as PriceIcon } from "./assets/price.svg";
import { ReactComponent as BackIcon } from "./assets/backarrow.svg";

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
    setFormValid(isFormValid);
  };

  const handlePayClick = () => {
    setShowPopup(true);
  };

 
  React.useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <div className={`final-page-container ${showPopup ? "blurred" : ""}`}>
      <div className="final-page-box">
        <button onClick={onBackClick} className="back-button">
          <BackIcon className="back-arrow" />
        </button>
        <div className="final-page-left-col">
          {/* <div className="final-page-title">Contact information</div> */}
          <div className="final-page-subtitle final-page-subtitle-left">Name</div>
          <input
            type="text"
            className="text-input"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="final-page-subtitle final-page-subtitle-left">Surname</div>
          <input
            type="text"
            className="text-input"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
          <div className="final-page-subtitle final-page-subtitle-left">E-mail</div>
          <input
            type="text"
            className="text-input"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="final-page-subtitle final-page-subtitle-left">Phone</div>
          <input
            type="text"
            className="text-input"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
          <div className="final-page-subtitle final-page-subtitle-left">Special wish</div>
          <input
            type="text"
            className="text-input"
            name="specialWish"
            value={formData.specialWish}
            onChange={handleInputChange}
          />
        </div>
        <div className="final-page-right-col">
          <div className="final-page-title">Summary</div>
          <div className="photo-div">
            <div className="summary-photo">Test</div>
          </div>
          <div className="card-icons-summary">
            <div className="card-icon-summary">
              <LocationIcon />
              <div className="card-icon-text-summary">{tripData.location}</div>
            </div>
            <div className="card-icon-summary">
              <DateIcon />
              <div className="card-icon-text-summary">{tripData.length}</div>
            </div>
            {/* <div className="card-icon-summary">
              <PriceIcon />
              <div className="card-icon-text-summary">{tripData.price}</div>
            </div> */}
          </div>
          <div className="price-summary-div">
            <div className="price-summary">Total: {tripData.price}</div>
          </div>
          <div className="price-summary-button-div">
            <div
              className={`button-summary ${formValid ? "" : "inactive"}`}
              onClick={formValid ? handlePayClick : undefined}
            >
              Pay
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
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


      {/* Thank you Popup */}
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