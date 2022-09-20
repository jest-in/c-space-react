import React from "react";
import Navigation from "../navigation";
import IconMenu from "../Assets/Icon_Menu";
import Icon_Upload from "../Assets/Icon_Upload";
import { personIdFromPerson } from "../person";
import { personIdFromDeathAll } from "./death-registry-all";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function DeathRegistry() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  // Death details
  const [person, setPerson] = useState({});

  // sacrament details
  const [sacraments, setSacraments] = useState({});

  useEffect(() => {
    // add location.state to get request url
    axios
      .get(
        `http://localhost:5000/api/v1/registry/death-registry/${location.state}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        if (res.data.status === "success") {
          const result = res.data.data;
          console.log("Result:", result);
          setPerson(result);
          setSacraments(result.sacraments);
        }
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
        <div className="person-head  regestries-person-head">
          <h1>
            {person.baptismName ? `${person.baptismName} ` : ""}
            {person.familyName ? person.familyName : ""}
          </h1>
        </div>
        {/* <div className="registries-nav-div">
          <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className="menu-div">
          <IconMenu />
        </div> */}
      </div>
      <hr />
      <div className="members-entries-div">
        <div className="registry-div">
          <div className="registry-details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                {person.baptismName ? `${person.baptismName} ` : ""}
              </div>
            </div>
            {/* <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                {person.name ? `${person.name} ` : ""}
              </div>
            </div> */}
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                {person.familyName ? `${person.familyName} ` : "-"}
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                {person.age ? `${person.age} ` : ""}
              </div>
            </div>
            {/* <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">Kuriyan</div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">Rosamma</div>
            </div> */}
            <div className="death-person-div">
              <div className="heading-death">Place</div>
              <div className="person-death">
                {person.place ? `${person.place} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Ward</div>
              <div className="person-death-ward">
                {person.wardNo ? `${person.wardNo} ` : "-"}
              </div>
            </div>
            {/* <div className="death-person-address-div">
              <div className="heading-address">Address</div>
              <div className="person-death-address">
                946 Gregory Lane, Louisville, KY, Kentucky
              </div>
            </div> */}
            <div className="death-person-ward-div">
              <div className="heading-ward">Sickness</div>
              <div className="person-death-ward">
                {person.sickness ? `${person.sickness} ` : "-"}
              </div>
            </div>
            <div className="death-person-sacraments-div">
              <div className="heading-sacraments">Sacraments Received</div>
            </div>
            <div className="death-person-ward-div-sacraments">
              <div className="heading-confession">Confession</div>
              <div className="person-death-ward">
                {sacraments.confession ? `${sacraments.confession} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div-sacraments">
              <div className="heading-viatium">Viaticum</div>
              <div className="person-death-ward">
                {sacraments.viaticum ? `${sacraments.viaticum} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div-sacraments anointing-div">
              <div className="heading-anointing">Anointing of sick</div>
              <div className="person-death-ward">
                {sacraments.anointing ? `${sacraments.anointing} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Birth</div>
              <div className="person-death-ward">
                {person.dob ? `${person.dob.split("T")[0]} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Death</div>
              <div className="person-death-ward">
                {person.dod ? `${person.dod.split("T")[0]} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Burial</div>
              <div className="person-death-ward">
                {person.doBurial ? `${person.doBurial.split("T")[0]} ` : "-"}
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish Priest</div>
              <div className="person-death-ward">
                {person.parishPriest ? `${person.parishPriest} ` : "-"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <span className="blank-space" />
          {person.remarks ? person.remarks : "-"}
        </div>
      </div>
    </div>
  );
}
