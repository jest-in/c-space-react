import React from 'react'
import { useEffect } from 'react';
import Icon_Close from '../Assets/Icon_Close';
import Icon_Menu from '../Assets/Icon_Menu';
import Logo from '../Assets/logo';
import Navigation from '../navigation';
import axios from "axios";
import { useState } from 'react';

export default function Groups() {
  // inputs
  const [groupName, setGroupName] = useState("");
  const [groupNature, setGroupNature] = useState("");

  const [groupNameError, setGroupNameError] = useState("hidden");
  const [groupNatureError, setGroupNatureError] = useState("hidden");

  const [groupDetails, setGroupDetails] = useState([]);

  const [showCreateGroup, setShowCreateGroup] = useState("hidden");

  // create group button
  function inputHandler(event) {
    const { name, value } = event.target;
    if(name==='name'){
      setGroupName(value);
      value ? setGroupNameError("hidden") : setGroupNameError("");
    }
    else {
      value ? setGroupNatureError("hidden") : setGroupNatureError("");
      setGroupNature(value);
    }
    
  }

  // create group button
  function createGroupButton() {
    if(groupName&&groupNature){
      axios
        .post("http://localhost:5000/api/v1/accounts/groups", {
          name:groupName,
          type:groupNature,
        }, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log(res.data);
          if (res.data.status === "success") {
            alert('group added');
            window.location.reload(false);
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
          console.log('Error',err.response);
        });
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/accounts/groups`, {
        withCredentials: true,
      })
      .then((res) => {
        setGroupDetails(res.data.data)
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }, []);
  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="family-master regestries-person-head">
          <h1>Groups</h1>
        </div>
        <div className="baptism-registry-edit-btn-div">
          <button
            className="baptism-edit-btn"
            onClick={() => setShowCreateGroup("")}
          >
            Create Group
          </button>
        </div>
      </div>
      <hr />
      <div className="famili-members-div transactions">
        <div className="heading-div">
          <div className="grp-slno">S.No</div>
          <div className="grp-name">Name</div>
          <div className="grp-nature">Nature of group</div>
          <div className="grp-notrans">No of Transactions</div>
          <div className="grp-total">Total</div>
        </div>
        {groupDetails.map((group, index) => {
          return (
            <div className="member-details-div" key={index}>
              <div className="grp-slno">{index + 1}</div>
              <div className="grp-name">{group.name}</div>
              <div className="grp-nature">{group.type}</div>
            </div>
          );
        })}
      </div>
      <div className={`create-legder-popup-div1 ${showCreateGroup}`}>
        <div
          className="leg-pop-close-div"
          onClick={() => {
            setGroupName("");
            setGroupNature("");
            setShowCreateGroup("hidden");
          }}
        >
          <Icon_Close />
        </div>
        <div className="leg-pop-ledname-div">
          <label>Group name</label>
          <input
            type="text"
            name="name"
            onChange={(event) => inputHandler(event)}
          />
          <label className={`add-family-error ${groupNameError}`} htmlFor="error">
            This field is required
          </label>
        </div>
        <div className="leg-pop-ledgroup-div">
          <label htmlFor>Nature of group</label>
          {/* <input type="text" /> */}
          <select
            name="type"
            id="under-group"
            onChange={(event) => inputHandler(event)}
          >
            <option value selected disabled hidden />
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          <label className={`add-family-error ${groupNatureError}`} htmlFor="error">
            This field is required
          </label>
        </div>
        <button className="led-create-btn" onClick={() => createGroupButton()}>
          Create
        </button>
      </div>
    </div>
  );
}
