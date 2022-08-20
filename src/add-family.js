import React from 'react'
import Logo from "./Assets/logo";
import IconUpload from './Assets/Icon-Upload'
import AddSection from './Assets/add-section';
import axios from "axios";

export default function AddFamily() {
  function handleChange(event){
    console.log(event.target.value);
  }
  //   const data = {
  //     familyName: "yada",
  //     address: "somewhere",
  //     houseNum: "23",
  //     wardNum: "4",
  //     parishId: "ch1",
  //     pin: "574228",
  //   };
  // axios
  //   .post("http://localhost:5000/api/v1/family", data, {
  //     withCredentials: true,
  //   })
  //   .then((res) => {
  //     console.log(res.data);
  //   });

  // Testing block later will be removed
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
      <div className="title-div add-title-div">
        <div className="family-master">
          <h1>Add family</h1>
        </div>
      </div>
      <hr />
      <div className="family-details-div">
        <div className="family-entries">
          <div className="inner-div-1">
            <div className="house-name-div">
              <h1>House name</h1>
              <input className="house-name-input" type="text" />
            </div>
            <div className="address-div">
              <h1>Address</h1>
              <textarea className="address-input" cols="13" rows="4"></textarea>
            </div>
          </div>
          <div className="inner-div-2">
            <div className="houseno-div">
              <h1>House No</h1>
              <input
                className="house-no-input"
                type="text"
                onChange={(event)=>handleChange(event)}
              />
            </div>
            <div className="ward-div">
              <h1>Ward No</h1>
              <input className="house-no-input" type="text" />
            </div>
            <div className="pincode-div">
              <h1>Pincode</h1>
              <input className="house-no-input" type="text" />
            </div>
          </div>
        </div>
        <div className="family-photo">
          <div className="upload-btn">
            <h1>Family photo</h1>
            <IconUpload />
          </div>
          <div className="photo-container">
            <img src={require("./Assets/family-photo.png")} alt="family" />
          </div>
        </div>
      </div>

      <div className="title-div add-title-div">
        <div className="family-master">
          <h1>Member details</h1>
        </div>
      </div>
      <hr />

      <div className="add-member-details-div">
        <div className="row1-div">
          <div className="first-name-div">
            <h1>First name</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="last-name-div">
            <h1>Last name</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="dateofbirth-div">
            <h1>Date of birth</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="contact-no-div">
            <h1>Phone Number</h1>
            <input className="house-no-input" type="text" />
          </div>
        </div>
        <div className="row2-div">
          <div className="first-name-div">
            <h1>First name</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="last-name-div">
            <h1>Last name</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="dateofbirth-div">
            <h1>Date of birth</h1>
            <input className="house-no-input" type="text" />
          </div>
          <div className="gender-div">
            <h1>Gender</h1>
            <div className="radio-div">
              <div className="radio1">
                <input id="male" name="male" type="radio" />
                <label htmlFor="male">male</label>
              </div>
              <div className="radio2">
                <input id="rb1" name="male" type="radio" />
                <label htmlFor="rb1">Female</label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="add-section-div">
        <AddSection />
      </div>
    </div>
  );
}
