import React from 'react'
// import '../certificate-css/marriage-certificate.css'

export default function MarriageCertificate() {
  return (
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
        <span>Jestin George</span> S/o <span>George</span> of the Parish of
        <span>St. Thomas Church Kanjal</span> in the Diocese of
        <span>Belthangadi</span> and
        <span>Muniyamma</span> D/o <span>Muniyappan</span> of the Parish of
        <span>St. Thomas Church Kankanady</span> Diocese of
        <span>Mangalore</span> was blessed by
        <span>Avarachan</span> at
        <span>St. Thomas Hall Belthangady</span> on
        <span>1-1-2022</span>
        <span>(First January Two Thousand Twenty Two)</span>
        according to the Rites of the Catholic Church. This is the true
        extract of the Records kept here.
      </p>
    </div>
    <div className="witness-div">
      <div className="witness-heading">
        <h1>The Witness are :</h1>
      </div>
      <div className="witness-entries">
        <p>
          1). <span>Muniyappan</span>
        </p>
        <p>
          2). <span>Patrose</span>
        </p>
      </div>
    </div>
    <div className="credentials-div">
      <div className="place-date-div">
        <div className="date-div">
          <h1 className="name-title">
            <span className="name-head">Date</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="person-name">10-10-2022</h2>
        </div>
        <div className="date-div">
          <h1 className="name-title">
            <span className="name-head">Place</span>
            <span className="name-colon">:</span>
          </h1>
          <h2 className="person-name">Kanjal</h2>
        </div>
      </div>
      <div className="seal-div">
        <h2 className="person-name">(Seal)</h2>
      </div>
      <div className="name-signature-div">
        <h2 className="person-name name-signature-head">
          Name &amp; Signature of the <br />
          Parish Priest
        </h2>
      </div>
    </div>
    <div className="digital-signature-div">
      <p className="digital-signature-content">
        eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c
      </p>
    </div>
  </div>
</div>

  );
}
