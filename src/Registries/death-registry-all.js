import React from 'react'
import {useState, useEffect } from 'react';
import Icon_Filter from '../Assets/Icon_Filter'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'
import axios from "axios";
import { useNavigate } from "react-router-dom";

// exporting to death-registry
let personIdFromDeathAll;

export default function DeathRegistryAll() {
  const navigate = useNavigate();
  
  // useState for AllDeathRegistry
  const [allDeathRegistry,setAllDeathRegistry]=useState([]);

  useEffect(()=>{
    // get request
    axios
      .get("http://localhost:5000/api/v1/registry/death-registry")
      .then((res) => {
        if (res.data.status === "success") {
          const result = res.data.data;
          console.log('Result:',result);
          setAllDeathRegistry(result);
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
        <div className="family-master">
          <h1>{allDeathRegistry.length ? "" : "Empty "}Death Registry</h1>
        </div>
        <div
          className={`search-div ${allDeathRegistry.length ? "" : "hidden"}`}
        >
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
        <div
          className={`filter-div ${allDeathRegistry.length ? "" : "hidden"}`}
        >
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div
        className={`famili-members-div transactions ${
          allDeathRegistry.length ? "" : "hidden"
        }`}
      >
        <div className="heading-div">
          <div className="death-slno">S.No</div>
          <div className="death-name">Name</div>
          <div className="death-house-name">Family Name</div>
          <div className="death-age">Age</div>
          <div className="death-date">Date</div>
          <div className="death-sickness">Sickness</div>
        </div>
        {allDeathRegistry.map((person, index) => {
          const { baptismName, familyName, age, dod, sickness,userId } = person;
          return(
            <div className="member-details-div" key={index} onClick={()=>{
              personIdFromDeathAll=userId;
              navigate('/death-registry', {
                state: userId,
              });
            }}>
            <div className="death-slno">{index + 1}</div>
            <div className="death-name">{baptismName ? baptismName : "-"}</div>
            <div className="death-house-name">
              {familyName ? familyName : "-"}
            </div>
            <div className="death-age">{age ? age : "-"}</div>
            <div className="death-date">{dod ? dod.split("T")[0] : "-"}</div>
            <div className="death-sickness">{sickness ? sickness : "-"}</div>
          </div>
          )
        })}
      </div>
    </div>
  );
}
export {personIdFromDeathAll};