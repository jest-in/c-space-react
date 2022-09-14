import React from 'react'
import Navigation from '../navigation'

export default function createEvent() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Create Event</h1>
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
            <h1>Description</h1>
            <textarea className="address-input" cols={13} rows={4} defaultValue={""} />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="inner-div-2 payment-inner-div-2">
          <div className="houseno-div">
            <h1>Date</h1>
            <input className="house-no-input" type="date" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
          <div className="ward-div">
            <h1>Amount</h1>
            <input className="house-no-input" type="text" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="publish-btn-div">
    <button href="#">Create</button>
  </div>
</div>

  )
}
