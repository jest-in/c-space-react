import React from 'react'
import { useState } from 'react';
import Navigation from './navigation';

import axios from 'axios';

export default function AddAnnounce() {

    // Announcement state
    const [announcement,setAnnouncement]=useState('');

    // Input saver
    function announcementDetailsSaver(event){
        console.log('Inputed value:',event.target.value);
        setAnnouncement(event.target.value);
    }

    // Publish button handler
    function publishButton(){
        // code block
        if(announcement){
          const data = {
            announcement: announcement,
          };
          axios
            .post("http://localhost:5000/api/v1/announce", data, {
              withCredentials: true,
            })
            .then((res) => {
              console.log(res.data.status);
            });
        }
    }

  return (
    <div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Add Announcement</h1>
    </div>
  </div>
  <hr />
  <div className="compose-announcement-div">
    <div className="add-announce-div">
      <div className="compose-announce-sub1">
        <div className="add-announce-content-div">
          <h1>Compose Announcement</h1>
          <textarea className="address-input announce-input" cols={13} rows={8} autofocus defaultValue={""} onChange={(event)=>announcementDetailsSaver(event)} />
          <label className="add-family-error" htmlFor="error">
            This field is required
          </label>
        </div>
      </div>
      <div className="compose-announce-sub2">
        <div className="announce-type-entry-div">
          <h1>Select Type</h1>
          <select name="announce-type" id="announce-type">
            <option value="private">Private</option>
            <option value="public">Public</option>
          </select>
          <label className="add-family-error" htmlFor="error">
            This field is required
          </label>
        </div>
      </div>
    </div>
  </div>
  <div className="publish-btn-div">
    <button onClick={()=>publishButton()}>Publish</button>
  </div>
</div>

  );
}
