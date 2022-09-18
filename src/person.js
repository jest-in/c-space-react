import IconMenu from './Assets/Icon_Menu'

import { personId } from './family-individual';
import {personIdFromFamily} from './family';
import { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Navigation from './navigation';

let gender,personName;
let personIdFromPerson;

// If partner exist then for exporting partner Id
let partnerIdFromPerson;

const Person = () => {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate = useNavigate();

  // Personal details
  const [personDetails, setPersonDetails] = useState({});

  // Person details section
  const [detailSection, setDetailSection] = useState("hidden");

  // Engagement button
  function engagementButton() {
    if (
      personDetails.maritalStatus === "engaged" ||
      personDetails.maritalStatus === "married"
    ) {
      navigate("/engagement-registry", {
                state:{
                  id:location.state,
                }});
      return;
    }
    if (!personDetails.doBaptism) {
      alert("Please add baptism registry for continuing");
      return;
    } else if (
      (personDetails.gender === "M" && personDetails.age < 21) ||
      (personDetails.gender === "F" && personDetails.age < 18)
    ) {
      alert("This person is under aged");
      return;
    }
    if (personDetails.husband || personDetails.wife) {
      partnerIdFromPerson = personDetails.husband
        ? personDetails.husband
        : personDetails.wife;
    }
    if (!personDetails.dod) navigate("/engagement-registry-add", {
                state:{
                  id:location.state,
                  gender:personDetails.gender,
                  partnerId:personDetails.husband
                    ? personDetails.husband
                    : personDetails.wife,
                }});
  }

  useEffect(() => {
    // If person id is null
    if (!personId && !personIdFromFamily) {
      navigate("/family");
      return;
    }
    axios
      .get(`http://localhost:5000/api/v1/persons/id/${location.state}`, {
        withCredentials: true,
      })
      .then((res) => {
        const result = res.data.person;

        if (res.data.status === "success") {
          console.log("personIdFromPerson:", result.id);
          personIdFromPerson = result.id;
          setPersonDetails(result);
          setDetailSection("");
          gender = result.gender;
          personName = result.name;
        } else navigate("/family-individual");
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }, []);

  return (
    <div className="container-family">
        {/* SMS Box */}
        <div className="message-popup-bg hidden">
          <div className="message-popup">
            <div className="message-close-icon-div">
              <img className="message-close-icon" src="/Icon_Close.svg" alt />
            </div>
            <div className="message-popup-head">
              <h1>Compose Message</h1>
              <hr />
            </div>
            <div className="message-input-div">
              <textarea
                name="message"
                id="message"
                rows={6}
                cols={25}
                placeholder="Type your message here..."
                autofocus
                defaultValue={""}
              />
            </div>
            <div className="message-send-button hidden">
              <a href='#'>
                Send
              </a>
              <h1>Sent Successfully</h1>
              <h2 className="message-wrong">
                Something went wrong! Try again.
              </h2>
            </div>
          </div>
        </div>
        {/* SMS Box */}

        {/* Mail Box */}
        <div className="message-popup-bg hidden">
          <div className="message-popup mail-popup">
            <div className="message-close-icon-div">
              <img className="mail-close-icon" src="/Icon_Close.svg" alt />
            </div>
            <div className="message-popup-head">
              <h1>Compose Mail</h1>
              <hr />
            </div>
            <div className="message-input-div">
              <form
                className="mail-form"
                action="/http://localhost:5000/api/v1/send-mail"
                method="post"
              >
                <input className="mail-input" type="text" readOnly />
                <input
                  className="mail-input"
                  type="text"
                  placeholder="Subject"
                />
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  cols={25}
                  placeholder="Type your message here..."
                  autofocus
                  defaultValue={""}
                />
                <input type="file" name="attatchment" className="attatch" />
                <input
                  className="mail-send-btn"
                  type="submit"
                  defaultValue="Send"
                />
              </form>
            </div>
            <div className="message-send-button">
              <h1>Sent Successfully</h1>
              <h2 className="message-wrong">
                Something went wrong! Try again.
              </h2>
            </div>
          </div>
        </div>
        {/* Mail Box */}

        {/* Universal Alert Box */}
        <div className="universal-alert-popup-bg hidden">
          <div className="universal-alert-popup hidden">
            <div className="universal-alert-message-close-icon-div">
              <img
                className="universal-alert-message-close-icon"
                src="/Icon_Close.svg"
                alt
              />
            </div>
            <div className="universal-alert-message-div">
              <label className="universal-alert-message">
                Baptism registry of this person is not updated
              </label>
            </div>
            <div className="universal-alert-ok-button-div">
              <button className="universal-alert-ok-buttion">Ok</button>
            </div>
          </div>
        </div>
        {/* Universal Alert Box */}

      <Navigation />
      <main className={detailSection}>
        <div className="title-div">
          <div className="person-head">
            <h1>
              {personDetails.baptismName ? personDetails.baptismName : "-"}
            </h1>
          </div>
          <div className="registries-nav-div">
            <button
              onClick={() => {
                if (!personDetails.doBaptism) {
                  navigate("/baptism-registry-add", {
                    state: location.state,
                  });
                } else navigate("/baptism-registry", {
                  state: location.state,
                });
              }}
            >
              Baptism Registry
            </button>
            <button onClick={() => engagementButton()}>
              Engagement Registry
            </button>
            <button
              onClick={() => {
                if (personDetails.maritalStatus !== "engaged"&&!personDetails.marriage) {
                  alert("Please add engagement registry first");
                  return;
                }
                if (
                  !personDetails.marriage &&
                  personDetails.status === "engaged" &&
                  personDetails.isActive
                ) {
                  navigate("/marriage-registry-add", {
                    state: location.state,
                  });
                } else if (personDetails.marriage)
                  navigate("/marriage-registry", {
                    state: location.state,
                  });
              }}
            >
              Marriage Registry
            </button>
            <button
              onClick={() => {
                if (!personDetails.dod) {
                  navigate("/death-registry-add", {
                    state: location.state,
                  });
                } else navigate("/death-registry", {
                  state: location.state,
                });
              }}
            >
              Death Registry
            </button>
          </div>
          <div className="menu-div">
            <IconMenu />
          </div>
        </div>
        <hr />
        <div className="members-entries-div">
          <div className="details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                {personDetails.baptismName ? personDetails.baptismName : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Date of birth</div>
              <div className="person-dob">
                {personDetails.dob ? personDetails.dob.split("T")[0] : "-"}
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Phone number</div>
              <div className="person-phone">
                {personDetails.phoneNumber ? personDetails.phoneNumber : "-"}
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Baptism Date</div>
              <div className="person-baptism">
                {personDetails.doBaptism
                  ? personDetails.doBaptism.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Marriage Date</div>
              <div className="person-marriage">
                {personDetails.marriage
                  ? personDetails.marriage.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Death Date</div>
              <div className="person-death">
                {personDetails.dod ? personDetails.dod.split("T")[0] : "-"}
              </div>
            </div>
          </div>
          <div className="person-photo-div">
            <img
              src={require("./Assets/person-photo.png")}
              alt="personal pic"
            />
            <button
              onClick={() => {
                axios
                  .post(
                    `http://localhost:5000/api/v1/users/signup`,
                    {
                      userId: personId ? personId : personIdFromFamily,
                      role: "User",
                    },
                    {
                      withCredentials: true,
                    }
                  )
                  .then((res) => {
                    if (res.data.status === "success") {
                      alert("Signup request successfull");
                    }
                  })
                  .catch((err) => {
                    // Error
                    alert(`${err.response.data.message}`);
                  });
              }}
            >
              Sign up
            </button>
            <button>Edit</button>
            <button>Send Message</button>
            <button>Proposed Changes</button>
          </div>
        </div>
        <div className="desc-div">
          <div className="desc-heading person-desc-heading">
            Description/Remarks
          </div>
          <div className="desc-content">
            <span className="blank-space"></span>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum".{" "}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Person;
export {personIdFromPerson,gender,personName,partnerIdFromPerson};