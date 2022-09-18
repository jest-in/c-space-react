import React from 'react'
import { useState } from 'react'
import Navigation from '../navigation'
import axios from "axios";

export default function NewAdmin() {
  // inputs
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Error
  const [nameError, setNameError] = useState("hidden");
  const [phoneNumberError, setPhoneNumberError] = useState("hidden");

  // Input handler
  function inputHandler(event) {
    const {name,value}=event.target;
    console.log("Inputted");
    if(name==='name'){
      setName(value);
      value?setNameError('hidden'):setNameError('');
    }
    if (name === "phoneNumber") {
      setPhoneNumber(value);
      value ? setPhoneNumberError("hidden") : setPhoneNumberError("");
    }
  }

  // submit button
  function submitButton() {
    if(!name||!phoneNumber){
      if (!name) {
        setNameError("");
      }
      if (!phoneNumber) {
        setPhoneNumberError("");
      } 
      return;
    }
    axios
      .post(
        `http://localhost:5000/api/v1/users/signup/admin`,
        {
          name: name,
          phoneNumber: phoneNumber,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.status);
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  // submit button
  function blockButton() {
    axios
      .get(`http://localhost:5000/api/v1/users/signup/admin`)
      .then((res) => {
        if (res.data.status === "success") {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  return (
    <div className="container-family">
      <div className="announce-title-div">
        <div className="family-master">
          <h1>New admin data</h1>
        </div>
      </div>
      <hr />
      <div className="compose-announcement-div">
        <div className="family-details-div">
          <div className="payment-entries">
            <div className="inner-div-1 payment-inner-div-1">
              <div className="house-name-div">
                <h1>Name</h1>
                <input className="house-name-input" name='name' type="text" onChange={(event)=>inputHandler(event)}/>
                <label className={`add-family-error ${nameError}`} htmlFor="error">
                  This field is required
                </label>
              </div>
              <div className="address-div">
                <h1>Phone number</h1>
                <input className="house-name-input" name='phoneNumber' type="text" onChange={(event)=>inputHandler(event)} />
                <label className={`add-family-error ${phoneNumberError}`} htmlFor="error">
                  This field is required
                </label>
              </div>
              <div className="address-div">
                <button className="super-admin-submit" onClick={()=>submitButton()}>Submit</button>
              </div>
            </div>
            <div className="inner-div-2 payment-inner-div-2">
              <div className="houseno-div">
                <button className="super-admin-submit block-admin" onClick={()=>blockButton()}>
                  Block current admin
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
