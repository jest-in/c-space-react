import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu'
import Icon_Upload from '../Assets/Icon_Upload'
import Navigation from '../navigation'

export default function DeathRegistryAdd() {
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
          <div className="heading-name">Name</div>
          <div className="person-name">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="dob-person-div">
          <div className="heading-dob">House name</div>
          <div className="person-dob">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="phone-person-div">
          <div className="heading-phone">Age</div>
          <div className="person-phone">
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
          <div className="heading-ward">Ward</div>
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
          <div className="heading-ward">Sickness</div>
          <div className="person-death-ward">
            <input type="text" name="Name" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-sacraments-div">
          <div className="heading-sacraments">
            Sacraments Received
          </div>
        </div>
        <div className="death-person-ward-div-sacraments">
          <div className="heading-confession">Confession</div>
          <div className="person-death-ward-anointing">
            <div className="radio-sacraments-1">
              <input id="confession-yes" name="confession" type="radio" />
              <label htmlFor="confession-yes">Yes</label>
            </div>
            <div className="radio-sacraments-2">
              <input id="confession-no" name="confession" type="radio" />
              <label htmlFor="confession-no">No</label>
            </div>
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div-sacraments">
          <div className="heading-viatium">Viatium</div>
          <div className="person-death-ward-anointing">
            <div className="radio-sacraments-1">
              <input id="viatium-yes" name="viatium" type="radio" />
              <label htmlFor="viatium-yes">Yes</label>
            </div>
            <div className="radio-sacraments-2">
              <input id="viatium-no" name="viatium" type="radio" />
              <label htmlFor="viatium-no">No</label>
            </div>
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div-sacraments anointing-div">
          <div className="heading-anointing">
            Anointing of sick
          </div>
          <div className="person-death-ward-anointing">
            <div className="radio-sacraments-1">
              <input id="anointing-yes" name="anointing" type="radio" />
              <label htmlFor="anointing-yes">Yes</label>
            </div>
            <div className="radio-sacraments-2">
              <input id="anointing-no" name="anointing" type="radio" />
              <label htmlFor="anointing-no">No</label>
            </div>
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Death</div>
          <div className="person-death-ward">
            <input type="date" name="Name" placeholder="DD-MM-YYYY" />
            <label className="add-family-error" htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="death-person-ward-div">
          <div className="heading-ward">Date of Burial</div>
          <div className="person-death-ward">
            <input type="date" name="Name" placeholder="DD-MM-YYYY" />
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
      <Icon_Upload/>
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
