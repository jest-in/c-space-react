import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Arrow from "./Assets/Arrow";
import Icon_Add from "./Assets/Icon_Add";
import Icon_Close from "./Assets/Icon_Close";
import Icon_Filter from "./Assets/Icon_Filter";
import Icon_Menu from "./Assets/Icon_Menu";
import Icon_Search from "./Assets/Icon_Search";
import Logo from "./Assets/logo";

import axios from "axios";
import Icon_AddWhite from "./Assets/Icon_AddWhite";

const url = "http://localhost:5000/api/v1/family";

let id = "";

export default function Family() {
  //For dynamic updation of families data
  const [families, setFamilies] = useState([]);

  // Family-Name
  const [familyName, setFamilyName] = useState("");

  // For dynamic updation of individual family details
  const [family, setFamily] = useState([]);

  useEffect(() => {
    //Requesting families data (GET)
    axios.get(url).then((res) => {
      setFamilies(res.data.data);
      setFamilyName(res.data.data[0].familyName);

      id = res.data.data[0]._id;

      getRequest(id);
    });
  }, []);

  //function for requesting individual family details
  function FamilyDetails(index) {
    id = families[index]._id;

    setFamilyName(families[index].familyName);

    getRequest(id);
  }

  // Get request with family id
  function getRequest(id){
        axios.get(`${url}/${id}`).then((res) => {
          const result = res.data.data;
          setFamily(result.members);
        });
  }

  // Navigation
  const navigate = useNavigate();

  return (
    <>
      <div className="families-container">
        <header>
          <div className="nav-div">
            <nav>
              <div className="logo-div">
                <Logo />
              </div>
              <div className="navigations">
                <a href="#">Overview</a>
                <a className="registry-nav" href="#">
                  Registries
                  <div className="sub-menu1-div">
                    <ul>
                      <div className="sub-menu-registries-div">
                        <li>Family Registry</li>
                        <li onClick={() => navigate("/add-family")}>
                          <Icon_AddWhite />
                          Add Family
                        </li>
                      </div>
                      <li>Engagement Registry</li>
                      <li>Marriage Registry</li>
                      <li>Death Reigistry</li>
                    </ul>
                  </div>
                </a>
                <a href="#">Transactions</a>
                <a href="#">Pious Associations</a>
              </div>
            </nav>
          </div>
        </header>
        <div className="graph-div">{/* graph goes here */}</div>
        <div className="secondary-nav-div">
          <div className="secondary-nav-subdiv1">
            <div className="sub1-head">
              <div className="sub1-heading">
                <h1>Families</h1>
              </div>
              <div className="families-search-div">
                <input type="text" name="search-name" placeholder="Search" />
                <Icon_Search />
              </div>
              <div className="filter-div">
                <Icon_Filter />
              </div>
            </div>
            <div className="filter-area">
              <div className="filters-head">
                <h1>Has 3 children</h1>
                <div>
                  <Icon_Close />
                </div>
              </div>
              <div className="add-filter">
                <Icon_Add />
              </div>
            </div>
            <hr />
            <div className="sub-div-content">
              {families.map((family, index) => {
                return (
                  <div
                    className="sub-entries"
                    key={family._id}
                    onClick={() => FamilyDetails(index)}
                  >
                    <h1>{family.familyName}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="secondary-nav-subdiv2">
            <div className="sub-div2-content">
              {familyName ? (
                <>
                  <div className="sub2-head">
                    <div className="sub2-heading">
                      <h1>{familyName}</h1>
                    </div>
                    <div
                      className="view-detail-div"
                      onClick={() => {
                        navigate("/family-individual");
                      }}
                    >
                      <h1>View in detail</h1>
                      <Arrow />
                    </div>
                  </div>
                  <hr />
                  <div className="sub2-content-head">
                    <div className="sub2-name-div">
                      <h1>Name</h1>
                    </div>
                    <div className="sub2-dob-div">
                      <h1>Date of Birth</h1>
                    </div>
                    <div className="sub2-phone-div">
                      <h1>Phone number</h1>
                    </div>
                  </div>
                </>
              ) : (
                <div className="sub2-content-head">
                  <div className="sub2-dob-div">
                    <h1>Nothing</h1>
                  </div>
                </div>
              )}
              {family.map((person, index) => {
                const { name, dob, phoneNumber } = person;

                // converting dob to a date string
                let dofb = new Date(dob);
                const dobString = dofb.toDateString();
                return (
                  <div className="sub2-content" key={index}>
                    <div className="sub2-name-div">
                      <h1>
                        {name?name:'-'}
                      </h1>
                    </div>
                    <div className="sub2-dob-div">
                      <h1>{dobString ? dobString : "-"}</h1>
                    </div>
                    <div className="sub2-phone-div">
                      <h1>{phoneNumber ? phoneNumber : "-"}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// created to use while viewing in detail about individual family
export { id, url };
