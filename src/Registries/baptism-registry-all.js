import React, { useEffect,useState } from 'react'
import Navigation from '../navigation'
import Icon_Filter from '../Assets/Icon_Filter';
import Icon_Search from '../Assets/Icon_Search';
import axios from "axios";


export default function BaptismRegistryAll() {

  // Array of baptism registry
  const [baptismRegistry,setBaptismRegistry]=useState([]);

  useEffect(()=>{
    // Get request for all baptism registry
    // axios.get().then((res)=>{
    //   if(res.data.status==='success'){
        // setBaptismRegistry(res.data.data)
    //   }
    // })
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="family-master">
          <h1>Baptism Registry</h1>
        </div>
        <div className="search-div">
          <input type="text" name="search-name" placeholder="Search" id />
          <Icon_Search />
        </div>
        <div className="filter-div">
          <Icon_Filter />
        </div>
      </div>
      <hr />
      <div className={`famili-members-div transactions ${baptismRegistry.length?'':'hidden'}`}>
        <div className="heading-div">
          <div className="mar-slno">S.No</div>
          <div className="mar-groom-name">Name</div>
          <div className="mar-bride-name">Fathers Name</div>
          <div className="mar-celebrant">Mothers Name</div>
          <div className="mar-date">Date</div>
        </div>
        {baptismRegistry.map((person, index) => {
          const { name, godFather, godMother, doBaptism } = person;
          const { godFatherName = name } = godFather;
          const { godMotherName = name } = godMother;
          return (
            <div className="member-details-div">
              <div className="mar-slno">{index + 1}</div>
              <div className="mar-groom-name">{name ? name : "-"}</div>
              <div className="mar-bride-name">
                {godFatherName ? godFatherName : "-"}
              </div>
              <div className="mar-celebrant">
                {godMotherName ? godMotherName : "-"}
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
