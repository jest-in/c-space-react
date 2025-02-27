import React from "react";
import Icon_AddWhite from "./Assets/Icon_AddWhite";
import Logo from "./Assets/logo";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const fileDownload = require("js-file-download");

export default function Navigation() {
  const navigate = useNavigate();

// function
function anniversaryCsv(){
  axios
  .get(`http://localhost:5000/anniversaries.csv`, {
    withCredentials: true,responseType:'blob'
  }).then((res)=>{
    fileDownload(res.data, 'anniversaries.csv')
  })
  // 
}
function bdayCsv() {
  axios
            .get(`http://localhost:5000/bdays.csv`, {
              withCredentials: true,responseType:'blob'
            }).then((res)=>{
              fileDownload(res.data, 'bdays.csv')
            })
  //
}

  return (
    <header>
      <div className="nav-div">
        <nav>
          <div className="logo-div" onClick={() => navigate("/family")}>
            <Logo />
          </div>
          <div className="navigations">
            <a className="registry-nav" href="#">
              Registries
              <div className="sub-menu1-div">
                <ul>
                  <div className="sub-menu-registries-div">
                    <li onClick={() => navigate("/family")}>Family Registry</li>
                    <li onClick={() => navigate("/add-family")}>
                      <Icon_AddWhite />
                      Add Family
                    </li>
                  </div>
                  <li onClick={() => navigate("/baptism-registry-all")}>
                    Baptism Registry
                  </li>
                  <li onClick={() => navigate("/engagement-registry-all")}>
                    Engagement Registry
                  </li>
                  <li onClick={() => navigate("/marriage-registry-all")}>
                    Marriage Registry
                  </li>
                  <li onClick={() => navigate("/death-registry-all")}>
                    Death Reigistry
                  </li>
                </ul>
              </div>
            </a>
            <a className="registry-nav" href="#">
              Transactions
              <div className="sub-menu1-div">
                <ul>
                  <li onClick={() => navigate("/groups")}>
                    Groups
                  </li>
                  <li onClick={() => navigate("/ledgers")}>
                    Ledgers
                  </li>
                  <li onClick={() => navigate("/voucher")}>
                    Vouchers
                  </li>
                  <li onClick={() => navigate("/add-voucher")}>
                    + Add Vouchers
                  </li>
                </ul>
              </div>
            </a>
            <a className="announcement-nav" href="#">
              Announcements
              <div className="sub-menu2-div">
                <ul>
                  <li onClick={() => navigate("/add-announce")}>
                    Add Announcement
                  </li>
                  <li onClick={() => navigate("/all-announce")}>
                    View Announcements
                  </li>
                </ul>
              </div>
            </a>
            <a className="announcement-nav" href="#">
              Donations/Offerings
              <div className="sub-menu2-div">
                <ul>
                  <li onClick={() => navigate("/create-event")}>
                    Create Event
                  </li>
                  <li onClick={() => navigate("/view-event")}>View Events</li>
                </ul>
              </div>
            </a>
            <a className="announcement-nav" href="#">
              Extras
              <div className="sub-menu2-div">
                <ul>
                  <li onClick={() => bdayCsv()}>Birthday list</li>
                  <li onClick={() => anniversaryCsv()}>Anniversary list</li>
                </ul>
              </div>
            </a>
          </div>
          <div className="logout-nav-div">
            <button
              className="logout-btn"
              onClick={() => {
                axios
                  .get(`http://localhost:5000/api/v1/users/logout`, {
                    withCredentials: true,
                  })
                  .then((res) => {
                    if (res.data.status === "success") {
                      navigate("/");
                    }
                  })
                  .catch((err) => {
                    // Error
                    alert(`${err.response.data.message}`);
                  });
              }}
            >
              Logout
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
