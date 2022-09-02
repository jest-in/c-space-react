import React from 'react'
import Navigation from './navigation';

import { familyId } from './add-family';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Counter
let count=0;


    // Relation data initialization
    let relationsData ={
        'father':'',
        'mother':'',
        'husband':'',
        'wife':'',
        'son':[],
        'daughter':[],
        'brothers':[],
        'sisters':[]
    }

  // Array for checking whether every members relations are selected
    let arrayOfRelatives=[];

    function initialiseRelationsDataAndArrayOfRelatives(){
    relationsData = {
        father: "",
        mother: "",
        husband: "",
        wife: "",
        son: [],
        daughter: [],
        brothers: [],
        sisters: [],
      };
      arrayOfRelatives = [];
    }

export default function AddFamilyRelation() {

  // Navigation
  const navigate=useNavigate();

  // Son,Daughter,Brothers,Sisters
  const [son,setSon]=useState([]);
  const [daughter,setDaughter]=useState([]);
  const [brothers, setBrothers] = useState([]);
  const [sisters, setSisters] = useState([]);

  // Hiding options of select
    const [hideFather, setHideFather] = useState(""); 
    const [hideMother, setHideMother] = useState(""); 
    const [hideHusband, setHideHusband] = useState(""); 
    const [hideWife, setHideWife] = useState(""); 

    // Index for memmber
    const [membersIndex,setMembersIndex]=useState(0);
    // console.log(membersIndex);

    // Members
    const [members,setMembers]=useState([]);

    // Array for the members that are relatives to the person
    const [relatives,setRelatives]=useState([]);

    // Family name
    const [familyName,setFamilyName]=useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/family/${familyId}`).then((res)=>{
            const result=res.data.data;
            console.log(result);
            if(res.data.status==='success'){
                setFamilyName(result.familyName);
                setMembers(result.members);
                const list=result.members;
                setRelatives(list.filter((ele, index) => index !== 0));
            }
        });
        count++

        // Temporary response for testing
      // const res = {
      //   status: "success",
      //   data: {
      //     _id: "6310a0b90aec76f73f4aee91",
      //     familyName: "family1",
      //     address: "gshsh",
      //     houseNum: "1",
      //     wardNum: 2,
      //     parishId: "ch1",
      //     pin: "3",
      //     members: [
      //       {
      //         _id: "6310a11e0aec76f73f4aee94",
      //         familyId: "6310a0b90aec76f73f4aee91",
      //         familyName: "family1",
      //         baptismName: "m1",
      //         name: "m1",
      //         phoneNumber: 9900767795,
      //         email: "jestin9900767795",
      //         gender: "M",
      //         maritalStatus: "single",
      //         isActive: true,
      //         wardNo: 2,
      //         brothers: [],
      //         sisters: [],
      //         sons: [],
      //         daughters: [],
      //         __v: 0,
      //         id: "6310a11e0aec76f73f4aee94",
      //       },
      //       {
      //         _id: "6310a11e0aec76f73f4aee95",
      //         familyId: "6310a0b90aec76f73f4aee91",
      //         familyName: "family1",
      //         baptismName: "m2",
      //         name: "m2",
      //         phoneNumber: 9900767795,
      //         email: "jestin9900767795",
      //         gender: "M",
      //         maritalStatus: "single",
      //         isActive: true,
      //         wardNo: 2,
      //         brothers: [],
      //         sisters: [],
      //         sons: [],
      //         daughters: [],
      //         __v: 0,
      //         id: "6310a11e0aec76f73f4aee95",
      //       },
      //       {
      //         _id: "6310a11e0aec76f73f4aee96",
      //         familyId: "6310a0b90aec76f73f4aee91",
      //         familyName: "family1",
      //         baptismName: "m3",
      //         name: "m3",
      //         phoneNumber: 9900767795,
      //         email: "jestin9900767795",
      //         gender: "M",
      //         maritalStatus: "single",
      //         isActive: true,
      //         wardNo: 2,
      //         brothers: [],
      //         sisters: [],
      //         sons: [],
      //         daughters: [],
      //         __v: 0,
      //         id: "6310a11e0aec76f73f4aee96",
      //       },
      //       {
      //         _id: "6310a11e0aec76f73f4aee97",
      //         familyId: "6310a0b90aec76f73f4aee91",
      //         familyName: "family1",
      //         baptismName: "m4",
      //         name: "m4",
      //         phoneNumber: 9900767795,
      //         email: "jestin9900767795",
      //         gender: "M",
      //         maritalStatus: "single",
      //         isActive: true,
      //         wardNo: 2,
      //         brothers: [],
      //         sisters: [],
      //         sons: [],
      //         daughters: [],
      //         __v: 0,
      //         id: "6310a11e0aec76f73f4aee97",
      //       },
      //     ],
      //     __v: 0,
      //   },
      // };
      // const result=res.data;
      // if(res.status==='success'){
      //     setFamilyName(result.familyName);
      //     setMembers(result.members);
      //     const list=result.members;
      //     setRelatives(list.filter((ele, index) => index !== 0));
      // }
    },[])

    // Function that retrieves the selected relation
    function relationHandler(event,index){
        const {value}=event.target;

            // If this id is previously saved as father,mother,husband,wife then decides whether to hide or unhide
            if (relationsData.father === relatives[index]._id&&value!=='father'){
              setHideFather('');
            }
            else
            if (relationsData.mother === relatives[index]._id&&value!=='mother'){
              setHideMother('');
            }
            else
            if (relationsData.husband === relatives[index]._id&&value!=='husband'){
              setHideHusband('');
            }
            else
            if (relationsData.wife === relatives[index]._id&&value!=='wife'){
              setHideWife('');
            }

          // If relation is changed from before then remove that id from array
            arrayOfRelatives=arrayOfRelatives.filter((id) =>{
                return id !== relatives[index]._id;
            });

            // If relation is changed from before then remove that id from the relationsData
            if(relatives[index]._id===relationsData.father){
              relationsData.father='';
            }else
            if(relatives[index]._id===relationsData.mother){
              relationsData.mother = "";
            }else
            if(relatives[index]._id===relationsData.husband){
              relationsData.husband = "";
            }else
            if(relatives[index]._id===relationsData.wife){
              relationsData.wife = "";
            }
            else{
                relationsData.son=relationsData.son.filter((id) => id !== relatives[index]._id);
                relationsData.daughter=relationsData.daughter.filter((id) => id !== relatives[index]._id);
                relationsData.brothers=relationsData.brothers.filter((id) => id !== relatives[index]._id);
                relationsData.sisters=relationsData.sisters.filter((id) => id !== relatives[index]._id);

                setSon((prev) =>
                  prev.filter((id) => id !== relatives[index]._id)
                );
                setDaughter((prev) =>
                  prev.filter((id) => id !== relatives[index]._id)
                );
                setBrothers((prev) =>
                  prev.filter((id) => id !== relatives[index]._id)
                );
                setSisters((prev) =>
                  prev.filter((id) => id !== relatives[index]._id)
                );
            }
          
            if (value !== "notApplicable") {
              // push id to the arrayOfRelatives
              arrayOfRelatives.push(relatives[index]._id);
              // Avoids duplicates
              arrayOfRelatives = [...new Set(arrayOfRelatives)];
            }

          // Storing details to the relationsData object
          if (value === "son"){
            relationsData.son.push(relatives[index]._id);
            setSon((prev)=>[...prev, relatives[index]._id])
          }
          else if (value === "daughter"){
            relationsData.daughter.push(relatives[index]._id);
            setDaughter((prev) =>[...prev, relatives[index]._id]);
          }
          else if (value === "brother"){
            relationsData.brothers.push(relatives[index]._id);
            setBrothers((prev) =>[...prev, relatives[index]._id]);
          }
          else if (value === "sister"){
            relationsData.sisters.push(relatives[index]._id);
            setSisters((prev) =>[...prev, relatives[index]._id]);
          }
          else if (value !== "notApplicable"){
            relationsData[value] = relatives[index]._id;
            if(value==='father'){
              setHideFather("hidden");
            }
            else
            if(value==='mother'){
              setHideMother("hidden");
            }
            else
            if(value==='husband'){
              setHideHusband("hidden");
            }
            else
            if(value==='wife'){
              setHideWife("hidden");
            }
          }
    }

    // Save button handler
    function saveButton(){

        // Post to server if each and everyone in the relative is mapped with the relation
        if(arrayOfRelatives.length===relatives.length){
          // Checks whether everyone is mapped with their relatives
          count++;
          if (count > members.length + 1)
          navigate('/add-family');

          let data={}
          if(relationsData.father)
          data["father"] = relationsData.father;
          if(relationsData.mother)
          data["mother"] = relationsData.mother;
          if(relationsData.husband)
          data["husband"] = relationsData.husband;
          if(relationsData.wife)
          data["wife"] = relationsData.wife;
          if(son.length)
          data["sons"] = son;
          if(daughter.length)
          data["daughters"] = daughter;
          if(brothers.length)
          data["brothers"] = brothers;
          if(sisters.length)
          data["sisters"] = sisters;

          console.log('Post Request Payload:',data);

          axios
            .post(
              `http://localhost:5000/api/v1/persons/relations/${members[membersIndex]._id}`,
              data,
              {
                withCredentials: true,
              }
            )
            .then((res) => {
              if (res.data.status === "success") {
                if (membersIndex < members.length - 1) {
                  initialiseRelationsDataAndArrayOfRelatives();
                  setHideFather("");
                  setHideMother("");
                  setHideHusband("");
                  setHideWife("");
                  setSon([]);
                  setDaughter([]);
                  setBrothers([]);
                  setSisters([]);
                  setMembersIndex((prev) => {
                    setRelatives(
                      members.filter((ele, index) => index !== prev + 1)
                    );
                    return prev + 1;
                  });
                }
              } else count--;
            });
          }
    }
    function Selection({props}) {
      const {index,defaultValue}=props;
      return (
        <select
          value={defaultValue ? defaultValue : "notApplicable"}
          name="relation"
          id="relation"
          onChange={(event) => relationHandler(event, index)}
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
  return (
        <div className="container-family">
            <Navigation/>
            <div className="title-div">
                <div className="family-name">
                    <h1>{familyName}</h1>
                </div>
            </div>
            <hr />
            <div className="relation-details-container">
                <div className="relation-details-head">
                    <h1 className="relation-title-head">{members.length!==0?members[membersIndex].name:'-'}</h1>
                    <h1 className="relation-type-head">Relation Type</h1>
                </div>

                {
                    relatives.map((relative,index)=>{
                        let defaultValue=''
                        const {name}=relative;
                        if(relative._id===relationsData.father)
                        defaultValue='father'
                        else
                        if (relative._id === relationsData.mother)
                        defaultValue='mother'
                        if(relative._id === relationsData.husband)
                        defaultValue='husband'
                        if(relative._id === relationsData.wife)
                        defaultValue='wife'
                        if(son.filter((id)=>id===relative._id)[0]){
                        defaultValue='son'
                        }
                        if(daughter.filter((id)=>id===relative._id)[0]){
                        defaultValue='daughter'
                        }
                        if(brothers.filter((id)=>id===relative._id)[0]){
                        defaultValue='brother'
                        }
                        if(sisters.filter((id)=>id===relative._id)[0]){
                        defaultValue='sister'
                        }
                          return (
                            <div className="relatives-entry-div" key={index}>
                              <h1>{name}</h1>
                              {/* <select name="relation" id="relation" onChange={(event)=>relationHandler(event,index)}>
                              <option value="notApplicable">
                                Not Applicable
                              </option>
                              <option className={hideFather} value="father">Father</option>
                              <option className={hideMother} value="mother">Mother</option>
                              <option className={hideHusband} value="husband">Husband</option>
                              <option className={hideWife} value="wife">Wife</option>
                              <option value="son">Son</option>
                              <option value="daughter">Daughter</option>
                              <option value="brother">Brother</option>
                              <option value="sister">Sister</option>
                            </select> */}
                              <Selection props={{index, defaultValue}} />
                            </div>
                          );
                    })
                }
            </div>
            <div className="save-btn-div">
                <button onClick={()=>saveButton()}>Save</button>
            </div>
        </div>
  )
}
