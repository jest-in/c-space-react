import React from 'react'
import '../certificate-css/marriage-certificate.css'
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from "axios";

export default function MarriageCertificate() {
  // For id from the redirected page(marriage-registry page)
  const location=useLocation();
  const navigate=useLocation();

  // certificate template
  const [certificate,setCertificate]=useState('hidden');

  // details
  const [details,setDetails]=useState({});
  const [groomData, setGroomData] = useState({});
  const [brideData, setBrideData] = useState({});

  useEffect(()=>{
    // use location.state for dynamic generation of certificate!!!!!!!!!!!
    axios
      .get(
        `http://localhost:5000/api/v1/create-pdf/marriage/${"632532331ccb3f0ad8b42bee"}`
      )
      .then((res) => {
        const result = res.data.data;
        if (res.data.status === "success") {
          setDetails(result);
          setBrideData(result.brideData);
          setGroomData(result.groomData);
          setCertificate("");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
        navigate(-1);
      });
  },[])

  return (
    <div className={`main-body ${certificate}`} onClick={()=>window.print()}>
      <div className="main-page">
        <div className="sub-page">
          <div className="sub-page-head-div">
            <h1 className="sub-page-title">DIOCESE OF BELTHANGADY</h1>
            <h2 className="sub-page-subtitle">CERTIFICATE OF MARRIAGE</h2>
          </div>
          <div className="regno-div">
            <h1>Reg. No.</h1>
            <h2>163</h2>
          </div>
          <div className="certificate-content-div">
            <p>
              Certified that the marriage between <span>Mr. </span>
              <span>{details.groomName?details.groomName:'-'}</span> S/o <span>{groomData.father?groomData.father:'-'}</span> of the Parish of{" "}
              <span>St. Thomas Church Kanjal</span> and <span>{details.brideName?details.brideName:'-'}</span>{" "}
              D/o <span>{brideData.father?brideData.father:'-'}</span> of the Parish of{" "}
              <span>St. Thomas Church Kankanady</span> was blessed by{" "}
              <span>{details.celebrant?details.celebrant:'-'}</span> on <span>{details.marriageDate?details.marriageDate.split("T")[0]:'-'}</span> according to the
              Rites of the Catholic Church. This is the true extract of the
              Records kept here.
            </p>
          </div>
          <div className="credentials-div">
            <div className="place-date-div">
              <div className="date-div">
                <h1 className="name-title">
                  <span className="name-head">Date</span>
                  <span className="name-colon">:</span>
                </h1>
                <h2 className="place-name">10-10-2022</h2>
              </div>
              <div className="date-div">
                <h1 className="name-title">
                  <span className="name-head">Place</span>
                  <span className="name-colon">:</span>
                </h1>
                <h2 className="place-name">Kanjal</h2>
              </div>
            </div>
            <div className="seal-div">
              <h2 className="place-name">(Seal)</h2>
            </div>
            <div className="name-signature-div">
              <h2 className="person-name name-signature-head">
                Name &amp; Signature of the <br />
                Parish Priest
              </h2>
            </div>
          </div>
          <div className="digital-signature-div">
            <h1>This certificate is digitally signed</h1>
            <p className="digital-signature-content">
              {details.signature}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
