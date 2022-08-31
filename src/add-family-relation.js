import React from 'react'
import Logo from "./Assets/logo";
import IconDrop from './Assets/Icon-Drop';
import Navigation from './navigation';

import { familyId } from './add-family';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function AddFamilyRelation() {

    // Index for memmber
    const [membersIndex,setMembersIndex]=useState('');

    // Members
    const [members,setMemebrs]=useState([]);

    // Array for the members that are relatives to the person
    const [relatives,setRelatives]=useState([]);

    // Family name
    const [familyName,setFamilyName]=useState('');

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/family/${familyId}`).then((res)=>{
            console.log(res.data);
            const result=res.data.data;
            if(res.data.success){
                setFamilyName(result.familyName);
                setMemebrs(result.members);
                setMembersIndex(0);
                const list=result.members;
                setRelatives(list.filter((ele, index) => index != 0));
            }
        });
    },[])

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
                    <h1 className="relation-title-head">{membersIndex?members[membersIndex].name:'-'}</h1>
                    <h1 className="relation-type-head">Relation Type</h1>
                </div>

                {
                    relatives.map((relative,index)=>{
                        const {name}=relative;
                        return (
                          <div className="relatives-entry-div" key={index}>
                            <h1>{name}</h1>
                            <select name="relation" id="relation">
                              <option value="notApplicable">
                                Not Applicable
                              </option>
                              <option value="father">Father</option>
                              <option value="mother">Mother</option>
                              <option value="husband">Husband</option>
                              <option value="wife">Wife</option>
                              <option value="son">Son</option>
                              <option value="daughter">Daughter</option>
                              <option value="brother">Brother</option>
                              <option value="sister">Sister</option>
                            </select>
                          </div>
                        );
                    })
                }

                {/* <div className="relatives-entry-div">
                    <h1>Damian Castri</h1>
                    <select name="relation" id="relation">
                        <option value="notApplicable">Not Applicable</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                    </select>
                </div>

                <div className="relatives-entry-div">
                    <h1>Damian Castri</h1>
                    <select name="relation" id="relation">
                        <option value="notApplicable">Not Applicable</option>
                        <option value="father">Father</option>
                        <option value="mother">Mother</option>
                        <option value="husband">Husband</option>
                        <option value="wife">Wife</option>
                        <option value="son">Son</option>
                        <option value="daughter">Daughter</option>
                        <option value="brother">Brother</option>
                        <option value="sister">Sister</option>
                    </select>
                </div> */}
            </div>
            <div className="save-btn-div">
                <a href="#">Save</a>
            </div>
        </div>
  )
}
