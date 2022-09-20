import React from 'react'
import Icon_Close from '../Assets/Icon_Close';
import Icon_Menu from '../Assets/Icon_Menu'
import Logo from '../Assets/logo'
import Navigation from '../navigation';
import axios from "axios";
import { useEffect,useState } from "react";

export default function Ledgers() {
  // inputs
  const [ledgerName, setLedgerName] = useState("");
  // const [under, setUnder] = useState("");

  const [ledgerNameError, setLedgerNameError] = useState("hidden");
  // group name
  // const [underError, setUnderError] = useState("hidden");
  // selected
  const [groupId,setGroupId]=useState('');

  const [showCreateLedger, setShowCreateLedger] = useState("hidden");

  const [ledgerDetails, setLedgerDetails] = useState([]);
  const [groupDetails, setGroupDetails] = useState([]);

  // create group button
  function inputHandler(event) {
    const { name, value } = event.target;
    console.log("Inputs:", name, value);
    // if (name === "name") {
      setLedgerName(value);
      value ? setLedgerNameError("hidden") : setLedgerNameError("");
    // } 
    // else {
    //   value ? setUnderError("hidden") : setUnderError("");
    //   setUnder(value);
    // }
  }
  function selectClick(id,name){
    // setUnder(name);
    setGroupId(id);
    console.log("Inputs:", id);
  }

  // create ledger button
  function onCreateLedger(){
    axios
      .get(`http://localhost:5000/api/v1/accounts/groups`, {
        withCredentials: true,
      })
      .then((res) => {
        setShowCreateLedger('');
        setGroupDetails(res.data.data);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  // create group button
  function createButton() {
    if (ledgerName && groupId) {
      axios
        .post(
          "http://localhost:5000/api/v1/accounts/ledgers",
          {
            groupId: groupId,
            name: ledgerName,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data.status === "success") {
            alert("ledgers added");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
          console.log("Error", err.response);
        });
    }
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/accounts/ledgers`, {
        withCredentials: true,
      })
      .then((res) => {
        setLedgerDetails(res.data.data);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }, []);
  return (
    <div className="container-family">
      <div className={`create-legder-popup-div1 ${showCreateLedger}`}>
        <div
          className="leg-pop-close-div"
          onClick={() => {
            setLedgerName("");
            setShowCreateLedger("hidden");
          }}
        >
          <Icon_Close />
        </div>
        <div className="leg-pop-ledname-div">
          <label>Ledger name</label>
          <input type="text" onChange={(event)=>inputHandler(event)} />
          <label className={`add-family-error  ${ledgerNameError}`} htmlFor="error">
            This field is required
          </label>
        </div>
        <div className="leg-pop-ledgroup-div">
          <label>Under</label>
          {/* <input type="text" /> */}
          <select name="relation" id="under-group" >
            <option value selected disabled hidden />
            {groupDetails.map((group)=>{
              return <option onClick={()=>selectClick(group._id,group.name)}>{group.name}</option>;
            })}
          </select>
          <label className={`add-family-error hidden`} htmlFor="error">
            This field is required
          </label>
        </div>
        <button className="led-create-btn" onClick={()=>createButton()}>Create</button>
      </div>

      <Navigation />
      <div className="title-div">
        <div className="family-master">
          <h1>Ledgers</h1>
        </div>
        <div className="baptism-registry-edit-btn-div">
          <button
            className="create-led-btn"
            onClick={() =>onCreateLedger()}
          >
            Create Ledger
          </button>

          <button
            className="create-led-btn"
            onClick={() =>onCreateLedger()}
          >
            Download Statement
          </button>
        </div>
      </div>
      <hr />
      <div className="famili-members-div transactions">
        <div className="heading-div">
          <div className="led-slno">S.No</div>
          <div className="led-name">Name</div>
          <div className="led-under">Under Group</div>
          <div className="led-type">Type</div>
        </div>
        {ledgerDetails.map((ledger, index) => {
          return (
            <div className="member-details-div" key={index}>
              <div className="led-slno">{index + 1}</div>
              <div className="led-name">{ledger.name}</div>
              <div className="led-under">{ledger.groupName}</div>
              <div className="led-type">{ledger.type}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
