import React from "react";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import Arrow from "./Assets/Arrow";
import Icon_Add from "./Assets/Icon_Add";
import Icon_Close from "./Assets/Icon_Close";
import Icon_Filter from "./Assets/Icon_Filter";
import Icon_Search from "./Assets/Icon_Search";

import axios from "axios";
import Navigation from "./navigation";
import Chart from "./pieChart";

const url = "http://localhost:5000/api/v1/family";

let id;
let personIdFromFamily;

export default function Family() {
  //For dynamic updation of families data
  const [families, setFamilies] = useState([]);

  // Family-Name
  const [familyName, setFamilyName] = useState("");

  // For dynamic updation of individual family details
  const [family, setFamily] = useState([]);

  // search filter
  const [search,setSearch]=useState('');
  function searchIconButton(){
    axios
      .get(
        `http://localhost:5000/api/v1/family?${search?`familyName=${search}`:''}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setFamilies(res.data.data);
        setFamilyName(res.data.data[0].familyName);
        // id of first femmber of family
        id = res.data.data[0]._id;
        // function for get request of family members
        getRequest(id);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  // filter section
  const [showFilter, setShowFilter] = useState("hidden");
  const [wardNum,setWardNum]=useState('');
  const [houseNum, setHouseNum] = useState("");
  const [members, setMembers] = useState("");
  const [sort, setSort] = useState("");
  // filter input handler
  function filterInput(event){
    const {name,value}=event.target;
    if(name==='wardNum') setWardNum(value);
    if (name === "houseNum") setHouseNum(value);
    if (name === "members") setMembers(value);
    if (name === "sort") setSort(value);
  }
  // apply button
  function applyButton() {
    setSearch('');
    console.log('Apply clicked:',wardNum,houseNum,members,sort);
    axios
      .get(
        `http://localhost:5000/api/v1/family?${
          wardNum ? `wardNum=${wardNum}&` : ""
        }${houseNum ? `houseNum=${houseNum}&` : ""}${
          members ? `members=${members}&` : ""
        }${sort?'sort=-familyName':''}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setFamilies(res.data.data);
        setFamilyName(res.data.data[0].familyName);
        // id of first femmber of family
        id = res.data.data[0]._id;
        // function for get request of family members
        getRequest(id);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
    setWardNum("");
    setMembers("");
    setSort("");
    setHouseNum("");
    setShowFilter("hidden");
  }
  // close filter
  function closeFilter() {
    console.log("close clicked:");
    setWardNum('');
    setMembers('');
    setSort('');
    setHouseNum('');
    setShowFilter('hidden')
  }

  useEffect(() => {
    //Requesting families data (GET)
    axios
      .get(url, {
        withCredentials: true,
      })
      .then((res) => {
        setFamilies(res.data.data);
        setFamilyName(res.data.data[0].familyName);
        // id of first femmber of family
        id = res.data.data[0]._id;
        // function for get request of family members
        getRequest(id);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }, []);

  //function for requesting individual family details
  function familyDetails(index) {
    id = families[index]._id;

    setFamilyName(families[index].familyName);

    getRequest(id);
  }

  // Get request with family id
  function getRequest(id){
        axios
          .get(`${url}/${id}`, {
            withCredentials: true,
          })
          .then((res) => {
            const result = res.data.data;
            setFamily(result.members);
          })
          .catch((err) => {
            // Error
            alert(`${err.response.data.message}`);
          });
  }

  // Navigation
  const navigate = useNavigate();

  return (
    <>
      <div className="families-container">
        <div className={`filter-popup-bg ${showFilter}`}>
          <div className={`filter-popup-container ${showFilter}`}>
            <div
              className="filter-close-icon-div"
              onClick={() => closeFilter()}
            >
              <Icon_Close />
            </div>
            <div className="filter-on-ward-div">
              <div className="filter-on-ward-title">
                <label htmlFor>Ward</label>
              </div>
              <div className="filter-on-ward-input">
                <input
                  className="filter-on-ward-tb"
                  name="wardNum"
                  type="text"
                  value={wardNum}
                  onChange={(event) => filterInput(event)}
                />
              </div>
            </div>
            <div className="filter-on-house-no-div">
              <div className="filter-on-ward-title">
                <label htmlFor>House number</label>
              </div>
              <div className="filter-on-ward-input">
                <input
                  className="filter-on-ward-tb"
                  name="houseNum"
                  value={houseNum}
                  onChange={(event) => filterInput(event)}
                />
              </div>
            </div>
            <div className="filter-on-house-no-div">
              <div className="filter-on-ward-title">
                <label htmlFor>Number of members</label>
              </div>
              <div className="filter-on-ward-input">
                <input
                  className="filter-on-ward-tb"
                  name="members"
                  value={members}
                  onChange={(event) => filterInput(event)}
                />
              </div>
            </div>
            <div className="filter-on-sort-div">
              <div className="filter-on-ward-title">
                <label htmlFor>Sort</label>
              </div>
              <div className="filter-on-ward-input">
                <div className="radio-div">
                  {/* <div className="radio1">
                    <input
                      id="male"
                      name="sort"
                      type="radio"
                      value="on"
                      checked={sort === "on" ? true : false}
                      onChange={(event) => filterInput(event)}
                    />
                    <label htmlFor="male">A-Z</label>
                  </div> */}
                  <div className="radio2">
                    <input
                      id="rb1"
                      name="sort"
                      type="radio"
                      value="on"
                      checked={sort === "on" ? true : false}
                      onChange={(event) => filterInput(event)}
                    />
                    <label htmlFor="rb1">Z-A</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="filter-apply-div">
              <button
                className="filter-apply-button"
                onClick={() => applyButton()}
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        <Navigation />
        <div className="graph-div">
          <Chart />
        </div>
        <div className="secondary-nav-div">
          <div className="secondary-nav-subdiv1">
            <div className="sub1-head">
              <div className="sub1-heading">
                <h1>Families</h1>
              </div>
              <div className="families-search-div">
                <input
                  type="text"
                  name="search-name"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search by family"
                />
                <div className="families-search-icon" onClick={()=>searchIconButton()}>
                  <Icon_Search />
                </div>
              </div>
              <div className="filter-div" onClick={() => setShowFilter("")}>
                <Icon_Filter />
              </div>
            </div>
            <div className="filter-area hidden">
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
                    onClick={() => familyDetails(index)}
                  >
                    <h1>{family.familyName}</h1>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="secondary-nav-subdiv2">
            <div className="sub-div2-content">
              {family.length ? (
                <>
                  <div className="sub2-head">
                    <div className="sub2-heading">
                      <h1>{familyName}</h1>
                    </div>
                    <div
                      className="view-detail-div"
                      onClick={() => {
                        if (family[0].familyId) {
                          navigate("/family-individual", {
                            state: family[0].familyId,
                          });
                        }
                      }}
                    >
                      <h1>View in detail</h1>
                      <Arrow />
                    </div>
                  </div>
                  <hr />
                  <div className="sub2-content-head">
                    <div className="sub2-name-div">
                      <h1>Baptism Name</h1>
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
                    <h1>No members in {familyName}</h1>
                  </div>
                </div>
              )}
              {family.map((person, index) => {
                const { baptismName, dob, phoneNumber, _id } = person;
                return (
                  <div
                    className="sub2-content"
                    key={index}
                    onClick={() => {
                      personIdFromFamily = id;
                      navigate("/person", {
                        state: _id,
                      });
                    }}
                  >
                    <div className="sub2-name-div">
                      <h1>{baptismName ? baptismName : "-"}</h1>
                    </div>
                    <div className="sub2-dob-div">
                      <h1>{dob ? dob.split("T")[0] : "-"}</h1>
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
export { id, url, personIdFromFamily };
