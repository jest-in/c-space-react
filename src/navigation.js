import React from 'react'
import Icon_AddWhite from './Assets/Icon_AddWhite';
import Logo from './Assets/logo';
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="nav-div">
        <nav>
          <div className="logo-div">
            <Logo />
          </div>
          <div className="navigations">
            <a href="#">Overview</a>
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
            <a href="#">Transactions</a>
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
            <a href="/view-event">Offerings/Donations</a>
          </div>
          <div className="logout-nav-div">
            <button className="logout-btn">Logout</button>
          </div>

        </nav>
      </div>
    </header>
  );
}
