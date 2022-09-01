import React from 'react'
import Icon_AddWhite from './Assets/Icon_AddWhite';
import Logo from './Assets/logo';

export default function Navigation() {
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
                    <li>Family Registry</li>
                    <li>
                      <Icon_AddWhite />
                      Add Family
                    </li>
                  </div>
                  <li>Engagement Registry</li>
                  <li>Marriage Registry</li>
                  <li>Death Reigistry</li>
                </ul>
              </div>
            </a>
            <a href="#">Transactions</a>
            <a className="announcement-nav" href="#">
              Announcements
              <div className="sub-menu2-div">
                <ul>
                  <li>Add Announcement</li>
                  <li>View Announcements</li>
                </ul>
              </div>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
