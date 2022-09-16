import React from 'react'
import Navigation from './navigation';

import { familyId } from './add-family';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function AddFamilyRelation() {
  const navigate=useNavigate();

  // Index
  const [indexOfMembersInFamily, setIndexOfMembersInFamily] = useState(0);

  // Family members
  const [membersInFamily,setMembersInFamily]=useState([]);
  const [person, setPerson] = useState('');
  const [relativesOfPerson, setRelativesOfPerson] = useState([]);

  // Hiding father,mother,husband,wife select options
  const [hideFather,setHideFather]=useState('');
  const [hideMother, setHideMother] = useState("");
  const [hideHusband, setHideHusband] = useState("");
  const [hideWife, setHideWife] = useState("");

  // Selections storing
  const [relations,setRelations]=useState({
    sisters:[],
    brothers:[],
    sons:[],
    daughters:[]
  });

  // Temporary relation storage id as key and relation as value
  const [temporaryData,setTemporaryData]=useState({});

  // selection input handler
  function selectionHandler(event,id){
    const {value}=event.target;
    if(temporaryData[id]){
      // resetting hidden option of select (show)
      if (temporaryData[id] === "father") setHideFather('');
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
        data[id] = value;
        // console.log("Data", data);
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
        console.log('Data after selection',data);
        return data;
      });
    }

    if (value === "father") { setHideFather('hidden')
    } else if (value === "mother") {  setHideMother("hidden");
    } else if (value === "husband") { setHideHusband("hidden");
    } else if (value === "wife") {  setHideWife("hidden");
    }
  }

  // Save button handler
  function saveButton(){

    if (Object.keys(temporaryData).length!==relativesOfPerson.length){
      alert(`Please enter everyone's relation`);
      return
    }

    console.log("Post request");
    
    // If all members relation are added
    if (!membersInFamily[indexOfMembersInFamily]){
      alert("All relations added");
      return;
    }//If all relations are not added
    else if (membersInFamily[indexOfMembersInFamily]) {
      // initialising the details storing variables
      setRelations({
        sisters: [],
        brothers: [],
        sons: [],
        daughters: [],
      });
      setTemporaryData({});
      // Unhiding all options
      setHideWife("");
      setHideHusband("");
      setHideMother("");
      setHideFather("");
      // Changing name of the person
      setPerson(membersInFamily[indexOfMembersInFamily].name);
      // relatives for the next person
      setRelativesOfPerson(
        membersInFamily.filter((ele, index) => index !== indexOfMembersInFamily)
      );
      setIndexOfMembersInFamily((prev) => prev + 1);

    }
  }

  function Selection({ props }) {
    const {id,defaultValue}=props;
    return (
      <select
        defaultValue={defaultValue}
        name="relation"
        id="relation"
        onChange={(event) => selectionHandler(event, id)}
      >
        <option value="notApplicable">Not Applicable</option>
        <option className={hideFather} value="father">
          Father
        </option>
        <option className={hideMother} value="mother">
          Mother
        </option>
        <option className={hideHusband} value="husband">
          Husband
        </option>
        <option className={hideWife} value="wife">
          Wife
        </option>
        <option value="son">Son</option>
        <option value="daughter">Daughter</option>
        <option value="brother">Brother</option>
        <option value="sister">Sister</option>
      </select>
    );
  }

  useEffect(()=>{
  // axios.get(`http://localhost:5000/api/v1/family/${familyId}`).then((res)=>{
  //     const result=res.data.data;
  //     console.log(result);
  //     if(res.data.status==='success'){
  //         setFamilyName(result.familyName);
  //         setMembers(result.members);
  //         const list=result.members;
  //         setRelatives(list.filter((ele, index) => index !== 0));
  //     }
  // });
    // Temporary response for testing
    const res = {
      status: "success",
      data: {
        _id: "6310a0b90aec76f73f4aee91",
        familyName: "family1",
        address: "gshsh",
        houseNum: "1",
        wardNum: 2,
        parishId: "ch1",
        pin: "3",
        members: [
          {
            _id: "6310a11e0aec76f73f4aee94",
            familyId: "6310a0b90aec76f73f4aee91",
            familyName: "family1",
            baptismName: "m1",
            name: "m1",
            phoneNumber: 9900767795,
            email: "jestin9900767795",
            gender: "M",
            maritalStatus: "single",
            isActive: true,
            wardNo: 2,
            brothers: [],
            sisters: [],
            sons: [],
            daughters: [],
            __v: 0,
            id: "6310a11e0aec76f73f4aee94",
          },
          {
            _id: "6310a11e0aec76f73f4aee95",
            familyId: "6310a0b90aec76f73f4aee91",
            familyName: "family1",
            baptismName: "m2",
            name: "m2",
            phoneNumber: 9900767795,
            email: "jestin9900767795",
            gender: "M",
            maritalStatus: "single",
            isActive: true,
            wardNo: 2,
            brothers: [],
            sisters: [],
            sons: [],
            daughters: [],
            __v: 0,
            id: "6310a11e0aec76f73f4aee95",
          },
          {
            _id: "6310a11e0aec76f73f4aee96",
            familyId: "6310a0b90aec76f73f4aee91",
            familyName: "family1",
            baptismName: "m3",
            name: "m3",
            phoneNumber: 9900767795,
            email: "jestin9900767795",
            gender: "M",
            maritalStatus: "single",
            isActive: true,
            wardNo: 2,
            brothers: [],
            sisters: [],
            sons: [],
            daughters: [],
            __v: 0,
            id: "6310a11e0aec76f73f4aee96",
          },
          {
            _id: "6310a11e0aec76f73f4aee97",
            familyId: "6310a0b90aec76f73f4aee91",
            familyName: "family1",
            baptismName: "m4",
            name: "m4",
            phoneNumber: 9900767795,
            email: "jestin9900767795",
            gender: "M",
            maritalStatus: "single",
            isActive: true,
            wardNo: 2,
            brothers: [],
            sisters: [],
            sons: [],
            daughters: [],
            __v: 0,
            id: "6310a11e0aec76f73f4aee97",
          },
        ],
        __v: 0,
      },
    };
    const result = res.data;
    if (res.status === "success") {
      setMembersInFamily(result.members);
      const list = result.members;
      setPerson(list[0].name);
      setRelativesOfPerson(list.filter((ele, index) => index !== 0));
      setIndexOfMembersInFamily(1);
    }
  },[])

  return (
    <div className="container-family">
      <Navigation />
      <div className="title-div">
        <div className="family-name">
          <h1>Kazhuthadiyil</h1>
        </div>
      </div>
      <hr />
      <div className="relation-details-container">
        <div className="relation-details-head">
          <h1 className="relation-title-head">{person}</h1>
          <h1 className="relation-type-head">Relation Type</h1>
        </div>
        {
          relativesOfPerson.map((relative,index)=>{
            const {id}=relative;
            let defaultValue = "notApplicable";
            if(temporaryData[id]){
              defaultValue = temporaryData[id];
            }
            return (
              <div className="relatives-entry-div" key={index}>
                <h1>{relative.name}</h1>
                <Selection props={{id,defaultValue}}/>
              </div>
            );
          })
        }
      </div>
      <div className="save-btn-div">
        <button onClick={()=>saveButton()}>Save</button>
      </div>
    </div>
  );
}