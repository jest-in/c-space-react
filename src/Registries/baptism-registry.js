import React from 'react'
import Navigation from '../navigation'
import IconMenu from '../Assets/Icon_Menu';
import axios from 'axios';
import { personIdFromPerson,personName } from '../person';
import { useEffect } from 'react';
import { useState } from 'react';
import { userIdFromAllBaptism } from './baptism-registry-all';

export default function BaptismRegistry() {

  // Baptism Details
  const [baptismDetails,setBaptismDetails]=useState({});

  useEffect(()=>{
    // Get request
    axios
      .get(`http://localhost:5000/api/v1/registry/baptism-registry/${personIdFromPerson?personIdFromPerson:userIdFromAllBaptism}`)
      .then((res) => {
        if (res.data.status === "success") {
          setBaptismDetails(res.data.data);
        }
      });
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>
            {baptismDetails.baptismName ? `${baptismDetails.baptismName} ` : ""}
            {baptismDetails.familyName ? baptismDetails.familyName : ""}
          </h1>
        </div>
        <div className="registries-nav-div">
          <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className="menu-div">
          <IconMenu />
        </div>
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
                {baptismDetails.place ? baptismDetails.place : "-"}
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
        <div className="registry-photo-div">
          <img className="upload-icon" src="/Icon-Upload.svg" alt="Upload" />
          <img
            className="marriage-photo"
            src={require("../Assets/marriage.png")}
            alt="marriage pic"
          />
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
