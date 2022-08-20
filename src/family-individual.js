import React from "react";
import { useState,useEffect } from "react";

import Logo from "./Assets/logo";
import SearchIcon from "./Assets/Icon_Search";
import FilterIcon from "./Assets/Icon_Filter";
import UploadIcon from './Assets/Icon-Upload';

import axios from "axios";
import { useNavigate } from "react-router-dom";

import { id,url } from "./family";
import Icon_Close from "./Assets/Icon_Close";

let personId;

export default function FamilyIndividual() {

  // Family
  const [family,setFamily]=useState([]);

  // Family members
  const [members,setMembers]=useState([]);

  // Heading division
  const [membersSection, setmembersSection] = useState("hidden");

  // Details section
  const [detailSection,setDetailSection]=useState('hidden');

  useEffect(()=>{
    axios.get(`${url}/${id}`).then((res) => {
      const result = res.data.data;

      // If result is null then detail section should be hidden
      if (result._id) setDetailSection("");

      setFamily(result);
      console.log(result);

      // Only display if members array contains atleast 1 element
      if(result.members.length>0)
      setmembersSection("famili-members-div ");

      setMembers(result.members);
    })
  },[]);

  const navigate=useNavigate();

  return (
    <div className="container-family">
      <header>
        <div className="nav-div">
          <nav>
            <div className="logo-div">
              <Logo />;
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
      <main className={detailSection}>
        {" "}
        {/*details section */}
        <div className="title-div">
          <div className="family-master">
            <h1>{family.familyName}</h1>
          </div>
          <div className="search-div">
            <input type="text" name="search-name" placeholder="Search" />
            <SearchIcon />
          </div>
          <div className="filter-div">
            <FilterIcon />
          </div>
        </div>
        <hr />
        <div className="family-details-div">
          <div className="family-entries">
            <div className="inner-div-1">
              <div className="house-name-div">
                <h1>House name</h1>
                <h2>Kazhuthadiyil</h2>
              </div>
              <div className="address-div">
                <h1>Address</h1>
                <h2>{family.address}</h2>
              </div>
            </div>
            <div className="inner-div-2">
              <div className="houseno-div">
                <h1>House No</h1>
                <h2>{family.houseNum}</h2>
              </div>
              <div className="ward-div">
                <h1>Ward No</h1>
                <h2>{family.wardNum}</h2>
              </div>
              <div className="pincode-div">
                <h1>Pincode</h1>
                <h2>{family.pin}</h2>
              </div>
            </div>
          </div>
          <div className="family-photo">
            <div className="upload-btn">
              <h1>Family photo</h1>
              <UploadIcon />
            </div>
            <div className="photo-container">
              <img src={require("./Assets/family-photo.png")} />
            </div>
            <div className="family-send-message-btn">
              <a href="#">Send Message</a>
            </div>
          </div>
        </div>
        <div className={membersSection}>  {/*hide this if no members */}
          <div className="heading-div">
            <div className="name-div">Name</div>
            <div className="dob-div">Date of birth</div>
            <div className="phone-div">Phone number</div>
            <div className="baptism-div">Baptism</div>
            <div className="marriage-div">Marriage</div>
            <div className="death-div">Death</div>
            <div className="relation-div">Relation</div>
          </div>
          {members.map((member, index) => {
            const {
              id,
              name,
              dob,
              phoneNumber,
              baptism,
              marriage,
              death,
              relation,
            } = member;
            return (
              <div className="member-details-div" onClick={()=>{
                personId = id;
                navigate('/person');
              }}>
                <div className="name-div">{name}</div>
                <div className="dob-div">{dob}</div>
                <div className="phone-div">{phoneNumber}</div>
                <div className="baptism-div">{baptism}</div>
                <div className="marriage-div">{marriage}</div>
                <div className="death-div">{death}</div>
                <div className="relation-div">{relation}</div>
              </div>
            );
          })}
          <div className="description-div">
            <div className="desc-heading">Description/Remarks</div>
            <div className="desc-content">
              <span className="blank-space" />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum".
            </div>
          </div>
          <div className="donation-div">
            <div className="donation-heading">Donations / offerings</div>
            <div className="donation-content">
              <span className="blank-space" />
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum".
            </div>
          </div>
        </div>
        <div className="message-popup-bg hidden">
          <div className="message-popup">
            <div className="message-close-icon-div">
              <Icon_Close className="message-close-icon" />
            </div>
            <div className="message-popup-head">
              <h1>Compose Message</h1>
              <hr />
            </div>
            <div className="message-input-div">
              <textarea
                name="message"
                id="message"
                rows={6}
                cols={25}
                placeholder="Type your message here..."
                autoFocus
                defaultValue={""}
              />
            </div>
            <div className="message-send-button">
              <a href="#">
                Send
              </a>
              <h1>Sent Successfully</h1>
              <h2 className="message-wrong">
                Something went wrong! Try again.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// created to use while viewing in person details (person.js)
export {personId};