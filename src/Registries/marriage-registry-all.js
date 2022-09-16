import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Icon_Filter from '../Assets/Icon_Filter'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'
import axios from "axios";

export default function MarriageRegistryAll() {

  // // show details
  // const [showDetails, setShowDetails] = useState("hidden");

  // All marriage registry
  const [marriageAll,setMarriageAll]=useState([]);

  useEffect(()=>{
    axios
      .get()
      .then((res) => {
        if (res.data.status === "success") {
          const result = res.data.data;
          // setShowDetails('');
          setMarriageAll(result);
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
          <h1>Marriage Registry</h1>
        </div>
        <div className={`search-div ${marriageAll.length ? "" : "hidden"}`}>
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
        <div className={`filter-div ${marriageAll.length ? "" : "hidden"}`}>
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div
        className={`famili-members-div transactions ${
          marriageAll.length ? "" : "hidden"
        }`}
      >
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Groom Name</div>
          <div className="mar-bride-name">Bride Name</div>
          <div className="mar-date">Date</div>
          <div className="mar-celebrant">Celebrant</div>
        </div>
        {marriageAll.map((member, index) => {
          const { celebrant, marriageDate } = member;
          const groomName = member.groomData.name;
          const brideName = member.brideData.name;
          return (
            <div className="member-details-div" key={index}>
              <div className="mar-slno">{index + 1}</div>
              <div className="mar-groom-name">
                {groomName ? groomName : "-"}
              </div>
              <div className="mar-bride-name">
                {brideName ? brideName : "-"}
              </div>
              <div className="mar-date">
                {marriageDate ? marriageDate.split("T")[0] : "-"}
              </div>
              <div className="mar-celebrant">{celebrant ? celebrant : "-"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
