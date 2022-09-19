import React from 'react'
import Logo from '../Assets/logo';
import Icon_Menu from '../Assets/Icon_Menu'
import Navigation from '../navigation';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios";

export default function Voucher() {
  const [vouchers,setVouchers]=useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    axios
      .get(`http://localhost:5000/api/v1/accounts/vouchers`, {
        withCredentials: true,
      })
      .then((res) => {
        setVouchers(res.data.data);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  },[])
  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="family-master regestries-person-head">
          <h1>Vouchers</h1>
        </div>
      </div>
      <hr />
      <div className="famili-members-div transactions">
        <div className="heading-div">
          <div className="vchr-vno">V.No</div>
          <div className="vchr-date">Date</div>
          <div className="vchr-particulars">Particulars</div>
          <div className="vchr-account">Account</div>
          <div className="vchr-type">Type</div>
          <div className="vchr-amount">Amount</div>
          <div className="vchr-mode">Mode</div>
        </div>
        {vouchers.map((voucher, index) => {
          return (
            <div className="member-details-div" key={index}>
              <div className="vchr-vno">{voucher.voucherNum}</div>
              <div className="vchr-date">{voucher.date.split("T")[0]}</div>
              <div className="vchr-particulars">{voucher.ledgerName}</div>
              <div className="vchr-account">{voucher.groupName}</div>
              <div className="vchr-type">{voucher.type}</div>
              <div className="vchr-amount">{voucher.amount}</div>
              <div className="vchr-mode">{voucher.account}</div>
            </div>
          );
        })}
      </div>
      <div className="create-led-btn-div">
        <a href className="create-led-btn">
          <h1 onClick={() => navigate("/add-voucher")}>Add Voucher</h1>
        </a>
      </div>
    </div>
  );
}
