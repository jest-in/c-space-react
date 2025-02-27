import React from "react";
import { useState,useEffect,useRef } from "react";

import Icon_Close from "./Assets/Icon_Close";
import Icon_Search from "./Assets/Icon_Search";
import IconUpload from "./Assets/Icon_Upload";
import Icon_Menu from "./Assets/Icon_Menu";

import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import { id,url } from "./family";
import Navigation from "./navigation";


let personId;
let familyId;

export default function FamilyIndividual() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate = useNavigate();

  const hiddenFileInput = useRef(null);  

  // Family
  const [family, setFamily] = useState([]);

  // photo link
  const [photoLink,setPhotoLink]=useState('');

  // Family members
  const [members, setMembers] = useState([]);

  // Heading division
  const [membersSection, setmembersSection] = useState("hidden");

  // Details section
  const [detailSection, setDetailSection] = useState("hidden");

  // family image
  const [photo, setPhoto] = useState({});

  // photo upload
  function photoUpload() {
    console.log("upload clicked");
    hiddenFileInput.current.click();
  }

  // change in file
  function onFileChange(event) {
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append("photo", event.target.files[0], event.target.files[0].name);

    axios
      .patch(`http://localhost:5000/api/v1/family/${location.state}`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          alert('uploaded successfully')
        } 
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });

  }

  useEffect(() => {
    familyId = id;
    axios
      .get(`http://localhost:5000/api/v1/family/${location.state}`, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        const result = res.data.data;

        setPhotoLink(result.photo);

        // If result is null then detail section should be hidden
        if (result._id) {
          setDetailSection("");
        } else navigate("/family");

        setFamily(result);

        // Only display if members array contains atleast 1 element
        if (result.members.length > 0) setmembersSection("famili-members-div ");

        setMembers(result.members);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }, []);

  return (
    <div className="container-family">
      <Navigation />
      <main className={detailSection}>
        <div className="title-div">
          <div className="family-master family-individual-master">
            <h1>{family.familyName}</h1>
          </div>
          <div className="family-individual-nav">
            <button onClick={()=>{
              navigate('/add-member',{
                state:location.state,
              })
            }}>Add Member</button>
          </div>
          {/* <div className="search-div">
            <input type="text" name="search-name" placeholder="Search" />
            <Icon_Search />
          </div> */}
        </div>
        <hr />
        <div className="family-details-div">
          <div className="family-entries">
            <div className="inner-div-1">
              <div className="house-name-div">
                <h1>Family name</h1>
                <h2>{family.familyName ? family.familyName : "-"}</h2>
              </div>
              <div className="address-div">
                <h1>Address</h1>
                <h2>{family.address ? family.address : "-"}</h2>
              </div>
            </div>
            <div className="inner-div-2">
              <div className="houseno-div">
                <h1>House No</h1>
                <h2>{family.houseNum ? family.houseNum : "-"}</h2>
              </div>
              <div className="ward-div">
                <h1>Ward No</h1>
                <h2>{family.wardNum ? family.wardNum : "-"}</h2>
              </div>
              <div className="pincode-div">
                <h1>Pincode</h1>
                <h2>{family.pin ? family.pin : "-"}</h2>
              </div>
            </div>
          </div>
          <div className="family-photo">
            <div className="upload-btn" onClick={() => photoUpload()}>
              <h1>Family photo</h1>
              <IconUpload />
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={(event) => onFileChange(event)}
                style={{ display: "none" }}
              />
            </div>
            <div className="photo-container">
              <img
                src={`http://localhost:5000/img/family/${photoLink}`}
                alt="family-photo"
              />
            </div>
          </div>
        </div>
        <div className={membersSection}>
          <div className="heading-div">
            <div className="name-div">Baptism Name</div>
            <div className="dob-div">Date of birth</div>
            <div className="phone-div">Phone number</div>
            <div className="baptism-div">Baptism Date</div>
            <div className="marriage-div">Marriage Date</div>
            <div className="death-div">Death Date</div>
          </div>
          {members.map((member, index) => {
            const {
              _id,
              baptismName,
              dob,
              phoneNumber,
              doBaptism,
              marriage,
              death,
            } = member;
            const dobString = dob ? dob.split("T")[0] : "-";
            const baptismString = doBaptism ? doBaptism.split("T")[0] : "-";
            const marriageString = marriage ? marriage.split("T")[0] : "-";
            const deathString = death ? death.split("T")[0] : "-";
            return (
              <div
                className="member-details-div"
                key={index}
                onClick={() => {
                  personId = id;
                  navigate("/person", {
                    state: _id,
                  });
                }}
              >
                <div className="name-div">
                  {baptismName ? baptismName : "-"}
                </div>
                <div className="dob-div">{dobString}</div>
                <div className="phone-div">
                  {phoneNumber ? phoneNumber : "-"}
                </div>
                <div className="baptism-div">{baptismString}</div>
                <div className="marriage-div">{marriageString}</div>
                <div className="death-div">{deathString}</div>
              </div>
            );
          })}
          <div className="donation-div">
            <div className="donation-heading">Donations / offerings</div>
            <div className="donation-content">
              <span className="blank-space" />-
            </div>
          </div>
        </div>
        <div className="message-popup-bg hidden">
          <div className="message-popup">
            <div className="message-close-icon-div">
              <Icon_Close />
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
              <a href="#">Send</a>
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
