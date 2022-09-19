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

  // Sponsors
  const [sponsors,setSponsors]=useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/offerings/${eventId}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setStatus("Event Details");
          setEvent(res.data.data);
          eventAmount = res.data.data.amount;
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
      axios
        .get(`http://localhost:5000/api/v1/offerings/${eventId}/sponsors`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "success") {
            const result = res.data.data;
            console.log("Sponsors Data:", result);
            setSponsors(result);
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
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
        <div
          className={`family-entries ${
            status !== "Event Details" ? "hidden" : ""
          }`}
        >
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
      <div
        className={`create-led-btn-div ${
          status !== "Event Details" ? "hidden" : ""
        }`}
      >
        <button
          className="create-led-btn add-payment-btn"
          onClick={() => navigate("/sponsors")}
        >
          <h1>Add Payment</h1>
        </button>
      </div>
      <hr
        className={`event-details-hr ${
          status !== "Event Details" ? "hidden" : ""
        }`}
      />
      <div className={`title-div ${sponsors.length ? "" : "hidden"}`}>
        <div className="family-master regestries-person-head">
          <h1>Sponsors</h1>
        </div>
        <div className="search-div">
          <button class="sponsors-download-list" >Download List</button>
        </div>
      </div>
      <hr className={sponsors.length?'':'hidden'} />
      <div className={`famili-members-div transactions event-details-sponsers ${sponsors.length?'':'hidden'}`}>
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Name</div>
          {/* <div className="mar-bride-name">Family Name</div> */}
          <div className="mar-celebrant">Description</div>
          <div className="mar-date">Date</div>
        </div>
        {
          sponsors.map((sponsor,index)=>{
            const {baptismName,familyName,description,paidAt}=sponsor;
            return (
              <div className="member-details-div" key={index+1}>
                <div className="mar-slno">{index+1}</div>
                <div className="mar-groom-name">{baptismName?baptismName:'-'}</div>
                {/* <div className="mar-bride-name">{familyName}</div> */}
                <div className="mar-celebrant">{description?description:'-'}</div>
                <div className="mar-date">{paidAt?paidAt.split("T")[0]:'-'}</div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}
export {eventId,eventAmount};