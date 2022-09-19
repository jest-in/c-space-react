import React from 'react'
import { useState } from 'react';
import Navigation from './navigation';
import axios from 'axios';
import {editAnnouncement,editId,editVisibility} from './all-announce';
import {useNavigate,useLocation } from 'react-router-dom';

export default function AddAnnounce() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate=useNavigate();

  // Select tag value
  const [selectValue,setSelectValue]=useState(location.state?location.state.visibility:'')

    // Required field errors
    const [textAreaError,setTextAreaError]=useState('hidden');
    const [typeError, setTypeError] = useState("hidden");

    // Announcement state
    const [announcement,setAnnouncement]=useState(location.state?location.state.announcement:'');

    // Input saver
    function announcementDetailsSaver(event){
        const {value,name}=event.target;
        if (name === "announce"){
          setAnnouncement(value);
          if(value)
          setTextAreaError("hidden");
          else setTextAreaError("");
          return
        }
        if(name === "announce-type"){
          if(value!=='nothing'){
            setSelectValue(value);
            setTypeError('hidden')
          }
          else setTypeError('');
        }
    }

    // Publish button handler
    function publishButton(){
        if(announcement&&selectValue){
            const data = {
              announcement: announcement,
              visibility: selectValue,
            };
          if (!location.state) {
            axios
              .post("http://localhost:5000/api/v1/announce", data, {
                withCredentials: true,
              })
              .then((res) => {
                if (res.data.status === "success")
                  window.location.reload(false);
              })
              .catch((err) => {
                // Error
                alert(`${err.response.data.message}`);
              });
          } else {
            axios
              .patch(
                `http://localhost:5000/api/v1/announce/${location.state.announcementId}`,
                data,
                {
                  withCredentials: true,
                }
              )
              .then((res) => {
                if (res.data.status === "success") navigate("/all-announce");
              })
              .catch((err) => {
                // Error
                alert(`${err.response.data.message}`);
              });
          }
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
                className="address-input announce-input"
                cols={13}
                rows={8}
                autoFocus
                value={announcement}
                name="announce"
                onBlur={(event) => announcementDetailsSaver(event)}
                onChange={(event) => announcementDetailsSaver(event)}
              />
              <label
                className={`add-family-error ${textAreaError}`}
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
                name="announce-type"
                id="announce-type"
                value={selectValue ? selectValue : "nothing"}
                onChange={(event) => announcementDetailsSaver(event)}
                onBlur={(event) => announcementDetailsSaver(event)}
              >
                <option
                  className={`${typeError ? "hidden" : ""} ${editId?'hidden':''}`}
                  value="nothing"
                >
                  nothing selected
                </option>
                <option value="private">Private</option>
                <option value="public">Public</option>
              </select>
              <label
                className={`add-family-error ${typeError}`}
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
