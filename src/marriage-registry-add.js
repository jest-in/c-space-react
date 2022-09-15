import React from 'react'
import Icon_Menu from './Assets/Icon_Menu'
import Logo from './Assets/logo'
import Icon_Upload from './Assets/Icon_Upload'
import { useEffect } from 'react'
import { useState } from 'react'
import { personIdFromPerson,personName } from "./person";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navigation from './navigation'

// Id for posting marriage registry
let engagementRegId;

export default function MarriageRegistryAdd() {
  const navigate = useNavigate();

  // Show details
  const [showDetails,setShowDetails]=useState('hidden');

  // person name
  const [name,setName]=useState('Loading');

  // Groom details
  const [GroomData,setGroomData]=useState({});

  // Bride details
  const [brideData,setBrideData]=useState({});

  // Other details
  const [otherDetails,setOtherDetails]=useState({
    marriageDate:'',
    celebrant:'',
    witness:'',
    parishPriest:'',
    remarks:''
  })

  // Other details input handler
  function otherDetailsInputHandler(event){
    const {name,value}=event.target;
    setOtherDetails((prev)=>{
      let data=prev;
      data[name]=value;
      console.log(data);
      return data;
    })
  }

  // submit button
  function submitButton(){
    let data=otherDetails;
     axios
       .post(
         `http://localhost:5000/api/v1/registry/marriage-registry/${engagementRegId}`,
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

  useEffect(()=>{
    axios
      .get(
        `http://localhost:5000/api/v1/registry/engagement-registry/${personIdFromPerson}`
      )
      .then((res) => {
        if (res.data.status === "success") {
          const result=res.data.data;
          console.log("RES ENTERD: ",result.groomData)
          setName(personName);
          engagementRegId=result._id;
          setGroomData(result.groomData)
          setBrideData(result.brideData);
          setShowDetails('');
        }
      });
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="person-head">
          <h1>{name}</h1>
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
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input
                  value={GroomData.baptismName ? GroomData.baptismName : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">House name</div>
              <div className="person-dob">
                <input
                  value={GroomData.familyName ? GroomData.familyName : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                <input
                  value={GroomData.age ? GroomData.age : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input
                  value={GroomData.father ? GroomData.father : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input
                  value={GroomData.mother ? GroomData.mother : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input
                  value={GroomData.parish ? GroomData.parish : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Bride</div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input
                  value={brideData.baptismName ? brideData.baptismName : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">House name</div>
              <div className="person-dob">
                <input
                  value={brideData.familyName ? brideData.familyName : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Age</div>
              <div className="person-phone">
                <input
                  value={brideData.age ? brideData.age : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input
                  value={brideData.father ? brideData.father : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input
                  value={brideData.mother ? brideData.mother : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input
                  value={brideData.parish ? brideData.parish : "-"}
                  // readOnly={true}
                  type="text"
                  name="Name"
                />
              </div>
            </div>
          </div>

          <div className="registry-details-heading-div">
            <div className="bridegroom-head bride">Other details</div>
            <div className="name-person-div">
              <div className="heading-name">Date</div>
              <div className="person-name">
                <input
                  type="date"
                  name="marriageDate"
                  defaultValue={otherDetails.marriageDate}
                  onChange={(event) => otherDetailsInputHandler(event)}
                />
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Celebrant</div>
              <div className="person-dob">
                <input
                  type="text"
                  name="celebrant"
                  defaultValue={otherDetails.celebrant}
                  onChange={(event) => otherDetailsInputHandler(event)}
                />
              </div>
            </div>
            <div className="phone-person-div">
              <div className="heading-phone">Witness</div>
              <div className="person-phone">
                <input
                  type="text"
                  name="witness"
                  defaultValue={otherDetails.witness}
                  onChange={(event) => otherDetailsInputHandler(event)}
                />
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Parish priest</div>
              <div className="person-baptism">
                <input
                  type="text"
                  name="parishPriest"
                  defaultValue={otherDetails.parishPriest}
                  onChange={(event) => otherDetailsInputHandler(event)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="registry-photo-div">
          <Icon_Upload />
          <img
            className="marriage-photo"
            src={require("./Assets/marriage.png")}
            alt="image/marriage"
          />
        </div>
      </div>

      <div className={`desc-div ${showDetails}`}>
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <input
            type="text"
            name="remarks"
            defaultValue={otherDetails.remarks}
            onChange={(event) => otherDetailsInputHandler(event)}
          />
        </div>
        <div className="submit-btn-div">
          <button onClick={() => submitButton()}>Submit</button>
        </div>
      </div>
    </div>
  );
}
