import React from 'react'
import { useEffect } from 'react';
import UploadIcon from './Assets/Icon_Upload'
import Icon_Menu from "./Assets/Icon_Menu";
import Navigation from './navigation';

import axios from "axios";
import {useNavigate,useLocation} from 'react-router-dom'

import {personIdFromPerson,personName} from './person'
import { useState } from 'react';

function MarriageRegistry() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate=useNavigate();

  // show details
  const [showDetails,setShowDetails]=useState('hidden');

  // person name
  const [data,setData]=useState({});

  // Groom data
  const [groomData,setGroomData]=useState({});

  // Bride data
  const [brideData,setBrideData]=useState({});

  // Other details
  const [otherDetails, setOtherDetails] = useState({
    marriageDate: "",
    celebrant: "",
    witness: "",
    parishPriest: "",
    remarks: "",
  });

  useEffect(()=>{
    // get request use location.state !!!!!!!!!!!!!!!!!!!!!!!
    if(location.state)
    axios
      .get(
        `http://localhost:5000/api/v1/registry/marriage-registry/${location.state}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log("RES : ", res.data);
        if (res.data.status === "success") {
          const result = res.data.data;
          setData(result);
          setGroomData(result.groomData);
          setBrideData(result.brideData);
          setOtherDetails({
            marriageDate: result.marriageDate,
            celebrant: result.celebrant,
            witness: result.witness,
            parishPriest: result.parishPriest,
            remarks: result.remarks,
          });
          setShowDetails("");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
      else
      navigate(-1)
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>Marriage Registry</h1>
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
          <div className="registry-details-heading-div">
            <div className="bridegroom-head">Bridegroom</div>
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                {groomData.baptismName ? groomData.baptismName : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                {groomData.familyName ? groomData.familyName : "-"}
              </div>
            </div>
            {/* <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                {groomData.age ? groomData.age : "-"}
              </div>
            </div> */}
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                {groomData.father ? groomData.father : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                {groomData.mother ? groomData.mother : "-"}
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                {groomData.parish ? groomData.parish : "-"}
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Bride</div>
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                {brideData.baptismName ? brideData.baptismName : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                {brideData.familyName ? brideData.familyName : "-"}
              </div>
            </div>
            {/* <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                {brideData.age ? brideData.age : "-"}
              </div>
            </div> */}
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                {brideData.father ? brideData.father : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                {brideData.mother ? brideData.mother : "-"}
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                {brideData.parish ? brideData.parish : "-"}
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Other details</div>
            <div className="name-person-div">
              <div className="heading-name">Date</div>
              <div className="person-name">
                {otherDetails.marriageDate
                  ? otherDetails.marriageDate.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Celebrant</div>
              <div className="person-dob">
                {otherDetails.celebrant ? otherDetails.celebrant : "-"}
              </div>
            </div>
            {/* <div className="phone-person-div">
              <div className="heading-phone">Witness</div>
              <div className="person-phone">
                {otherDetails.witness ? otherDetails.witness : "-"}
              </div>
            </div> */}
            <div className="baptism-person-div">
              <div className="heading-baptism">Parish priest</div>
              <div className="person-baptism">
                {otherDetails.parishPriest ? otherDetails.parishPriest : "-"}
              </div>
            </div>
          </div>
        </div>

        <div className="registry-photo-div">
          <UploadIcon />
          <img
            className="marriage-photo"
            src={require("./Assets/marriage.png")}
            alt="marriage pic"
          />
        </div>
      </div>

      <div className={`desc-div ${showDetails}`}>
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <span className="blank-space"></span>
          {otherDetails.remarks ? otherDetails.remarks : "-"}
        </div>
      </div>
    </div>
  );
}

export default MarriageRegistry;
