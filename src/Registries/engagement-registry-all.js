import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Icon_Filter from '../Assets/Icon_Filter'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'
import { useNavigate, useLocation } from "react-router-dom";

export default function EngagementRegistryAll() {
  const navigate = useNavigate();
  // Show details section
  const [showDetails,setShowDetails]=useState('hidden');

  // Engagement registries
  const [engagementAll,setEngagementAll]=useState([]);

  useEffect(()=>{
    axios
      .get(`http://localhost:5000/api/v1/registry/engagement-registry`, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setEngagementAll(res.data.data);
          setShowDetails("");
        }
      })
      .catch((err) => {
        // Error
        // if(err.response)
        alert(JSON.stringify(err));
      });
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="family-master">
          <h1>{engagementAll.length ? "" : "Empty "}Engagement Registry</h1>
        </div>
        <div className={`search-div ${showDetails}`}>
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
        <div className={`filter-div ${showDetails}`}>
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div className={`famili-members-div transactions ${showDetails}`}>
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Groom Name</div>
          <div className="mar-bride-name">Bride Name</div>
          <div className="mar-date">Date</div>
          <div className="mar-celebrant">Celebrant</div>
        </div>
        {engagementAll.map((person, index) => {
          const { engagementDate, celebrant,brideId,groomId } = person;
          const groomName = person.groomData.baptismName;
          const brideName = person.brideData.baptismName;
          return (
            <div className="member-details-div" key={index} onClick={()=>{
              navigate("/engagement-registry", {
                state:{
                  id:groomId?groomId:brideId,
                },
              });
            }}>
              <div className="mar-slno">{index + 1}</div>
              <div className="mar-groom-name">
                {groomName ? groomName : "-"}
              </div>
              <div className="mar-bride-name">
                {brideName ? brideName : "-"}
              </div>
              <div className="mar-date">
                {engagementDate ? engagementDate.split("T")[0] : "-"}
              </div>
              <div className="mar-celebrant">{celebrant ? celebrant : "-"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
