import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Navigation from '../navigation'
import axios from "axios";
import { useNavigate } from "react-router-dom";

// For exporting to individual-event
let eventId;

export default function ViewEvent() {
  const navigate = useNavigate();

  // Status
  const [status,setStatus]=useState('Loading');

  // offers
  const [offers, setOffers] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/api/v1/offerings`).then((res) => {
      if (res.data.status === "success") {
        if(res.data.data.length){
          setStatus("Available Events");
          setOffers(res.data.data);
        }
        else setStatus("Events not available");
      }
    });
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="announce-title-div">
        <div className="family-master">
          <h1>{status}</h1>
        </div>
      </div>
      <hr />
      <div className={`famili-members-div transactions ${offers.length?'':'hidden'}`}>
        <div className="heading-div">
          <div className="public-spons-slno">S.No</div>
          <div className="public-spons-date">Date</div>
          <div className="public-spons-event">Event name</div>
          <div className="public-spons-amt">Amount</div>
        </div>
        {offers.map((event, index) => {
          const { name, festDate, amount,id } = event;
          return (
            <div className="member-details-div" key={index} onClick={()=>eventId=id}>
              <div className="public-spons-slno">{index}</div>
              <div className="public-spons-date">{festDate}</div>
              <div className="public-spons-event">{name}</div>
              <div className="public-spons-amt">{amount}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export {eventId};