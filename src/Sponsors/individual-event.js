import React from "react";
import { useState, useEffect } from "react";
import Icon_Filter from "../Assets/Icon_Filter";
import Icon_Search from "../Assets/Icon_Search";
import Navigation from "../navigation";
import { eventId } from "./view-event";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// For exporting
let eventAmount;

export default function IndividualEvent() {
  const navigate = useNavigate();

  // status
  const [status, setStatus] = useState("Loading");

  // Event details
  const [event, setEvent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/offerings/${eventId}`)
      .then((res) => {
        if (res.data.status === "success") {
          setStatus("Event Details");
          setEvent(res.data.data);
          eventAmount = res.data.data.amount;
        }
      });
  }, []);

  return (
    <div className="container-family">
      <Navigation />
      <div className="announce-title-div">
        <div className="family-master">
          <h1>{status}</h1>
        </div>
      </div>
      <hr />
      <div className="event-details-div">
        <div className={`family-entries ${status !== "Event Details"?'hidden':''}`}>
          <div className="inner-div-1">
            <div className="house-name-div">
              <h1>Event name</h1>
              <h2>{event.name}</h2>
            </div>
            <div className="address-div">
              <h1>Description</h1>
              <h2>{event.description}</h2>
            </div>
          </div>
          <div className="inner-div-2">
            <div className="houseno-div">
              <h1>Date</h1>
              <h2>{event.festDate ? event.festDate.split("T")[0] : "-"}</h2>
            </div>
            <div className="ward-div">
              <h1>Amount</h1>
              <h2>{event.amount}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={`create-led-btn-div ${status !== "Event Details"?'hidden':''}`}>
        <button className="create-led-btn add-payment-btn" onClick={()=>navigate('/sponsors')}>
          <h1>Add Payment</h1>
        </button>
      </div>
      <hr className={`event-details-hr ${status !== "Event Details"?'hidden':''}`} />
      <div className="title-div">
        <div className="family-master">
          <h1>Sponsers</h1>
        </div>
        <div className="search-div">
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
        <div className="filter-div">
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div className="famili-members-div transactions event-details-sponsers">
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Name</div>
          <div className="mar-bride-name">Family Name</div>
          <div className="mar-celebrant">Description</div>
          <div className="mar-date">Date</div>
        </div>
        <div className="member-details-div">
          <div className="mar-slno">1</div>
          <div className="mar-groom-name">Andappan</div>
          <div className="mar-bride-name">Kundady</div>
          <div className="mar-celebrant">For Festival</div>
          <div className="mar-date">5-12-2021</div>
        </div>
        <div className="member-details-div">
          <div className="mar-slno">2</div>
          <div className="mar-groom-name">Fransis</div>
          <div className="mar-bride-name">Kottarathil</div>
          <div className="mar-celebrant">For Christmas</div>
          <div className="mar-date">25-04-2022</div>
        </div>
        <div className="member-details-div">
          <div className="mar-slno">3</div>
          <div className="mar-groom-name">Rosa</div>
          <div className="mar-bride-name">Madathil</div>
          <div className="mar-celebrant">For Easter</div>
          <div className="mar-date">18-08-2022</div>
        </div>
        <div className="member-details-div">
          <div className="mar-slno">4</div>
          <div className="mar-groom-name">Jestin George</div>
          <div className="mar-bride-name">Moolamattam</div>
          <div className="mar-celebrant">For Easter</div>
          <div className="mar-date">10-10-2022</div>
        </div>
      </div>
    </div>
  );
}
export {eventId,eventAmount};