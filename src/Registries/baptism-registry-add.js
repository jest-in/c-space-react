import React from 'react'
import { useEffect,useState } from 'react';
import Navigation from '../navigation';
import axios from "axios";
import {personId} from '../person';
import IconUpload from '../Assets/Icon_Upload';
import Icon_Filter from '../Assets/Icon_Filter';
import Icon_Menu from '../Assets/Icon_Menu';
import { useNavigate } from "react-router-dom";

// Template of request data
let requestTemplate = {
  baptismName: "",
  name: "",
  familyName: "",
  father: "",
  mother: "",
  place: "",
  dob: "",
  doBaptism: "",
  minister: "",
  parishPriest: "",
};
let godFather={

}
let godMother={

}

export default function BaptismRegistryadd() {
  const navigate = useNavigate();

  // Submit button 
  const [submitButtonHide,setSubmitButtonHide]=useState('');

  // For fields which are present in database
  const [personData, setPersonData] = useState({});

  // For baptism name
  const [baptismName, setBaptismName] = useState("");

  // For name name
  const [name, setName] = useState("");

  // For family name
  const [familyName, setFamilyName] = useState("");

  // Father name
  const [fatherName, setFatherName] = useState("");

  // Mother name
  const [motherName, setMotherName] = useState("");

  // Error use state
  const [motherNameError, setMotherNameError] = useState("hidden");
  const [fatherNameError, setFatherNameError] = useState("hidden");
  const [familyNameError, setFamilyNameError] = useState("hidden");
  const [nameError, setNameError] = useState("hidden");
  const [baptismNameError, setBaptismNameError] = useState("hidden");
  const [dobError,setDobError]=useState('hidden');
  const [doBaptismError,setDoBaptismError] = useState("hidden");
  const [placeError,setPlaceError] = useState("hidden");
  const [godFatherNameError,setGodFatherNameError] = useState("hidden");
  const [godMotherNameError,setGodMotherNameError] = useState("hidden");
  const [godFatherParishError, setGodFatherParishError] = useState("hidden");
  const [godMotherParishError,setGodMotherParishError] = useState("hidden");
  const [ministerError,setMinisterError] = useState("hidden");
  const [parishPriestError,setParishPriestError] = useState("hidden");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/persons/id/${personId}`)
      .then((res) => {
        const result = res.data.person;

        if (res.data.status === "success") {
          // If father,mother details of the person present in database
          // if(result.father) and if(result.mother)
          // Get request

          setPersonData(result);
        } else navigate("/person");
      });
  }, []);

  // Inputs handler
  function inputsHandler(event) {
    const { name, value } = event.target;
    console.log("Name:", name);
    console.log("Value:", value);
    if (name === "father") {
      if (value) {
        setFatherNameError("hidden");
      } else {
        setFatherNameError("");
      }
      setFatherName(value);
    } else if (name === "mother") {
      if (value) {
        setMotherNameError("hidden");
      } else {
        setMotherNameError("");
      }
      setMotherName(value);
    } else if (name === "familyName") {
      if (value) {
        setFamilyNameError("hidden");
      } else {
        setFamilyNameError("");
      }
      setFamilyName(value);
    } else if (name === "name") {
      if (value) {
        setNameError("hidden");
      } else {
        setNameError("");
      }
      setName(value);
    } else if (name === "baptismName") {
      if (value) {
        setBaptismNameError("hidden");
      } else {
        setBaptismNameError("");
      }
      setBaptismName(value);
    } else if (name === "place") {
      if (value) {
        setPlaceError("hidden");
      } else {
        setPlaceError("");
      }
    } else if (name === "dob") {
      if (value) {
        setDobError("hidden");
      } else {
        setDobError("");
      }
    } else if (name === "doBaptism") {
      if (value) {
        setDoBaptismError("hidden");
      } else {
        setDoBaptismError("");
      }
    } else if (name === "godFatherName") {
      if (value) {
        setGodFatherNameError("hidden");
      } else {
        setGodFatherNameError("");
      }
    } else if (name === "godFatherParish") {
      if (value) {
        setGodFatherParishError("hidden");
      } else {
        setGodFatherParishError("");
      }
    } else if (name === "godMotherName") {
      if (value) {
        setGodMotherNameError("hidden");
      } else {
        setGodMotherNameError("");
      }
    } else if (name === "godMotherParish") {
      if (value) {
        setGodMotherParishError("hidden");
      } else {
        setGodMotherParishError("");
      }
    } else if (name === "minister") {
      if (value) {
        setMinisterError("hidden");
      } else {
        setMinisterError("");
      }
    } else if (name === "parishPriest") {
      if (value) {
        setParishPriestError("hidden");
      } else {
        setParishPriestError("");
      }
    } 
    // If remarks have null value
    if (name === "remarks" && !value) {
      return;
    }
    if(name==='godFatherName'){
      console.log('GodFatherName');
      godFather['name']=value;
      return
    }
    if (name === "godFatherParish"){
      godFather["parish"] = value;
      console.log(godFather);
      return
    } 
    if (name === "godMotherName"){
      godMother["name"] = value;
      return
    }
    if (name === "godMotherParish"){
      godMother["parish"] = value;
      return
    } 
    requestTemplate[name] = value;
  }

  function submitButton() {
    // If data from database has value but requestTemplate has no value
    if (!requestTemplate.familyName && familyName) {
      requestTemplate.familyName=familyName;
    }
    if (!requestTemplate.name && name) {
      requestTemplate.name=name;
    }
    if (!requestTemplate.baptismName && baptismName) {
      requestTemplate.baptismName = baptismName;
    }
    if (!requestTemplate.father && fatherName) {
      requestTemplate.father = fatherName;
    }
    if (!requestTemplate.mother && motherName) {
      requestTemplate.mother = motherName;
    }

    // If input fields are empty
    let error=false;
    if (!requestTemplate.familyName && !familyName) {
      error=true;
      setFamilyNameError('');
    }
    if (!requestTemplate.name && !name) {
      error = true;
      setNameError('');
    }
    if (!requestTemplate.baptismName && !baptismName) {
      error = true;
      setBaptismNameError('');
    }
    if (!requestTemplate.father && !fatherName) {
      error = true;
      setFatherNameError('');
    }
    if (!requestTemplate.mother && !motherName) {
      error = true;
      setMotherNameError('');
    }
    if (!requestTemplate.place) {
      error = true;
      setPlaceError('');
    }
    if (!requestTemplate.dob) {
      error = true;
      setDobError("");
    }
    if (!requestTemplate.doBaptism) {
      error = true;
      setDoBaptismError('');
    }
    if (!godFather.name) {
      error = true;
      setGodFatherNameError("");
    }
    if (!godFather.parish) {
      error = true;
      setGodFatherParishError('');
    }
    if (!godMother.name) {
      console.log(godMother);
      error = true;
      setGodMotherNameError("");
    }
    if (!godMother.parish) {
      error = true;
      setGodMotherParishError("");
    }
    if (!requestTemplate.minister) {
      error = true;
      setMinisterError("");
    }
    if (!requestTemplate.parishPriest) {
      error = true;
      setParishPriestError("");
    }

    // If no error
    if(!error){
      setSubmitButtonHide('hidden');
      requestTemplate['godFather']=godFather;
      requestTemplate['godMother']=godMother;
      console.log('Correct data:',requestTemplate);
      axios
        .post(
          `http://localhost:5000/api/v1/registry/baptism-registry/${personId}`,
          requestTemplate,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data.status === "success") {
            console.log("success");
            navigate(-1);
          }
          else setSubmitButtonHide('');
        });
    }
  }
  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>{personData.name ? personData.name : "-"}</h1>
        </div>
        <div className="registries-nav-div">
          <a href="/baptism-registry-all">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className="menu-div">
          <Icon_Menu />
        </div>
      </div>
      <hr />
      <div className="members-entries-div">
        <div className="registry-div">
          <div className="registry-details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                <input
                  type="text"
                  name="baptismName"
                  value={baptismName ? baptismName : ""}
                  onChange={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${baptismNameError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input
                  type="text"
                  name="name"
                  value={name ? name : ""}
                  onChange={(event) => inputsHandler(event)}
                />
                <label
                  htmlFor="error"
                  className={`add-family-error ${nameError}`}
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                <input
                  type="text"
                  name="familyName"
                  value={familyName ? familyName : ""}
                  onChange={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${familyNameError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input
                  type="text"
                  name="father"
                  value={fatherName ? fatherName : ""}
                  onChange={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${fatherNameError  }`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input
                  type="text"
                  name="mother"
                  value={motherName ? motherName : ""}
                  onChange={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${motherNameError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            {/* <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div> */}
            <div className="death-person-ward-div">
              <div className="heading-ward">Birth Place</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="place"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${placeError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            {/* <div className="death-person-address-div">
              <div className="heading-address">Address</div>
              <div className="person-death-address">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div> */}
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Birth</div>
              <div className="person-death-ward">
                <input
                  type="date"
                  name="dob"
                  placeholder="DD-MM-YYYY"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${dobError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Baptism</div>
              <div className="person-death-ward">
                <input
                  type="date"
                  name="doBaptism"
                  placeholder="DD-MM-YYYY"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${doBaptismError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godfather</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="godFatherName"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${godFatherNameError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godmother</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="godMotherName"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${godMotherNameError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godfather</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="godFatherParish"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${godFatherParishError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godmother</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="godMotherParish"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${godMotherParishError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Minister</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="minister"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${ministerError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish Priest</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="parishPriest"
                  onBlur={(event) => inputsHandler(event)}
                />
                <label
                  className={`add-family-error ${parishPriestError}`}
                  htmlFor="error"
                >
                  This field is required
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="registry-photo-div">
          <IconUpload />
          <img
            className="marriage-photo"
            src={require("../Assets/marriage.png")}
            alt="marriage pic"
          />
        </div>
      </div>
      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <input
            type="text"
            name="remarks"
            onBlur={(event) => inputsHandler(event)}
          />
        </div>
        <div className="submit-btn-div">
          <button className={submitButtonHide} onClick={() => submitButton()}>Submit</button>
        </div>
      </div>
    </div>
  );
}