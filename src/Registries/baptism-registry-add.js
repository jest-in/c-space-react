import React from 'react'
<<<<<<< HEAD
import { useEffect } from 'react';
import Navigation from '../navigation';
import axios from "axios";
import {personId} from '../person';

export default function BaptismRegistryadd() {
  // Post request url https://cspace-api.herokuapp.com/api/v1/registry/baptism-registry/630cb03a30059d4540ea2584

=======
import Icon_Menu from '../Assets/Icon_Menu'
import IconUpload from '../Assets/Icon_Upload'
import Navigation from '../navigation'
>>>>>>> 66d1a17a6f54c491851bc4ab2c3a3c836b163471

  return (
    <div className="container-family">
<<<<<<< HEAD
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
          <img src="/Icon_Menu.svg" alt="filter" />
        </div>
      </div>
      <hr />
      <div className="members-entries-div">
        <div className="registry-div">
          <div className="registry-details-heading-div">
            <div className="name-person-div">
              <div className="heading-name">Baptism Name</div>
              <div className="person-name">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="name-person-div">
              <div className="heading-name">Name</div>
              <div className="person-name">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="dob-person-div">
              <div className="heading-dob">Family name</div>
              <div className="person-dob">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="baptism-person-div">
              <div className="heading-baptism">Father</div>
              <div className="person-baptism">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="marriage-person-div">
              <div className="heading-marriage">Mother</div>
              <div className="person-marriage">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-div">
              <div className="heading-death">Parish</div>
              <div className="person-death">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Birth Place</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-address-div">
              <div className="heading-address">Address</div>
              <div className="person-death-address">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Birth</div>
              <div className="person-death-ward">
                <input type="date" name="Name" placeholder="DD-MM-YYYY" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Date of Baptism</div>
              <div className="person-death-ward">
                <input type="date" name="Name" placeholder="DD-MM-YYYY" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godfather</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Godmother</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godfather</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish of Godmother</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Name of Minister</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
            <div className="death-person-ward-div">
              <div className="heading-ward">Parish Priest</div>
              <div className="person-death-ward">
                <input type="text" name="Name" />
                <label className="add-family-error" htmlFor="error">
                  This field is required
                </label>
              </div>
            </div>
=======
  <Navigation/>
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
      <Icon_Menu/>
    </div>
  </div>
  <hr />
  <div className="members-entries-div">
    <div className="registry-div">
      <div className="registry-details-heading-div">
        <div className="name-person-div">
          <div className="heading-name">Baptism Name</div>
          <div className="person-name">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
>>>>>>> 66d1a17a6f54c491851bc4ab2c3a3c836b163471
          </div>
        </div>
        <div className="registry-photo-div">
          <img className="upload-icon" src="/Icon-Upload.svg" alt="Upload" />
          <img
            className="marriage-photo"
            src="/marriage.png"
            alt="image/marriage"
          />
        </div>
      </div>
      <div className="desc-div">
        <div className="desc-heading">Description/Remarks</div>
        <div className="desc-content">
          <input type="text" name="Description" />
        </div>
        <div className="submit-btn-div">
          <button>Submit</button>
        </div>
      </div>
    </div>
<<<<<<< HEAD
  );
=======
    <div className="registry-photo-div">
      <IconUpload/>
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
      <input type="text" name="Description" />
    </div>
    <div className="submit-btn-div">
      <a href>Submit</a>
    </div>
  </div>
</div>

  )
>>>>>>> 66d1a17a6f54c491851bc4ab2c3a3c836b163471
}
