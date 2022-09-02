import React, { useEffect } from 'react'
import { useState } from 'react';
// import DeleteIcon from './Assets/DeleteIcon';
// import EditIcon from './Assets/EditIcon';
import Navigation from './navigation';

import axios from 'axios';

export default function AllAnnounce() {

  // Announcements
  const [announcements,setAnnouncements]=useState([]);

  useEffect(()=>{
    // Change Announcement state after retrieving data from server
    axios.get("http://localhost:5000/api/v1/announce").then((res)=>{
      if(res.data.status==='success'){
      setAnnouncements(res.data.announcements);
      }
    });
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="announce-title-div">
        <div className="family-master">
          <h1>{announcements.length ? "" : "No "}Announcements</h1>
        </div>
      </div>
      <hr />
      <div
        className={`famili-members-div transactions announcement-list-div ${
          announcements.length ? "" : "hidden"
        }`}
      >
        <div className="heading-div">
          <div className="announce-slno">S.No</div>
          <div className="announce-subject">Announcement</div>
          <div className="announce-date">Date</div>
          <div className="announce-icons" />
        </div>
        {announcements.map((announcementData, index) => {
          const { announcement, date } = announcementData;
          return (
            <div className="member-details-div" key={index}>
              <div className="announce-slno">{index + 1}</div>
              <div className="announce-subject">{announcement}</div>
              <div className="announce-date">{date?date.split('T')[0]:'-'}</div>
              <div className="announce-icons">
                {/* <DeleteIcon />  */}
                <br />
                {/* <EditIcon /> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
