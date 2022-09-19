import React from "react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

export default function AddMember() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate = useNavigate();

  // add-member section
  const [showMemberSection,setShowMemberSection]=useState('');
  const [showRelationSection,setShowRelationSection] = useState("hidden");

  // input variables
  const [name, setName] = useState("");
  const [baptismName, setBaptismName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  // input errors
  const [nameError, setNameError] = useState("hidden");
  const [baptismNameError, setBaptismNameError] = useState("hidden");
  const [phoneNumberError, setPhoneNumberError] = useState("hidden");
  const [emailError, setEmailError] = useState("hidden");
  const [genderError, setGenderError] = useState("hidden");
  //input change
  function handleMember(event) {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
      value ? setNameError("hidden") : setNameError("");
    }
    if (name === "baptismName") {
      setBaptismName(value);
      value ? setBaptismNameError("hidden") : setBaptismNameError("");
    }
    if (name === "phoneNumber") {
      setPhoneNumber(value);
      value ? setPhoneNumberError("hidden") : setPhoneNumberError("");
    }
    if (name === "email") {
      setEmail(value);
      value ? setEmailError("hidden") : setEmailError("");
    }
    if (name === "gender") {
      setGender(value);
      value ? setGenderError("hidden") : setGenderError("");
    }
  }
  // submit button
  function submitButton() {
    // id for filtering
    let id;
    if (!name) {
      setNameError("");
    }
    if (!baptismName) {
      setBaptismNameError("");
    }
    if (!phoneNumber) {
      setPhoneNumberError("");
    }
    if (!email) {
      setEmailError("");
    }
    if (!gender) {
      setGenderError("");
    }
    if (name && baptismName && phoneNumber && email && gender) {
      const data = {
        familyId: location.state,
        name: name,
        baptismName: baptismName,
        phoneNumber: phoneNumber,
        email: email,
        gender: gender,
      };
      console.log(data);
      axios
        .post("http://localhost:5000/api/v1/persons/add-member", data, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "success") {
            console.log("success", res.data);
            setPersonId(res.data.data._id);
            id = res.data.data._id;
            console.log("id", res.data.data._id);
            axios
              .get(`http://localhost:5000/api/v1/family/${location.state}`, {
                withCredentials: true,
              })
              .then((res) => {
                const result = res.data.data.members;
                console.log("PERSON ID : ", personId);
                if (res.data.status === "success") {
                  setmembers(result.filter((member) => member._id !== id));
                  setShowMemberSection('hidden');
                  setShowRelationSection('');
                }
              })
              .catch((err) => {
                // Error
                alert(`${err.response.data.message}`);
              });
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
        });
    }
  }

  // Relation add section
  const [personId, setPersonId] = useState("");
  const [personName, setPersonName] = useState("");
  const [personGender, setPersonGender] = useState("");
  const [members, setmembers] = useState([]);

  // Index
  const [indexOfMembersInFamily, setIndexOfMembersInFamily] = useState(0);
  // Hiding father,mother,husband,wife select options
  const [hideFather, setHideFather] = useState("");
  const [hideMother, setHideMother] = useState("");
  const [hideHusband, setHideHusband] = useState("");
  const [hideWife, setHideWife] = useState("");
  // Selections storing
  const [relations, setRelations] = useState({
    sisters: [],
    brothers: [],
    sons: [],
    daughters: [],
  });
  // Temporary relation storage id as key and relation as value
  const [temporaryData, setTemporaryData] = useState({});
  // selection input handler
  function selectionHandler(event, id) {
    const { value } = event.target;
    if (temporaryData[id]) {
      // resetting hidden option of select (show)
      if (temporaryData[id] === "father") setHideFather("");
      if (temporaryData[id] === "mother") setHideMother("");
      if (temporaryData[id] === "husband") setHideHusband("");
      if (temporaryData[id] === "wife") setHideWife("");

      setRelations((prev) => {
        let data = prev;
        // Finding key with value,if key found then delete that key from data object
        if (Object.keys(data).find((key) => data[key] === id)) {
          delete data[Object.keys(data).find((key) => data[key] === id)];
        }
        data.brothers = data.brothers.filter((ele) => ele !== id);
        data.sisters = data.sisters.filter((ele) => ele !== id);
        data.daughters = data.daughters.filter((ele) => ele !== id);
        data.sons = data.sons.filter((ele) => ele !== id);
        return data;
      });
      delete temporaryData[id];
    }

    if (value) {
      setTemporaryData((prev) => {
        let data = prev;
        if (value !== "select") data[id] = value;
        console.log("Data", data);
        return data;
      });
      setRelations((prev) => {
        let data = prev;
        // console.log(data);
        if (
          value === "father" ||
          value === "mother" ||
          value === "husband" ||
          value === "wife"
        ) {
          data[value] = id;
        }
        if (value === "brother") {
          data.brothers.push(id);
        }
        if (value === "sister") {
          data.sisters.push(id);
        }
        if (value === "son") {
          data.sons.push(id);
        }
        if (value === "daughter") {
          data.daughters.push(id);
        }
        console.log("Data after selection", data);
        return data;
      });
    }

    if (value === "father") {
      setHideFather("hidden");
    } else if (value === "mother") {
      setHideMother("hidden");
    } else if (value === "husband") {
      setHideHusband("hidden");
    } else if (value === "wife") {
      setHideWife("hidden");
    }
  }

  // selection component
  function Selection({ props }) {
    const { _id, defaultValue, gender } = props;
    return (
      <select
        defaultValue={defaultValue}
        name="relation"
        id="relation"
        onChange={(event) => selectionHandler(event, _id)}
      >
        <option value="select">select</option>
        <option
          className={`${hideFather} ${gender === "F" ? "hidden" : ""}`}
          value="father"
        >
          Father
        </option>
        <option
          className={`${hideMother} ${gender === "M" ? "hidden" : ""}`}
          value="mother"
        >
          Mother
        </option>
        <option
          className={`${hideHusband} ${gender === "F" ? "hidden" : ""}`}
          value="husband"
        >
          Husband
        </option>
        <option
          className={`${hideWife} ${gender === "M" ? "hidden" : ""}`}
          value="wife"
        >
          Wife
        </option>
        <option className={`${gender === "F" ? "hidden" : ""}`} value="son">
          Son
        </option>
        <option
          className={`${gender === "M" ? "hidden" : ""}`}
          value="daughter"
        >
          Daughter
        </option>
        <option className={`${gender === "F" ? "hidden" : ""}`} value="brother">
          Brother
        </option>
        <option className={`${gender === "M" ? "hidden" : ""}`} value="sister">
          Sister
        </option>
        <option value="other">other</option>
      </select>
    );
  }

  // add member button
  function addMember() {
    if (Object.keys(temporaryData).length !== members.length) {
      alert(`Please enter everyone's relation`);
      return;
    }
    axios
      .post(
        `http://localhost:5000/api/v1/persons/relations/${personId}`,
        relations,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        // console.log(res.data);
        if (res.data.status === "success") {
          // If all members relation are added
          console.log("success");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  useEffect(() => {
    if (!location.state) navigate(-1);
  }, []);
  return (
    <main className={""}>
      <div className={`title-div add-title-div ${showMemberSection}`}>
        <div className="family-master">
          <h1>Member details</h1>
        </div>
      </div>
      <hr />
      <div className={`add-member-details-div ${showMemberSection}`}>
        <div className="row1-div">
          <div className="first-name-div">
            <h1>{personName}</h1>
            <input
              className="house-no-input"
              type="text"
              name="name"
              onChange={(event) => handleMember(event)}
            />
            <label className={`add-family-error ${nameError}`} htmlFor="error">
              This field is required
            </label>
          </div>
          <div className="last-name-div">
            <h1>Baptism name</h1>
            <input
              className="house-no-input"
              type="text"
              name="baptismName"
              onChange={(event) => handleMember(event)}
            />
            <label
              className={`add-family-error ${baptismNameError}`}
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
              onChange={(event) => handleMember(event)}
            />
            <label
              className={`add-family-error ${phoneNumberError}`}
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
              onChange={(event) => handleMember(event)}
            />
            <label className={`add-family-error ${emailError}`} htmlFor="error">
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
                  name="gender"
                  value="M"
                  type="radio"
                  onChange={(event) => handleMember(event)}
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="radio2">
                <input
                  id="female"
                  name="gender"
                  value="F"
                  type="radio"
                  onChange={(event) => handleMember(event)}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <label
              className={`add-family-error ${genderError}`}
              htmlFor="error"
            >
              This field is required
            </label>
          </div>
        </div>
      </div>
      <div className={`create-family-btn-div add-family-submit-btn ${showMemberSection}`}>
        <button onClick={() => submitButton()}>Submit</button>
      </div>
      <div className={`relation-details-container ${showRelationSection}`}>
        <div className="relation-details-head">
          <h1 className="relation-title-head">{baptismName}</h1>
          <h1 className="relation-type-head">Relation Type</h1>
        </div>
        {members.map((person) => {
          const { _id, baptismName, gender } = person;
          // console.log("Id", _id);
          let defaultValue = "select";
          if (temporaryData[_id]) {
            defaultValue = temporaryData[_id];
          }
          return (
            <div className="relatives-entry-div">
              <h1>{baptismName ? baptismName : ""}</h1>
              <Selection props={{ _id, gender, defaultValue }} />
              {/* <select name="relation" id="relation">
      <option value="notApplicable">Not Applicable</option>
      <option value="father">Father</option>
      <option value="mother">Mother</option>
      <option value="husband">Husband</option>
      <option value="wife">Wife</option>
      <option value="son">Son</option>
      <option value="daughter">Daughter</option>
      <option value="brother">Brother</option>
      <option value="sister">Sister</option>
    </select> */}
            </div>
          );
        })}
        <button onClick={() => addMember()}>add member</button>
      </div>
    </main>
  );
}
