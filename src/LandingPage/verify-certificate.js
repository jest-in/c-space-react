import React from 'react'
import { useState } from 'react';
import Logo from '../Assets/logo';
import axios from "axios";

export default function VerifyCertificate() {
  // input
  const [inputToken,setInputToken]=useState('');
  const [response,setResponse]=useState('');

  const {verified,setVerified}=useState('hidden');
  const [ invalidError, setInvalidError ]= useState("hidden");

  // Function for proceed button
  function proceedButton(){
    setResponse('');
    console.log('Input token:',inputToken);
    if(inputToken){
      axios
        .post(`http://localhost:5000/api/v1/verify-sign`, {
          sign:inputToken,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "success") {
            // if token is verified successfully
            setResponse(res.data.data)
            alert('This certificate is valid')
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
        <textarea name="token" id="token" cols={60} rows={10} className="certificate-token" value={inputToken} onChange={(event)=>setInputToken(event.target.value)} />
        <input onClick={()=>proceedButton()} type="button" defaultValue="Proceed" id="otp-btn-proceed" />
      </div>
    </div>
    <div className="otp-div verify-token-entry">
      <div className="otp-forms">
        <label htmlFor="uid">Description</label>
        <p className="certificate-verify-desc">
          {response.message?response.message:''}
        </p>
        <label htmlFor="uid" className={`certificate-note ${response.note?'':'hidden'}`}>Note</label>
        <p className="certificate-verify-desc">
          {response.note?response.note:''}
        </p>
      </div>
    </div>
  </div>
</div>

  );
}
