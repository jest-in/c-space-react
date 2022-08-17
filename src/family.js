import React from 'react'
import Arrow from './Assets/Arrow'
import Icon_Add from './Assets/Icon_Add'
import Icon_Close from './Assets/Icon_Close'
import Icon_Filter from './Assets/Icon_Filter'
import Icon_Menu from './Assets/Icon_Menu'
import Icon_Search from './Assets/Icon_Search'
import Logo from './Assets/logo'

export default function Family() {
  return (
    <div className="families-container">
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
                    <li>Family Registry</li>
                    <li>Engagement Registry</li>
                    <li>Marriage Registry</li>
                    <li>Death Reigistry</li>
                  </ul>
                </div>
              </a>
              <a href="#">Transactions</a>
              <a href="#">Pious Associations</a>
            </div>
          </nav>
        </div>
      </header>
      <div className="graph-div">{/* graph goes here */}</div>
      <div className="secondary-nav-div">
        <div className="secondary-nav-subdiv1">
          <div className="sub1-head">
            <div className="sub1-heading">
              <h1>Families</h1>
            </div>
            <div className="families-search-div">
              <input type="text" name="search-name" placeholder="Search" id />
              <Icon_Search />
            </div>
            <div className="filter-div">
              <Icon_Filter />
            </div>
          </div>
          <div className="filter-area">
            <div className="filters-head">
              <h1>Has 3 children</h1>
              <div>
                <Icon_Close />
              </div>
            </div>
            <div className="add-filter">
              <Icon_Add />
            </div>
          </div>
          <hr />
          <div className="sub-div-content">
            <div className="sub-entries">
              <h1>Avan Ramsey</h1>
            </div>
            <div className="sub-entries">
              <h1>Aola Simon</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
            <div className="sub-entries">
              <h1>Bablo Jimenez</h1>
            </div>
          </div>
        </div>
        <div className="secondary-nav-subdiv2">
          <div className="sub2-head">
            <div className="sub2-heading">
              <h1>Aola Simon</h1>
            </div>
            <div className="view-detail-div" onclick="clickListener()">
              <h1>View in detail</h1>
              <Arrow />
            </div>
          </div>
          <hr />
          <div className="sub-div2-content">
            <div className="sub2-content-head">
              <div className="sub2-name-div">
                <h1>Name</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>Date of Birth</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>Phone number</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
            <div className="sub2-content">
              <div className="sub2-name-div">
                <h1>Aola Simon</h1>
              </div>
              <div className="sub2-dob-div">
                <h1>05-04-1985</h1>
              </div>
              <div className="sub2-phone-div">
                <h1>9956425685</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
