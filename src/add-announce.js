import React from 'react'
import { useState } from 'react';
import Navigation from './navigation';

import axios from 'axios';

export default function AddAnnounce() {

  // Select tag value
  const [selectValue,setSelectValue]=useState('')

    // Required field errors
    const [textAreaError,setTextAreaError]=useState('hidden');
    const [typeError, setTypeError] = useState("hidden");

    // Announcement state
    const [announcement,setAnnouncement]=useState('');

    // Input saver
    function announcementDetailsSaver(event){
        const {value,name}=event.target;
        console.log('Inputed value:',value);
        setAnnouncement(value);
        if(name==='announce'&&value==='')
        setTextAreaError('')
        else
        if (name === "announce" && value !== ""){
          setTextAreaError('hidden');
        }
        if (name === "announce-type"&&value!=='nothing'){
          setTypeError('hidden')
        }
        if (name === "announce-type") setSelectValue(value);
    }

    // Publish button handler
    function publishButton(){

      if(!selectValue)
      setTypeError('');
        // code block
        if(announcement&&selectValue){
          const data = {
            announcement: announcement,
            visibility:selectValue,
          };
          console.log('Post Data:',data);
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
      <Navigation />
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
              <textarea
                onBlur={(event) => {
                  if (event.target.value === "") setTextAreaError("");
                }}
                name="announce"
                className="address-input announce-input"
                cols={13}
                rows={8}
                autoFocus
                defaultValue={""}
                onChange={(event) => announcementDetailsSaver(event)}
              />
              <label
                className={`add-family-error ${
                  textAreaError ? textAreaError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
          </div>
          <div className="compose-announce-sub2">
            <div className="announce-type-entry-div">
              <h1>Select Type</h1>
              <select
                onBlur={(event) => {
                  if (event.target.value === "nothing") setTypeError("");
                }}
                value={selectValue ? selectValue : "nothing"}
                name="announce-type"
                id="announce-type"
                onChange={(event) => announcementDetailsSaver(event)}
              >
                <option className={selectValue ? "hidden" : ""} value="nothing">
                  Nothing
                </option>
                <option value="private">Private</option>
                <option value="public">Public</option>
              </select>
              <label
                className={`add-family-error ${typeError ? typeError : ""}`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="publish-btn-div">
        <button onClick={() => publishButton()}>Publish</button>
      </div>
    </div>
  );
}