import React, { useEffect } from 'react'
import { useState } from 'react';
import DeleteIcon from './Assets/DeleteIcon';
import EditIcon from './Assets/EditIcon';
import Navigation from './navigation';

import axios from 'axios';
import { useNavigate } from "react-router-dom";

let editAnnouncement,editId,editVisibility;

export default function AllAnnounce() {

  const navigate=useNavigate();

  // Announcements
  const [announcements,setAnnouncements]=useState([]);

  useEffect(()=>{
    // Change Announcement state after retrieving data from server
    axios
      .get("http://localhost:5000/api/v1/announce", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          console.log("Announcements:", res.data.announcements);
          setAnnouncements(res.data.announcements);
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  },[])

  function deleteHandler(index){
    const deletingAnnouncement=announcements[index]._id;
    axios
      .delete(`http://localhost:5000/api/v1/announce/${deletingAnnouncement}`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success")
          setAnnouncements((prev) =>
            prev.filter((_, prevIndex) => prevIndex !== index)
          );
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  function editHandler(announcement){
    console.log('Edit clicked');
    editAnnouncement=announcement.announcement;
    editId=announcement._id;
    console.log('Announcement Id:',editId);
    editVisibility=announcement.visibility;
    navigate("/add-announce", {
      state:{
        announcementId
      },
    });
  }

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
              <div className="announce-date">
                {date ? date.split("T")[0] : "-"}
              </div>
              <div className="announce-icons">
                <h2 onClick={() => deleteHandler(index)}>Delete</h2>
                {/* <DeleteIcon onClick={() => deleteHandler(index)} /> */}
                <br />
                {/* <EditIcon onClick={() => editHandler(announcementData)} /> */}
                <h2 onClick={() => editHandler(announcementData)}>Edit</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export {editAnnouncement,editId,editVisibility};