import React from 'react'
import {useState, useEffect } from 'react';
import Icon_Filter from '../Assets/Icon_Filter'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'

export default function DeathRegistryAll() {
  // useState for AllDeathRegistry
  const [allDeathRegistry,setAllDeathRegistry]=useState([]);

  useEffect(()=>{
    // get request
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
          <div className="death-house-name">House Name</div>
          <div className="death-age">Age</div>
          <div className="death-date">Date</div>
          <div className="death-sickness">Sickness</div>
        </div>
        {allDeathRegistry.map((person, index) => {
          const { name, houseName, age, dod, sickness } = person;
          <div className="member-details-div" key={index}>
            <div className="death-slno">{index + 1}</div>
            <div className="death-name">{name ? name : "-"}</div>
            <div className="death-house-name">
              {houseName ? houseName : "-"}
            </div>
            <div className="death-age">{age ? age : "-"}</div>
            <div className="death-date">{dod ? dod.split("T")[0] : "-"}</div>
            <div className="death-sickness">{sickness ? sickness : "-"}</div>
          </div>;
        })}
      </div>
    </div>
  );
}
