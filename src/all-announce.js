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
    axios.get("http://localhost:5000/api/v1/announce").then((res)=>{
      if(res.data.status==='success'){
      setAnnouncements(res.data.announcements);
      }
    });
  },[])

  function deleteHandler(index){
    const deletingAnnouncement=announcements[index].id;
    axios.delete(`http://localhost:5000/api/v1/announce/${deletingAnnouncement}`).then((res)=>{
      if(res.data.status==='success')
      setAnnouncements((prev) => prev.filter((announcement, prevIndex)=>prevIndex!==index));
    });
  }

  function editHandler(announcement){
    editAnnouncement=announcement.announcement;
    editId=announcement.id;
    editVisibility=announcement.visibility;
    navigate('/add-announce');
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
              <div className="announce-date">{date?date.split('T')[0]:'-'}</div>
              <div className="announce-icons">
                <DeleteIcon onClick={()=>deleteHandler(index)} /> 
                <br />
                <EditIcon onClick={()=>editHandler(announcementData)} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export {editAnnouncement,editId,editVisibility};