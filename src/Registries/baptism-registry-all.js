import React, { useEffect,useState } from 'react'
import Navigation from '../navigation'
import Icon_Filter from '../Assets/Icon_Filter';
import Icon_Search from '../Assets/Icon_Search';
import axios from "axios";
import { useNavigate } from "react-router-dom";

// For exporting to baptism registry
let userIdFromAllBaptism;

export default function BaptismRegistryAll() {
  const navigate = useNavigate();

  // Array of baptism registry
  const [baptismRegistry,setBaptismRegistry]=useState([]);

  useEffect(()=>{
    // Get request for all baptism registry
    axios
      .get("http://localhost:5000/api/v1/registry/baptism-registry")
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
      <Navigation />
      <div className="title-div">
        <div className="family-master">
          <h1>Baptism Registry</h1>
        </div>
        <div className="search-div">
          <input type="text" name="search-name" placeholder="Search" />
          <Icon_Search />
        </div>
        <div className="filter-div">
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div className={`famili-members-div transactions ${''}`}>
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Baptism Name</div>
          <div className="mar-bride-name">Fathers Name</div>
          <div className="mar-celebrant">Mothers Name</div>
          <div className="mar-date">Date</div>
        </div>
        {baptismRegistry.map((person, index) => {
          const { baptismName, father, mother, doBaptism ,userId} = person;
          return (
            <div className="member-details-div" key={index} onClick={()=>{
              userIdFromAllBaptism=userId;
              navigate('/baptism-registry');
            }}>
              <div className="mar-slno">{index + 1}</div>
              <div className="mar-groom-name">{baptismName ? baptismName : "-"}</div>
              <div className="mar-bride-name">
                {father ? father : "-"}
              </div>
              <div className="mar-celebrant">
                {mother ? mother : "-"}
              </div>
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