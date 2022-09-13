import React, { useState } from "react";
import Icon_Menu from "../Assets/Icon_Menu";
import Icon_Upload from "../Assets/Icon_Upload";
import Navigation from "../navigation";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {personId} from '../person';

// temeplate for backend post request
let sickness = "";
let confession = "";
let viaticum = "";
let anointing = "";
let dod = "";
let doburial = "";
let parishPriest = "";
let remarks = "";

export default function DeathRegistryAdd() {
  const navigate = useNavigate();

  // Error handling variables
  const [sicknessError, setSicknessError] = useState("hidden");
  const [confessionError, setCconfessionError] = useState("hidden");
  const [viatiumError, setViatiumError] = useState("hidden");
  const [anointingError, setAnointingError] = useState("hidden");
  const [dodError, setDodError] = useState("hidden");
  const [doBurialError, setDoBurialError] = useState("hidden");
  const [priestError, setPriestError] = useState("hidden");

  // Inputs handling function
  function inputHandler(event) {
    const { name, value } = event.target;
    console.log("Input Name:", name);
    console.log("Input Value:", value);
    if (name === "sickness") {
      sickness = value;
    }
    if (name === "confession") {
      if (value) setCconfessionError("hidden");
      confession = value;
    }
    if (name === "viaticum") {
      if (value) setViatiumError("hidden");
      viaticum = value;
    }
    if (name === "anointing") {
      if (value) setAnointingError("hidden");
      anointing = value;
    }
    if (name === "dod") {
      if (value) setDodError("hidden");
      dod = value;
    }
    if (name === "doburial") {
      if (value) setDoBurialError("hidden");
      doburial = value;
    }
    if (name === "parishPriest") {
      parishPriest = value;
    }
    if (name === "remarks") {
      remarks = value;
    }
  }

  // Submit button handler
  function submitButtonHandler() {
    if (!confession) {
      setCconfessionError("This field is required");
    }
    if (!viaticum) {
      setViatiumError("This field is required");
    }
    if (!anointing) {
      setAnointingError("This field is required");
    }
    if (!dod) {
      setDodError("This field is required");
    }
    if (!doburial) {
      setDoBurialError("This field is required");
    }
    if (confession && viaticum && anointing && dod && doburial) {
      let data = {
        sacraments: {
          confession: confession,
          viaticum: viaticum,
          anointing: anointing,
        },
        dod: dod,
        doburial: doburial,
      };
      if (sickness) data["sickness"] = sickness;
      if (parishPriest) data["parishPriest"] = parishPriest;
      if (remarks) data["remarks"] = remarks;

      // Post request
      axios
        .post(
          `http://localhost:5000/api/v1/registry/death-registry/${personId}`,
          data,
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          if (res.data.status === "success") {
            navigate("/person");
          }
        });
    }
  }
  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>Jackson</h1>
        </div>
        <div className="registries-nav-div">
          <a href="#">Baptism Registry</a>
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
            <div className="death-person-ward-div">
              <div className="heading-ward">Sickness</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="sickness"
                  onChange={(event) => inputHandler(event)}
                />
                <label
                  className={`add-family-error ${
                    sicknessError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {sicknessError !== "hidden"
                    ? sicknessError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-sacraments-div">
              <div className="heading-sacraments">Sacraments Received</div>
            </div>
            <div className="death-person-ward-div-sacraments">
              <div className="heading-confession">Confession</div>
              <div className="person-death-ward-anointing">
                <div className="radio-sacraments-1">
                  <input
                    value={true}
                    id="confession-yes"
                    name="confession"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="confession-yes">Yes</label>
                </div>
                <div className="radio-sacraments-2">
                  <input
                    value={false}
                    id="confession-no"
                    name="confession"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="confession-no">No</label>
                </div>
                <label
                  className={`add-family-error ${
                    confessionError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {confessionError !== "hidden"
                    ? confessionError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-ward-div-sacraments">
              <div className="heading-viatium">Viaticum</div>
              <div className="person-death-ward-anointing">
                <div className="radio-sacraments-1">
                  <input
                    value={true}
                    id="viatium-yes"
                    name="viaticum"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="viatium-yes">Yes</label>
                </div>
                <div className="radio-sacraments-2">
                  <input
                    value={false}
                    id="viatium-no"
                    name="viaticum"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="viatium-no">No</label>
                </div>
                <label
                  className={`add-family-error ${
                    viatiumError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {viatiumError !== "hidden"
                    ? viatiumError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-ward-div-sacraments anointing-div">
              <div className="heading-anointing">Anointing of sick</div>
              <div className="person-death-ward-anointing">
                <div className="radio-sacraments-1">
                  <input
                    value={true}
                    id="anointing-yes"
                    name="anointing"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="anointing-yes">Yes</label>
                </div>
                <div className="radio-sacraments-2">
                  <input
                    value={false}
                    id="anointing-no"
                    name="anointing"
                    type="radio"
                    onChange={(event) => inputHandler(event)}
                  />
                  <label htmlFor="anointing-no">No</label>
                </div>
                <label
                  className={`add-family-error ${
                    anointingError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {anointingError !== "hidden"
                    ? anointingError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Death</div>
              <div className="person-death-ward">
                <input
                  type="date"
                  name="dod"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputHandler(event)}
                />
                <label
                  className={`add-family-error ${
                    dodError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {dodError !== "hidden" ? dodError : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Burial</div>
              <div className="person-death-ward">
                <input
                  type="date"
                  name="doburial"
                  placeholder="DD-MM-YYYY"
                  onChange={(event) => inputHandler(event)}
                />
                <label
                  className={`add-family-error ${
                    doBurialError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {doBurialError !== "hidden"
                    ? doBurialError
                    : "This field is required"}
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish Priest</div>
              <div className="person-death-ward">
                <input
                  type="text"
                  name="parishPriest"
                  onChange={(event) => inputHandler(event)}
                />
                <label
                  className={`add-family-error ${
                    priestError === "hidden" ? "hidden" : ""
                  }`}
                  htmlFor="error"
                >
                  {priestError !== "hidden"
                    ? priestError
                    : "This field is required"}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="registry-photo-div">
          <Icon_Upload />
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
            onChange={(event) => inputHandler(event)}
            type="text"
            name="remarks"
          />
        </div>
        <div className="submit-btn-div">
          <button onClick={() => submitButtonHandler()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
