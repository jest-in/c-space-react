import React from 'react'
import Navigation from '../navigation'

export default function ViewEvent() {
  return (
    <div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Available Events</h1>
    </div>
  </div>
  <hr />
  <div className="famili-members-div transactions">
    <div className="heading-div">
      <div className="public-spons-slno">S.No</div>
      <div className="public-spons-date">Date</div>
      <div className="public-spons-event">Event name</div>
      <div className="public-spons-amt">Amount</div>
    </div>
    <div className="member-details-div">
      <div className="public-spons-slno">1</div>
      <div className="public-spons-date">1-4-2023</div>
      <div className="public-spons-event">Novena</div>
      <div className="public-spons-amt">5520</div>
    </div>
    <div className="member-details-div">
      <div className="public-spons-slno">2</div>
      <div className="public-spons-date">1-4-2023</div>
      <div className="public-spons-event">Novena</div>
      <div className="public-spons-amt">5520</div>
    </div>
    <div className="member-details-div">
      <div className="public-spons-slno">3</div>
      <div className="public-spons-date">1-4-2023</div>
      <div className="public-spons-event">Novena</div>
      <div className="public-spons-amt">5520</div>
    </div>
    <div className="member-details-div">
      <div className="public-spons-slno">4</div>
      <div className="public-spons-date">1-4-2023</div>
      <div className="public-spons-event">Novena</div>
      <div className="public-spons-amt">5520</div>
    </div>
  </div>
</div>

  )
}
