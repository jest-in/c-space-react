import React from 'react'
import { useState } from 'react';
import Logo from '../Assets/logo';
import axios from "axios";

export default function VerifyCertificate() {
  // input
  const [inputToken,setInputToken]=useState({});

  // Function for proceed button
  function proceedButton(){
    console.log('Input token:',inputToken);
    if(inputToken.sign){
      axios
        .post(`http://localhost:5000/api/v1/verify-sign`, inputToken, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "success") {
            // if token is verified successfully
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
        });
    }
  }

  return (
    <div className="forgot-password-body">
      <div className="container-forgot-password verify-container">
        <header>
          <div className="nav-div">
            <div className="forgot-logo">
              <Logo/>
            </div>
          </div>
        </header>
        <div className="forgot-head-div">
          <div className="forgot-head">
            <h1>Verify Certificate</h1>
          </div>
          <hr />
        </div>
        <div className="verify-content-div">
          <div className="otp-div verify-token-entry">
            <div className="otp-forms">
              <label htmlFor="uid">Enter Token</label>
              <textarea
                name="sign"
                id="token"
                cols={30}
                rows={10}
                onChange={(event)=>{
                  const {name,value}=event.target;
                  setInputToken((prev)=>{
                    let data=prev;
                    data[name]=value;
                    return data;
                  })
                }}
                defaultValue={inputToken.sign}
              />
              <input onClick={()=>proceedButton()}
                type="button"
                defaultValue="Proceed"
                id="otp-btn-proceed"
              />
            </div>
          </div>
          <div className="otp-div new-pswrd-div verify-success-entries">
            <div className="otp-forms password-forms">
              <label htmlFor="uid">Issued To</label>
              <input type="text" id="userid" readOnly />
              <label htmlFor="otp" id="otp-label">
                Issued On
              </label>
              <input type="text" id="otp" readOnly />
              <label htmlFor="otp" id="otp-label">
                Issued For
              </label>
              <input type="text" id="otp" readOnly />
            </div>
          </div>
        </div>
        <div className="verify-status-div">
          <h1 className="verify-valid">Signature Verified</h1>
          <h1 className="verify-invalid">Invalid Certificate</h1>
        </div>
      </div>
    </div>
  );
}
