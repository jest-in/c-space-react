import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu';
import Logo from "../Assets/logo";
import Navigation from '../navigation';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
    
export default function LedgerIndividual() {
          const location = useLocation();
          const navigate = useNavigate();
          // Imported data
          console.log("Imported object from family using navigate:", location);

          const [ledgerDetails,setLedgerDetails]=useState([]);

          useEffect(()=>{
            axios
              .get(`http://localhost:5000/api/v1/accounts/vouchers/${location.state}`, {
                withCredentials: true,
              })
              .then((res) => {
                setLedgerDetails(res.data.data);
              })
              .catch((err) => {
                // Error
                alert(`${err.response.data.message}`);
              });
          },[])
  return (
    <>
      <div className="container-family">
        <Navigation />
        <div className="title-div">
          <div className="family-master regestries-person-head">
            <h1>Electricity Bill</h1>
          </div>
        </div>
        <hr />
        <div className="famili-members-div transactions">
          <div className="heading-div">
            <div className="led-indi-slno">S.No</div>
            <div className="led-indi-date">Date</div>
            <div className="led-indi-narration">Narration</div>
            <div className="led-indi-vno">Voucher No</div>
            <div className="led-indi-amt">Amount</div>
            <div className="led-indi-mode">Mode</div>
          </div>
          {ledgerDetails.map((ledger, index) => {
            return (
              <div className="member-details-div">
                <div className="led-indi-slno">{index + 1}</div>
                <div className="led-indi-date">
                  {ledger.date ? ledger.date.split("T")[0] : "-"}
                </div>
                <div className="led-indi-narration">{ledger.narration}</div>
                <div className="led-indi-vno"> {ledger.voucherNum}</div>
                <div className="led-indi-amt"> {ledger.amount}</div>
                <div className="led-indi-mode"> {ledger.account}</div>
              </div>
            );
          })}
        </div>
        <div className="create-led-btn-div">
          <button
            className="create-led-btn"
            onClick={() => navigate("/add-voucher")}
          >
            <h1>Add Voucher</h1>
          </button>
        </div>
      </div>
    </>
  );
}
