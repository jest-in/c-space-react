import React from 'react'
import Icon_Menu from './Assets/Icon_Menu'
import Logo from './Assets/logo'
import Icon_Upload from './Assets/Icon_Upload'

export default function MarriageRegistryAdd() {
  return (
    <div className="container-family">
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
      <div className="title-div">
        <div className="person-head">
          <h1>Jestin George</h1>
        </div>
        <div className="registries-nav-div">
          <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className="menu-div">
          <Icon_Menu />
        </div>
      </div>
      <hr />
      <div className="members-entries-div">
        <div className="registry-div">
          <div className="registry-details-heading-div">
            <div className="bridegroom-head">Bridegroom</div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">House name</div>
              <div className="person-dob">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input type="text" name="Name" />
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Bride</div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">House name</div>
              <div className="person-dob">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input type="text" name="Name" />
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Other details</div>
            <div className="name-person-div">
              <div className="heading-name">Date</div>
              <div className="person-name">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Celebrant</div>
              <div className="person-dob">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Witness</div>
              <div className="person-phone">
                <input type="text" name="Name" />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Parish priest</div>
              <div className="person-baptism">
                <input type="text" name="Name" />
              </div>
            </div>
          </div>
        </div>

        <div className="registry-photo-div">
          <Icon_Upload />
          <img
            className="marriage-photo"
            src={require("./Assets/marriage.png")}
            alt="image/marriage"
          />
        </div>
      </div>

      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <input type="text" name="Description" />
        </div>
        <div className="submit-btn-div">
          <a href="">Submit</a>
        </div>
      </div>
    </div>
  );
}
