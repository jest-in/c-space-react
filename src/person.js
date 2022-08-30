import Logo from './Assets/logo'
import IconMenu from './Assets/Icon_Menu'

import { personId } from './family-individual';
import { useEffect } from 'react';

import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon_Add from './Assets/Icon_Add';
import Icon_AddWhite from "./Assets/Icon_AddWhite";

const Person = () => {

  const navigate=useNavigate();

  // Personal details
  const [personDetails,setPersonDetails]=useState({});

  // Person details section
  const [detailSection,setDetailSection]=useState('hidden');

  useEffect(()=>{
    // If person id is null
    if(!personId)
    navigate('/family-individual');

    axios
      .get(`http://localhost:5000/api/v1/persons/id/${personId}`)
      .then((res) => {
        const result = res.data.person;

        if(res.data.status==='success')
        {
          setPersonDetails(result);
          setDetailSection('');
        }
        else
        navigate('/family-individual');
      });
  },[])

  return (
    <div className="container-family">
      <header>
        <div className="nav-div">
          <nav>
            <div className="logo-div">
              <Logo />
            </div>
            <div className="navigations">
              <a href="#">Overview</a>
              <a className="registry-nav" href="#">
                Registries
                <div className="sub-menu1-div">
                  <ul>
                    <div className="sub-menu-registries-div">
                      <li>Family Registry</li>
                      <li>
                        <Icon_AddWhite />
                        Add Family
                      </li>
                    </div>
                    <li>Engagement Registry</li>
                    <li>Marriage Registry</li>
                    <li>Death Reigistry</li>
                  </ul>
                </div>
              </a>
              <a href="#">Transactions</a>
              <a className="announcement-nav" href="#">
                Announcements
                <div className="sub-menu2-div">
                  <ul>
                    <li>Add Announcement</li>
                    <li>View Announcements</li>
                  </ul>
                </div>
              </a>
            </div>
          </nav>
        </div>
      </header>
      <main className={detailSection}>
        <div className="title-div">
          <div className="person-head">
            <h1>{personDetails.name ? personDetails.name : "-"}</h1>
          </div>
          <div className="registries-nav-div">
            <a href="#">Baptism Registry</a>
            <a href="#">Engagement Registry</a>
            <a href="/marriage-registry">Marriage Registry</a>
            <a href="#">Death Registry</a>
          </div>
          <div className="menu-div">
            <IconMenu />
          </div>
        </div>
        <hr />
        <div className="members-entries-div">
          <div className="details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                {personDetails.name ? personDetails.name : "-"}
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
              <div className="heading-baptism">Baptism</div>
              <div className="person-baptism">
                {personDetails.baptism
                  ? personDetails.baptism.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Marriage</div>
              <div className="person-marriage">
                {personDetails.marriage
                  ? personDetails.marriage.split("T")[0]
                  : "-"}
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Death</div>
              <div className="person-death">
                {personDetails.death ? personDetails.death.split("T")[0] : "-"}
              </div>
            </div>
          </div>
          <div className="person-photo-div">
            <img
              src={require("./Assets/person-photo.png")}
              alt="personal pic"
            />
            <a href="">Sign up</a>
            <a href="">Edit</a>
            <a href="">Send Message</a>
            <a href="">Proposed Changes</a>
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
export {personId};