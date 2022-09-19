import React, { useState } from 'react'
import { useEffect } from 'react';
import Icon_Menu from '../Assets/Icon_Menu'
import IconUpload from '../Assets/Icon_Upload'
import Navigation from '../navigation'
import { personIdFromPerson} from "../person";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export default function EngagementRegistry() {
  const location = useLocation();
  // Imported data
  console.log("Imported object from family using navigate:", location);
  const navigate = useNavigate();
  // Name of person
  const [name,setName]=useState('Loading');

  // Showing details
  const [showDetails,setShowDetails]=useState('hidden');

  // Engagement data
  const [groomData,setGroomData]=useState({});
  const [brideData, setBrideData] = useState({});
  const [otherDetails,setOtherDetails]=useState({});

  useEffect(()=>{
    axios
      .get(
        `http://localhost:5000/api/v1/registry/engagement-registry/${location.state.id}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "success") {
          const result = res.data.data;
          setName(res.data.data.baptismName);
          setGroomData(result.groomData);
          setBrideData(result.brideData);
          setOtherDetails({
            engagementDate: result.engagementDate,
            celebrant: result.celebrant,
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
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head  regestries-person-head">
          <h1>Engagement Registry</h1>
        </div>
        {/* <div className={`registries-nav-div ${showDetails}`}>
          <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a>
        </div>
        <div className={`menu-div ${showDetails}`}>
          <Icon_Menu />
        </div> */}
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
            <div className="marriage-person-div">
              <div className="heading-marriage">Date of Birth</div>
              <div className="person-marriage">
                {groomData.dob ? groomData.dob.split("T")[0] : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Date of Baptism</div>
              <div className="person-marriage">
                {groomData.doBaptism ? groomData.doBaptism.split("T")[0] : "-"}
              </div>
            </div>
            {/* <div className="marriage-person-div">
          <div className="heading-marriage">Place of Baptism</div>
          <div className="person-marriage">Belthangadi</div>
        </div> */}
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
            <div className="marriage-person-div">
              <div className="heading-marriage">Date of Birth</div>
              <div className="person-marriage">
                {brideData.dob ? brideData.dob.split("T")[0] : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Date of Baptism</div>
              <div className="person-marriage">
                {brideData.doBaptism ? brideData.doBaptism.split("T")[0] : "-"}
              </div>
            </div>
            {/* <div className="marriage-person-div">
          <div className="heading-marriage">Place of Baptism</div>
          <div className="person-marriage">Devagiri</div>
        </div> */}
          </div>
          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Other details</div>
            <div className="name-person-div">
              <div className="heading-name">Date</div>
              <div className="person-name">
                {otherDetails.engagementDate
                  ? otherDetails.engagementDate.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Celebrant</div>
              <div className="person-dob">
                {otherDetails.celebrant ? otherDetails.celebrant : "-"}
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Parish priest</div>
              <div className="person-baptism">
                {otherDetails.parishPriest ? otherDetails.parishPriest : "-"}
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
      <div className={`desc-div ${showDetails}`}>
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <span className="blank-space" />
          {otherDetails.remarks ? otherDetails.remarks : "-"}
        </div>
      </div>
    </div>
  );
}
