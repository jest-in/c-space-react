import React,{useState} from 'react'
import Icon_Menu from '../Assets/Icon_Menu'
import IconUpload from '../Assets/Icon_Upload'
import Icon_Search from '../Assets/Icon_Search'
import Navigation from '../navigation'
import { useEffect } from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { personId,gender } from '../person';

let partnerId;

export default function EngagementRegistryAdd() {
  const navigate = useNavigate();

  // Errors
  const [nameError,setNameError]=useState('hidden');
  const [familyNameError,setFamilyNameError] = useState("hidden");
  const [fatherError,setFatherError] = useState("hidden");
  const [motherError,setMotherError] = useState("hidden");
  const [parishError,setParishError] = useState("hidden");
  const [dobError,setDobError] = useState("hidden");
  const [doBaptosmError,setDoBaptismError] = useState("hidden");
  const [placeError,setPlaceError] = useState("hidden");

  // Other details Error
  const [engagementDateError, setEngagementDateError] = useState("hidden");
  const [celebrantError, setCelebrantError] = useState("hidden");
  const [parishPriestError, setParishPriestError] = useState("hidden");

  // Hiding section
  const [showDetails,setShowDetails]=useState('hidden');

  // Person name
  const [personName, setPersonName] = useState("Loading");

  // Bride groom details
  const [brideGroom, setBrideGroom] = useState({});

  // Bride details
  const [bride, setBride] = useState({});

  // Persons
  const [personsEligible, setPersonsEligible] = useState([]);

  // Check box checked or not
  const [boxChecked, setBoxChecked] = useState(false);

  // Inputs of other details
  const [otherDetails,setOtherDetails]=useState({
    engagementDate:'',
    celebrant:'',
    parishPriest:'',
    remarks:''
  })

  // Inputs of other details section
  function inputsOfOtherDetails(event){
    const { name, value } = event.target;
    if(name==='engagementDate'){
      value?setEngagementDateError('hidden'):setEngagementDateError('');
    }
    if (name === "celebrant") {
      value ? celebrantError("hidden") : celebrantError("");
    }
    if (name === "parishPriest") {
      value ? setParishPriestError("hidden") : setParishPriestError("");
    }
    setOtherDetails((prev) => {
      let data = prev;
      data[name] = value;
      console.log(data);
      return data;
    });
  }

  // checkBox handler
  function checkBoxHandler(event) {
    const { checked } = event.target;
    setBoxChecked(checked);
    if (checked) {
      axios
        .get(
          `http://localhost:5000/api/v1/persons?isActive=true&maritalStatus=single&gender=${gender}`
        )
        .then((res) => {
          const result = res.data.person;

          if (res.data.status === "success") {
            setPersonsEligible(result);
          }
        });
    }
  }

  // Submit button
  function submitButtonHandler(){
    // check brideGroom and bride and other details
    let error=true;
    let data={};
    if(!boxChecked){
        const {name,familyName,father,mother,parish,dob,doBaptism,place}=(gender==='M'?bride:brideGroom);
        if(!name)
          setNameError('')
        if(!familyName)
        setFamilyNameError('')
        if(!father)
        setFatherError('')
        if(!mother)
        setMotherError('')
        if(!parish)
        setParishError('')
        if(!dob)
        setDobError('')
        if(!doBaptism)
        setDoBaptismError('')
        if(!place)
        setPlaceError('')
        if(name&&familyName&&father&&mother&&parish&&dob&&doBaptism&&place){
          error=false;
          data[gender==='M'?'brideData':'groomData']=(gender==='M'?bride:brideGroom);
        }
    }
    else{
      data['partnerId']=partnerId;
    }
    if(!otherDetails.engagementDate){
      error=true;
      setEngagementDateError('');
    }
    if (!otherDetails.celebrant) {
      error = true;
      setCelebrantError("");
    }
    if (!otherDetails.parishPriest) {
      error = true;
      setParishPriestError("");
    }
    if(!error){
      data['engagementDate']=otherDetails.engagementDate;
      data["celebrant"] = otherDetails.celebrant;
      data["parishPriest"] = otherDetails.parishPriest;
      if(otherDetails.remarks)
      data['remarks']=otherDetails.remarks;
      // Post request
      axios
        .post(
          `http://localhost:5000/api/v1/registry/baptism-registry/${personId}`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            navigate(-1);
          }
        });
    }
  }

  // Clicking a person handler
  function clickPersonHandler(id) {
    axios
      .get(`http://localhost:5000/api/v1/persons/relations/${id}`)
      .then((res) => {
        const result = res.data.person;

        if (res.data.status === "success") {
          partnerId=result.id;
          if(gender==='M')
          setBrideGroom(result);
          else
          setBride(result);
        }
      });
  }

  // Bride groom section handler
  function inputsOfBrideGroom(event){
    const {name,value}=event.target;
    if (name==='name'){
      value?setNameError("hidden"):setNameError('');
    }
    if (name==='familyName'){
      value?setFamilyNameError('hidden'):setFamilyNameError('');
    }
    if (name==='father'){
      value?setFatherError("hidden"):setFatherError('');
    } 
    if (name==='mother'){
      value?setMotherError("hidden"):setMotherError('');
    }
    if (name==='parish'){
      value?setParishError("hidden"):setParishError('');
    } 
    if (name==='dob'){
      value?setDobError("hidden"):setDobError('');
    } 
    if (name==='doBaptism'){
      value?setDoBaptismError("hidden"):setDoBaptismError('');
    } 
    if (name==='place'){
      value ? setPlaceError("hidden") : setPlaceError("");     
    } 
    setBrideGroom((prev)=>{
      let data=prev;
      data[name]=value;
      console.log(data);
      return data;
    })
  }

  // Bride section input handler
  function inputsOfBride(event){
    const { name, value } = event.target;
    if (name === "name") {
      value ? setNameError("hidden") : setNameError("");
    }
    if (name === "familyName") {
      value ? setFamilyNameError("hidden") : setFamilyNameError("");
    }
    if (name === "father") {
      value ? setFatherError("hidden") : setFatherError("");
    }
    if (name === "mother") {
      value ? setMotherError("hidden") : setMotherError("");
    }
    if (name === "parish") {
      value ? setParishError("hidden") : setParishError("");
    }
    if (name === "dob") {
      value ? setDobError("hidden") : setDobError("");
    }
    if (name === "doBaptism") {
      value ? setDoBaptismError("hidden") : setDoBaptismError("");
    }
    if (name === "place") {
      value ? setPlaceError("hidden") : setPlaceError("");
    } 
    setBride((prev) => {
      let data = prev;
      data[name] = value;
      console.log(data);
      return data;
    });
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/v1/persons/relations/${personId}`)
      .then((res) => {
        const result = res.data.person;

        if (res.data.status === "success") {
          console.log('Relations:',result);
          setPersonName(result.name);
          if(gender==='M')
          setBrideGroom(result);
          else
          setBride(result);
          setShowDetails('');
        } else navigate(-1);
      });
  }, []);
  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>{personName}</h1>
        </div>
        <div className={`registries-nav-div ${showDetails}`}>
          <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className={`menu-div ${showDetails}`}>
          <Icon_Menu />
        </div>
      </div>
      <hr />
      <div className={`members-entries-div ${showDetails}`}>
        <div className="registry-div">
          <div className="same-parish-check-container">
            <div className="same-parish-check-div">
              <h3>
                Is <span>bride/groom</span> from same parish?
              </h3>
              <label className="switch">
                <input
                  type="checkbox"
                  onChange={(event) => checkBoxHandler(event)}
                />
                <span className="slider round" />
              </label>
            </div>
            <div
              className={`same-parish-entries-container ${
                boxChecked ? "" : "hidden"
              }`}
            >
              <div className="select-from-list-heading">
                <h1>Select from the below list</h1>
                <input type="text" name="search-name" placeholder="Search" />
                <Icon_Search />
              </div>
              <div className="select-from-list-container">
                <div className="select-from-list-header-container">
                  <div className="select-from-list-headings">
                    <div className="select-name">Name</div>
                    <div className="select-family-name">Baptism Name</div>
                    <div className="select-fathers-name">Family name</div>
                  </div>
                  <hr className="select-hr" />
                </div>
                {personsEligible.map((person, index) => {
                  const { name, familyName, baptismName, _id } = person;
                  return (
                    <div
                      className="select-from-list-data"
                      key={index}
                      onClick={() => clickPersonHandler(_id)}
                    >
                      <div className="select-name">{name}</div>
                      <div className="select-family-name">{baptismName}</div>
                      <div className="select-fathers-name">{familyName}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head">Bridegroom</div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input
                  defaultValue={brideGroom.name ? brideGroom.name : ""}
                  type="text"
                  name="name"
                  onChange={(event) => inputsOfBrideGroom(event)}
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : nameError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {nameError ? nameError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                <input
                  onChange={(event) => inputsOfBrideGroom(event)}
                  defaultValue={
                    brideGroom.familyName ? brideGroom.familyName : ""
                  }
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="text"
                  name="familyName"
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : familyNameError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {familyNameError ? familyNameError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input
                  defaultValue={brideGroom.father ? brideGroom.father : ""}
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="text"
                  name="father"
                  onChange={(event) => inputsOfBrideGroom(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : fatherError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {fatherError ? fatherError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input
                  defaultValue={brideGroom.mother ? brideGroom.mother : ""}
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="text"
                  name="mother"
                  onChange={(event) => inputsOfBrideGroom(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : motherError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {motherError ? motherError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input
                  defaultValue={brideGroom.parish ? brideGroom.parish : ""}
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="text"
                  name="parish"
                  onChange={(event) => inputsOfBrideGroom(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : parishError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {parishError ? parishError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Date of Birth</div>
              <div className="person-name">
                <input
                  defaultValue={
                    brideGroom.dob ? brideGroom.dob.split("T")[0] : ""
                  }
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="date"
                  name="dob"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputsOfBrideGroom(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : dobError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {dobError ? dobError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Date of Baptism</div>
              <div className="person-name">
                <input
                  defaultValue={
                    brideGroom.doBaptism
                      ? brideGroom.doBaptism.split("T")[0]
                      : ""
                  }
                  readOnly={boxChecked ? true : gender === "M" ? true : false}
                  type="date"
                  name="doBaptism"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputsOfBrideGroom(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : doBaptosmError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {doBaptosmError ? doBaptosmError : "This field is required"}
                </label>
              </div>
            </div>
            <div
              className={`death-person-div ${
                boxChecked ? "hidden" : gender === "M" ? "hidden" : ""
              }`}
            >
              <div className="heading-death">Place of Baptism</div>
              <div className="person-death">
                <input type="text" name="place" />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "M"
                        ? "hidden"
                        : placeError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {placeError ? placeError : "This field is required"}
                </label>
              </div>
            </div>
          </div>
          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Bride</div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input
                  defaultValue={bride.name ? bride.name : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="text"
                  name="name"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : nameError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {nameError ? nameError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                <input
                  defaultValue={bride.familyName ? bride.familyName : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="text"
                  name="familyName"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : familyNameError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {familyNameError ? familyNameError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input
                  defaultValue={bride.father ? bride.father : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="text"
                  name="father"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : fatherError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {fatherError ? fatherError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input
                  defaultValue={bride.mother ? bride.mother : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="text"
                  name="mother"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : motherError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {motherError ? motherError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input
                  defaultValue={bride.parish ? bride.parish : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="text"
                  name="parish"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : parishError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {parishError ? parishError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Date of Birth</div>
              <div className="person-name">
                <input
                  defaultValue={bride.dob ? bride.dob.split("T")[0] : ""}
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="date"
                  name="dob"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : dobError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {dobError ? dobError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Date of Baptism</div>
              <div className="person-name">
                <input
                  defaultValue={
                    bride.doBaptism ? bride.doBaptism.split("T")[0] : ""
                  }
                  readOnly={boxChecked ? true : gender === "F" ? true : false}
                  type="date"
                  name="doBaptism"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputsOfBride(event)}
                />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : doBaptosmError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {doBaptosmError ? doBaptosmError : "This field is required"}
                </label>
              </div>
            </div>
            <div
              className={`death-person-div ${
                boxChecked ? "hidden" : gender === "F" ? "hidden" : ""
              }`}
            >
              <div className="heading-death">Place of Baptism</div>
              <div className="person-death">
                <input type="text" name="place" />
                <label
                  className={`add-family-error ${
                    !boxChecked
                      ? gender === "F"
                        ? "hidden"
                        : placeError === "hidden"
                        ? "hidden"
                        : ""
                      : "hidden"
                  }`}
                  htmlFor="error"
                >
                  {placeError ? placeError : "This field is required"}
                </label>
              </div>
            </div>
          </div>
          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Other details</div>
            <div className="name-person-div">
              <div className="heading-name">Date</div>
              <div className="person-name">
                <input
                  defaultValue={otherDetails.engagementDate}
                  type="date"
                  name="engagementDate"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputsOfOtherDetails(event)}
                />
                <label
                  className={`add-family-error ${
                    engagementDateError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {engagementDateError
                    ? engagementDateError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Celebrant</div>
              <div className="person-dob">
                <input
                  defaultValue={otherDetails.celebrant}
                  type="text"
                  name="celebrant"
                  onChange={(event) => inputsOfOtherDetails(event)}
                />
                <label
                  className={`add-family-error ${
                    celebrantError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {celebrantError ? celebrantError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Parish priest</div>
              <div className="person-baptism">
                <input
                  defaultValue={otherDetails.parishPriest}
                  type="text"
                  name="Name"
                  onChange={(event) => inputsOfOtherDetails(event)}
                />
                <label
                  className={`add-family-error ${
                    parishPriestError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {parishPriestError
                    ? parishPriestError
                    : "This field is required"}
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
        <div className={`desc-heading ${showDetails}`}>Description/Remarks</div>
        <div className={`desc-content ${showDetails}`}>
          <input
            defaultValue={otherDetails.remarks}
            type="text"
            name="remarks"
            onChange={(event) => inputsOfOtherDetails(event)}
          />
        </div>
        <div className={`submit-btn-div ${showDetails}`}>
          <button onClick={() => submitButtonHandler()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
