import React from 'react'
import Navigation from '../navigation'
import IconMenu from '../Assets/Icon_Menu';
import axios from 'axios';
import { personIdFromPerson,personName } from '../person';
import { useEffect } from 'react';
import { useState } from 'react';
import { userIdFromAllBaptism } from './baptism-registry-all';
import { useNavigate, useLocation } from "react-router-dom";
import IconUpload from '../Assets/Icon_Upload';

export default function BaptismRegistry() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate=useNavigate();

  // Baptism Details
  const [baptismDetails,setBaptismDetails]=useState({});

  useEffect(()=>{
    // Get request use location.state
    axios
      .get(
        `http://localhost:5000/api/v1/registry/baptism-registry/${location.state}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          setBaptismDetails(res.data.data);
        }
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
        <div className="person-head regestries-person-head">
          <h1>
            {baptismDetails.baptismName ? `${baptismDetails.baptismName} ` : ""}
            {baptismDetails.familyName ? baptismDetails.familyName : ""}
          </h1>
        </div>
        <div className="baptism-registry-edit-btn-div">
          {/* <button className="baptism-edit-btn">Edit Registry</button> */}
          <button className="baptism-edit-btn" onClick={()=>navigate('/baptism-certificate',{
            state:baptismDetails.userId,
          })}>Download Cerfificate</button>
          {/* <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a> */}
        </div>
        {/* <div className="menu-div">
          <IconMenu />
        </div> */}
      </div>
      <hr />
      <div className="members-entries-div">
        <div className="registry-div">
          <div className="registry-details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                {baptismDetails.baptismName ? baptismDetails.baptismName : "-"}
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                {baptismDetails.name ? baptismDetails.name : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                {baptismDetails.familyName ? baptismDetails.familyName : "-"}
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                {baptismDetails.father ? baptismDetails.father : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                {baptismDetails.mother ? baptismDetails.mother : "-"}
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                {baptismDetails.parish ? baptismDetails.parish : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Birth Place</div>
              <div className="person-death-ward">
                {baptismDetails.birthPlace ? baptismDetails.birthPlace : "-"}
              </div>
            </div>
            {/* <div className="death-person-address-div">
              <div className="heading-address">Address</div>
              <div className="person-death-address">
                {baptismDetails.address ? baptismDetails.address : "-"}
              </div>
            </div> */}
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Birth</div>
              <div className="person-death-ward">
                {baptismDetails.dob ? baptismDetails.dob.split("T")[0] : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Baptism</div>
              <div className="person-death-ward">
                {baptismDetails.doBaptism
                  ? baptismDetails.doBaptism.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godfather</div>
              <div className="person-death-ward">
                {baptismDetails.godFather ? baptismDetails.godFather.name : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godmother</div>
              <div className="person-death-ward">
                {baptismDetails.godMother ? baptismDetails.godMother.name : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godfather</div>
              <div className="person-death-ward">
                {baptismDetails.godFather
                  ? baptismDetails.godFather.parish
                  : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godmother</div>
              <div className="person-death-ward">
                {baptismDetails.godMother
                  ? baptismDetails.godMother.parish
                  : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Minister</div>
              <div className="person-death-ward">
                {baptismDetails.minister ? baptismDetails.minister : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish Priest</div>
              <div className="person-death-ward">
                {baptismDetails.parishPriest
                  ? baptismDetails.parishPriest
                  : "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <span className="blank-space" />
          {baptismDetails.remarks ? baptismDetails.remarks : "-"}
        </div>
      </div>
    </div>
  );
}
