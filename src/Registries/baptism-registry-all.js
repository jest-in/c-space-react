import React, { useEffect,useState } from 'react'
import Navigation from '../navigation'
import Icon_Filter from '../Assets/Icon_Filter';
import Icon_Search from '../Assets/Icon_Search';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon_Close from '../Assets/Icon_Close';

// For exporting to baptism registry
let userIdFromAllBaptism;

export default function BaptismRegistryAll() {
  const navigate = useNavigate();

  // Array of baptism registry
  const [baptismRegistry,setBaptismRegistry]=useState([]);

  useEffect(()=>{
    // Get request for all baptism registry
    axios
      .get("http://localhost:5000/api/v1/registry/baptism-registry", {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setBaptismRegistry(res.data.data);
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  },[])

  return (
    <div className="container-family">
      {/* <div className="baptism-filter-popup-bg">
  <div className="baptism-filter-popup-content">
    <div className="filter-close-icon-div">
      <Icon_Close/>
    </div>
    <div className="baptism-filter-content">
      <div className="baptism-filter-dob-div">
        <div className="baptism-filter-dob-label">
          <label htmlFor="DOB">DOB:</label>
        </div>
        <div className="baptism-filter-dob-input">
          <input type="date" />
          <input type="date" />
        </div>
      </div>
      <div className="baptism-filter-dob-div">
        <div className="baptism-filter-dob-label">
          <label htmlFor="DOB">Gender :</label>
        </div>
        <div className="baptism-filter-dob-input">
          <div className="radio-div">
            <div className="radio1">
              <input id="male" name="male" type="radio" />
              <label htmlFor="male">Male</label>
            </div>
            <div className="radio2">
              <input id="rb1" name="male" type="radio" />
              <label htmlFor="rb1">Female</label>
            </div>
          </div>
        </div>
      </div>
      <div className="baptism-filter-dob-div">
        <div className="baptism-filter-dob-label">
          <label htmlFor="DOB">Date of Baptism :</label>
        </div>
        <div className="baptism-filter-dob-input">
          <input type="date" />
          <input type="date" />
        </div>
      </div>
      <div className="baptism-filter-dob-div">
        <div className="baptism-filter-dob-label">
          <label htmlFor="DOB">Minister :</label>
        </div>
        <div className="baptism-filter-dob-input">
          <input type="text" />
        </div>
      </div>
    </div>
    <div className="filter-apply-div">
      <button className="filter-apply-button">Apply</button>
    </div>
  </div>
</div> */}

      <Navigation />
      <div className="title-div">
        <div className="family-master regestries-person-head">
          <h1>Baptism Registry</h1>
        </div>
        <div className="search-div">
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
      </div>
      <hr />
      <div className={`famili-members-div transactions ${""}`}>
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Baptism Name</div>
          <div className="mar-bride-name">Father Name</div>
          <div className="mar-celebrant">Mother Name</div>
          <div className="mar-date">Date</div>
        </div>
        {baptismRegistry.map((person, index) => {
          const { baptismName, father, mother, doBaptism, userId } = person;
          return (
            <div
              className="member-details-div"
              key={index}
              onClick={() => {
                userIdFromAllBaptism = userId;
                navigate("/baptism-registry", {
                  state: userId,
                });
              }}
            >
              <div className="mar-slno">{index + 1}</div>
              <div className="mar-groom-name">
                {baptismName ? baptismName : "-"}
              </div>
              <div className="mar-bride-name">{father ? father : "-"}</div>
              <div className="mar-celebrant">{mother ? mother : "-"}</div>
              <div className="mar-date">
                {doBaptism ? doBaptism.split("T")[0] : "-"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export {userIdFromAllBaptism}