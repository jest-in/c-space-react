import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu'
import IconUpload from '../Assets/Icon_Upload'
import Navigation from '../navigation'

export default function BaptismRegistryAdd() {
  return (
    <div className="container-family">
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
          </div>
        </div>
        <div className="name-person-div">
          <div className="heading-name">Name</div>
          <div className="person-name">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">Family name</div>
          <div className="person-dob">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="baptism-person-div">
          <div className="heading-baptism">Father</div>
          <div className="person-baptism">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="marriage-person-div">
          <div className="heading-marriage">Mother</div>
          <div className="person-marriage">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-div">
          <div className="heading-death">Parish</div>
          <div className="person-death">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Birth Place</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-address-div">
          <div className="heading-address">Address</div>
          <div className="person-death-address">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Birth</div>
          <div className="person-death-ward">
            <input type="date" name="Name" placeholder="DD-MM-YYYY" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Baptism</div>
          <div className="person-death-ward">
            <input type="date" name="Name" placeholder="DD-MM-YYYY" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Name of Godfather</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Name of Godmother</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Parish of Godfather</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Parish of Godmother</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Name of Minister</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Parish Priest</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
      </div>
    </div>
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
}
