import React, { useEffect } from "react";
import IconUpload from "./Assets/Icon_Upload";
import AddSection from "./Assets/add-section";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "./navigation";

// let data = {};
// data["parishId"] = "ch1";

// variables for family_id and ward number
let  wardNo = "";
let  familyId;
export default function AddFamily() {
  // For navigation
  const navigate = useNavigate();

  // function initializeData() {
  //   data = {};
  // }

  const [data,setData]=useState({parishId:"ch1",});
  const [familyId, setFamilyId] = useState('');
  const [wardNo, setWardNo] = useState('');

  // Add family inputs raedonly mode desciding section
  const [readOnlyMode,setReadOnlyMode]=useState(false);

  // Adding members details section
  const [memberDetailSection, setMemberDetailSection] = useState("hidden");

  // Create family button display/hide
  const [createFamilyButton, setCreateFamilyButton] = useState("");

  // Error fields
  const [houseNameError, setHouseNameError] = useState("hidden");
  const [hoseNumError, setHoseNumError] = useState("hidden");
  const [addressError, setAddressError] = useState("hidden");
  const [wardNumError, setWardNumError] = useState("hidden");
  const [pincodeError, setPincodeError] = useState("hidden");

  // Mandatory fields handling function
  function checkInputs(name, value) {
    // console.log(name, value);
    if (name === "familyName") {
      value ? setHouseNameError("hidden") : setHouseNameError("");
    } else if (name === "houseNum") {
      value ? setHoseNumError("hidden") : setHoseNumError("");
    } else if (name === "address") {
      value ? setAddressError("hidden") : setAddressError("");
    } else if (name === "wardNum") {
      value ? setWardNumError("hidden") : setWardNumError("");
    } else if (name === "pin") {
      value ? setPincodeError("hidden") : setPincodeError("");
    }
  }

  // Post family details to server
  function postFamilyDetails() {
    if (data.pin.length !== 6 || isNaN(data.pin)){
      alert("Enter valid pincode");
      return
    }if (isNaN(data.houseNum)) {
      alert("Enter valid house number");
      return;
    }
    // Show create family button if data consists the required fields
    if (data) {
      const { familyName, houseNum, address, wardNum, pin } = data;
      if (familyName && houseNum && address && wardNum && pin) {
        console.log("correct data");
        axios
          .post("http://localhost:5000/api/v1/family", data, {
            withCredentials: true,
          })
          .then((res) => {
            // console.log(res.data);
            if (res.data.status === "success") {
              // initializeData();
              const { _id, wardNum } = res.data.data;
              // familyId=_id;
              setFamilyId(_id);
              // wardNo = wardNum;
              setWardNo(wardNum);
              setCreateFamilyButton("hidden");
              setData({})
              setReadOnlyMode(true);
              setMemberDetailSection("");
            }
          })
          .catch((err) => {
            // Error
            alert(`${err.response.data.message}`);
          });
      }
    }
  }

  function handleChange(event) {
    // Destructuring name and value
    const { name, value } = event.target;

    // Storing values to the data object
    setData((prev)=>{
      let data=prev;
      data[name] = value;
      return data;
    })
    // data[name] = value;

    // console.log(data);
    checkInputs(name, value);
  }

  // For Member section

  // Member data array
  const [members, setMembers] = useState([{}]);

  // Member section error array
  const [membersError, setMembersError] = useState([
    {
      nameError: "",
      baptismNameError: "",
      phoneNumError: "",
      emailError: "",
      genderError: "",
    },
  ]);

  // Function handling inputs
  function handleMember(event, index) {
    const { name, value } = event.target;
    let list = [...members];
    // if the name and index are same then the input is from gender selection(M/F)
    list[index][name === index.toString()?'gender':name] = value;
    setMembers(list);
    console.log(list);
    if (name === "gender"){
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["genderError"] = "hidden";
        else list[index]["genderError"] = "";
        return list;
      });
    }
    if (name === "name") {
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["nameError"] = "hidden";
        else list[index]["nameError"] = "";
        return list;
      });
    } else if (name === "baptismName"){
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["baptismNameError"] = "hidden";
        else list[index]["baptismNameError"] = "";
        return list;
      });
    }
    else if (name === "phoneNumber"){
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["phoneNumError"] = "hidden";
        else list[index]["phoneNumError"] = "";
        return list;
      });
    }
    else if (name === "email"){
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["emailError"] = "hidden";
        else list[index]["emailError"] = "";
        return list;
      });
    }
    else if (name === "gender"){
      setMembersError((prev) => {
        let list = [...prev];
        if (value) list[index]["genderError"] = "hidden";
        else list[index]["genderError"] = "";
        return list;
      });
    }
  }

  // Handling submit button
  function submitButton() {
    let error = false;
    for (let i = 0; i < members.length; i++) {
      if( isNaN(members[i]['phoneNumber'])||members[i]['phoneNumber'].length!==10){
        alert("Enter valid phone number");
        error = true;
        break;
      }
      if (Object.keys(members[i]).length !== 5) {
        alert('check whether you have entered all details');
        error = true;
        break;
      }
    }
    if (!error) {
      const data = {
        familyId: familyId,
        wardNo: wardNo.toString(),
        persons: members,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/api/v1/persons/add", data, {
          withCredentials: true,
        })
        .then((res) => {
          // console.log("RES : ",res)
          if (res.data.status === "success"){
            // initialize();
            setTimeout(nav, 2000);
            function nav() {
              navigate("/add-family-relation", {
                state: familyId,
              });
            }
          } 
          
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
        });
    }
  }

  return (
    <div className="container-family">
      <Navigation/>
      <div className="title-div add-title-div">
        <div className="family-master">
          <h1>Add family</h1>
        </div>
      </div>
      <hr />
      <div className="family-details-div">
        <div className="family-entries">
          <div className="inner-div-1">
            <div className="house-name-div">
              <h1>House name</h1>
              <input
                className="house-name-input"
                name="familyName"
                type="text"
                readOnly={readOnlyMode}
                onChange={(event) => handleChange(event)}
              />
              <label
                className={`add-family-error ${
                  houseNameError ? houseNameError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
            <div className="address-div">
              <h1>Address</h1>
              <textarea
                className="address-input"
                onChange={(event) => handleChange(event)}
                name="address"
                cols="13"
                rows="4"
                readOnly={readOnlyMode}
              ></textarea>
              <label
                className={`add-family-error ${
                  addressError ? addressError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
          </div>
          <div className="inner-div-2">
            <div className="houseno-div">
              <h1>House No</h1>
              <input
                className="house-no-input"
                onChange={(event) => handleChange(event)}
                name="houseNum"
                type="text"
                readOnly={readOnlyMode}
              />
              <label
                className={`add-family-error ${
                  hoseNumError ? hoseNumError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
            <div className="ward-div">
              <h1>Ward No</h1>
              <input
                className="house-no-input"
                onChange={(event) => handleChange(event)}
                name="wardNum"
                type="text"
                readOnly={readOnlyMode}
              />
              <label
                className={`add-family-error ${
                  wardNumError ? wardNumError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
            <div className="pincode-div">
              <h1>Pincode</h1>
              <input
                className="house-no-input"
                onChange={(event) => handleChange(event)}
                name="pin"
                type="text"
                readOnly={readOnlyMode}
              />
              <label
                className={`add-family-error ${
                  pincodeError ? pincodeError : ""
                }`}
                htmlFor="error"
              >
                This field is required
              </label>
            </div>
          </div>
        </div>
        <div className="family-photo">
          <div className="upload-btn">
            <h1>Family photo</h1>
            <IconUpload />
          </div>
          <div className="photo-container">
            <img
              src={require("./Assets/family-photo.png")}
              alt="family photo"
            />
          </div>
        </div>
      </div>
      <div className="create-family-btn-div">
        <button
          className={createFamilyButton}
          onClick={() => postFamilyDetails()}
        >
          Create Family
        </button>
      </div>

      <main className={memberDetailSection}>
        <div className="title-div add-title-div">
          <div className="family-master">
            <h1>Member details</h1>
          </div>
        </div>
        <hr />
        {members.map((_, index) => {
          return (
            <div className="add-member-details-div" key={index}>
              <div className="row1-div">
                <div className="first-name-div">
                  <h1>Name</h1>
                  <input
                    className="house-no-input"
                    type="text"
                    name="name"
                    onChange={(event) => handleMember(event, index)}
                  />
                  <label
                    className={`add-family-error ${
                      membersError[index].nameError ? "hidden" : ""
                    }`}
                    htmlFor="error"
                  >
                    This field is required
                  </label>
                </div>
                <div className="last-name-div">
                  <h1>Baptism name</h1>
                  <input
                    className="house-no-input"
                    type="text"
                    name="baptismName"
                    onChange={(event) => handleMember(event, index)}
                  />
                  <label
                    className={`add-family-error ${
                      membersError[index].baptismNameError ? "hidden" : ""
                    }`}
                    htmlFor="error"
                  >
                    This field is required
                  </label>
                </div>
                <div className="contact-no-div">
                  <h1>Phone Number</h1>
                  <input
                    className="house-no-input"
                    type="text"
                    name="phoneNumber"
                    onChange={(event) => handleMember(event, index)}
                  />
                  <label
                    className={`add-family-error ${
                      membersError[index].phoneNumError ? "hidden" : ""
                    }`}
                    htmlFor="error"
                  >
                    This field is required
                  </label>
                </div>
                <div className="email-div">
                  <h1>Email</h1>
                  <input
                    className="house-no-input"
                    type="text"
                    name="email"
                    onChange={(event) => handleMember(event, index)}
                  />
                  <label
                    className={`add-family-error ${
                      membersError[index].emailError ? "hidden" : ""
                    }`}
                    htmlFor="error"
                  >
                    This field is required
                  </label>
                </div>
              </div>
              <div className="row2-div">
                <div className="gender-div">
                  <h1>Gender</h1>
                  <div className="radio-div">
                    <div className="radio1">
                      <input
                        id="male"
                        name={index}
                        value="M"
                        type="radio"
                        onChange={(event) => handleMember(event, index)}
                      />
                      <label htmlFor="male">Male</label>
                    </div>
                    <div className="radio2">
                      <input
                        id="female"
                        name={index}
                        value="F"
                        type="radio"
                        onChange={(event) => handleMember(event, index)}
                      />
                      <label htmlFor="female">Female</label>
                    </div>
                  </div>
                  <label
                    className={`add-family-error ${
                      members[index].gender ? "hidden" : ""
                    }`}
                    htmlFor="error"
                  >
                    This field is required
                  </label>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="add-section-div"
          onClick={() => {
            setMembers([...members, {}]);
            setMembersError([
              ...membersError,
              {
                nameError: "",
                baptismNameError: "",
                phoneNumError: "",
                emailError: "",
                genderError: "",
              },
            ]);
          }}
        >
          <AddSection />
        </div>
        <div className="create-family-btn-div add-family-submit-btn">
          <button onClick={() => submitButton()}>Submit</button>
        </div>
      </main>
    </div>
  );
}

export {familyId};