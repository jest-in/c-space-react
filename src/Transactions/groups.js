import React from 'react'
import Icon_Close from '../Assets/Icon_Close';
import Icon_Menu from '../Assets/Icon_Menu';
import Logo from '../Assets/logo';
import Navigation from '../navigation';

export default function Groups() {
    function clickListener(){
        console.log('clicked');
    }
  return (
    <div className="container-family">
  <Navigation/>
  <div className="title-div">
    <div className="family-master regestries-person-head">
      <h1>Groups</h1>
    </div>
    <div className="baptism-registry-edit-btn-div">
          <button className="baptism-edit-btn">Creete Group</button>
          {/* <a href="#">Baptism Registry</a>
          <a href="#">Engagement Registry</a>
          <a href="#">Marriage Registry</a>
          <a href="#">Death Registry</a> */}
        </div>
  </div>
  <hr />
  <div className="famili-members-div transactions">
    <div className="heading-div">
      <div className="grp-slno">S.No</div>
      <div className="grp-name">Name</div>
      <div className="grp-nature">Nature of group</div>
      <div className="grp-notrans">No of Transactions</div>
      <div className="grp-total">Total</div>
    </div>
    <div className="member-details-div" onclick="clickListener()">
      <div className="grp-slno">1</div>
      <div className="grp-name">Indirect Expenses</div>
      <div className="grp-nature">Expenses</div>
      <div className="grp-notrans">5</div>
      <div className="grp-total">5520</div>
    </div>
    <div className="member-details-div" onclick="clickListener()">
      <div className="grp-slno">2</div>
      <div className="grp-name">Direct Expenses</div>
      <div className="grp-nature">Expenses</div>
      <div className="grp-notrans">3</div>
      <div className="grp-total">221.50</div>
    </div>
    <div className="member-details-div" onclick="clickListener()">
      <div className="grp-slno">3</div>
      <div className="grp-name">Direct Income</div>
      <div className="grp-nature">Income</div>
      <div className="grp-notrans">2</div>
      <div className="grp-total">135500</div>
    </div>
    <div className="member-details-div" onclick="clickListener()">
      <div className="grp-slno">4</div>
      <div className="grp-name">Indirect Income</div>
      <div className="grp-nature">Income</div>
      <div className="grp-notrans">1</div>
      <div className="grp-total">25338</div>
    </div>
  </div>
  <div className="create-legder-popup-div1 ">
    <div className="leg-pop-close-div">
        <Icon_Close/>
      </div>
      <div className="leg-pop-ledname-div">
        <label htmlFor>Group name</label>
        <input type="text" />
        <label className="add-family-error" htmlFor="error">This field is required</label>
      </div>
      <div className="leg-pop-ledgroup-div">
        <label htmlFor>Nature of group</label>
        {/* <input type="text" /> */}
        <select name="relation" id="under-group">
          <option value selected disabled hidden />
          <option value="income">Income</option>
          <option value="expenses">Expenses</option>
        </select>
        <label className="add-family-error" htmlFor="error">This field is required</label>
      </div>
      <button className="led-create-btn">Create</button>
    </div>
</div>

  );
}
