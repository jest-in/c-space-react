import React from 'react'
import Navigation from '../navigation'

export default function NewAdmin() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Nwe admin data</h1>
    </div>
  </div>
  <hr />
  <div className="compose-announcement-div">
    <div className="family-details-div">
      <div className="payment-entries">
        <div className="inner-div-1 payment-inner-div-1">
          <div className="house-name-div">
            <h1>Name</h1>
            <input className="house-name-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="address-div">
            <h1>Phone number</h1>
            <input className="house-name-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="address-div">
            <button className="super-admin-submit">
              Submit
            </button>
          </div>
        </div>
        <div className="inner-div-2 payment-inner-div-2">
          <div className="houseno-div">
            <button className="super-admin-submit block-admin">
              Block current admin
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
