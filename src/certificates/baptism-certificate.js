import React, { useEffect, useState } from 'react'
import "../certificate-css/baptism-certificate.css";
import { useLocation } from "react-router-dom";
import axios from "axios";

export default function BaptismCertificate() {
  // For id from the redirected page(baptism-registry page)
  const location = useLocation();
  const navigate = useLocation();

  // certificate template
  const [certificate, setCertificate] = useState("hidden");

  // details
  const [details, setDetails] = useState({});
  const [godFather, setGodFather] = useState({});
  // const [godMother, setGodMother] = useState({});

  useEffect(() => {
    // use location.state for dynamic generation of certificate!!!!!!!!!!!
    axios
      .get(
        `http://localhost:5000/api/v1/create-pdf/baptism/${location.state}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        const result = res.data.data;
        console.log("Result:", result);
        if (res.data.status === "success") {
          setDetails(result);
          setGodFather(result.godFather);
          // setGodMother(result.godMother);
          setCertificate("");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
        navigate(-1);
      });
  }, []);

  return (
    <div className={`main-page ${certificate}`} onClick={() => window.print()}>
      <div className="sub-page">
        <div className="baptism-cer-head-div">
          <h1 className="sub-page-title">DIOCESE OF BELTHANGADY</h1>
          <h2 className="sub-page-subtitle">CERTIFICATE OF BAPTISM</h2>
        </div>
        <div className="regno-div">
          <h1>Reg. No.</h1>
          <h2>163</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Name</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.name}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Baptism Name</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.baptismName}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Family Name</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.familyName}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Name of Father</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.father}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Name of Mother</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.mother}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Date of Birth</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">
            {details.dob ? details.dob.split("T")[0] : ""}
          </h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Date of Baptism</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">
            {details.doBaptism ? details.doBaptism.split("T")[0] : ""}
          </h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Place of Birth</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.birthPlace}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Place of Baptism</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.parish}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Date of Confirmation</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">
            {details.doBaptism ? details.doBaptism.split("T")[0] : ""}
          </h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">God Father + Parish</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{`${godFather.name}, ${godFather.parish}`}</h2>
        </div>
        <div className="name-div-baptism-cer">
          <h1 className="name-title">
            <span className="name-head">Minister</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="place-name">{details.minister}</h2>
        </div>
        <div className="declaration-div">
          <h1>
            Certified the above is a true extract from the Baptism Register
            maintained in this Church.
          </h1>
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
            <h2 className="place-name name-signature-head">
              Name &amp; Signature of the <br />
              Parish Priest
            </h2>
          </div>
        </div>
        <div className="digital-signature-div ">
          <h1>This certificate is digitally signed</h1>
          <p className="digital-signature-content">{details.signature}</p>
        </div>
      </div>
    </div>
  );
}
