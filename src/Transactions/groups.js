import React from 'react'
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
        <div className="family-master">
          <h1>Groups</h1>
        </div>
        <div className="registries-nav-div">
          <a href="#">Ledgers</a>
          <a href="#">Groups</a>
          <a href="#">Vouchers</a>
          <a href="#">Reports</a>
        </div>
        <div className="menu-div">
          <Icon_Menu />
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
        <div className="member-details-div" onClick={()=>clickListener()}>
          <div className="grp-slno">1</div>
          <div className="grp-name">irect Expenses</div>
          <div className="grp-nature">Expenses</div>
          <div className="grp-notrans">5</div>
          <div className="grp-total">5520</div>
        </div>

        <div className="member-details-div" onClick={()=>clickListener()}>
          <div className="grp-slno">2</div>
          <div className="grp-name">Direct Expenses</div>
          <div className="grp-nature">Expenses</div>
          <div className="grp-notrans">3</div>
          <div className="grp-total">221.50</div>
        </div>

        <div className="member-details-div" onClick={()=>clickListener()}>
          <div className="grp-slno">3</div>
          <div className="grp-name">Indirect Income</div>
          <div className="grp-nature">Income</div>
          <div className="grp-notrans">2</div>
          <div className="grp-total">135500</div>
        </div>

        <div className="member-details-div" onClick={()=>clickListener()}>
          <div className="grp-slno">4</div>
          <div className="grp-name">irect Income</div>
          <div className="grp-nature">Income</div>
          <div className="grp-notrans">1</div>
          <div className="grp-total">25338</div>
        </div>
      </div>
      <div className="create-led-btn-div">
        <a href="" className="create-led-btn">
          <h1>Add Group</h1>
        </a>
      </div>
    </div>
  );
}
