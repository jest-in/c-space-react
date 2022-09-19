import React from 'react'
import { useState } from 'react';
import Logo from '../Assets/logo';
import axios from "axios";

export default function VerifyCertificate() {
  // input
  const [inputToken,setInputToken]=useState({});
  const [response,setResponse]=useState('');

  const {verified,setVerified}=useState('hidden');
  const [ invalidError, setInvalidError ]= useState("hidden");

  // Function for proceed button
  function proceedButton(){
    setResponse('');
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
    <div className="container-forgot-password verify-container">
  <header>
    <div className="nav-div">
      <img className="forgot-logo" src="/logo.svg" alt="Logo" />
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
        <label htmlFor="uid">Enter Signature</label>
        <textarea name="token" id="token" cols={60} rows={10} className="certificate-token" defaultValue={""} />
        <input type="button" defaultValue="Proceed" id="otp-btn-proceed" />
      </div>
    </div>
    <div className="otp-div verify-token-entry">
      <div className="otp-forms">
        <label htmlFor="uid">Description</label>
        <p className="certificate-verify-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error obcaecati odit magnam earum, fugit sequi
          cum veritatis fuga magni quia soluta minima sed
          illum optio cupiditate hic nulla fugiat natus.
        </p>
        <label htmlFor="uid" className="certificate-note">Note</label>
        <p className="certificate-verify-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Error obcaecati odit magnam earum, fugit sequi
          cum veritatis fuga magni quia soluta minima sed
          illum optio cupiditate hic nulla fugiat natus.
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
