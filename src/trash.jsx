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