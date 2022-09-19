import React from 'react'
import Icon_Close from '../Assets/Icon_Close';
import Icon_Menu from '../Assets/Icon_Menu'
import Logo from '../Assets/logo'
import Navigation from '../navigation';

export default function Ledgers() {
    function clickListener() {
        console.log("clicked");
    }
  return (
    <div className="container-family">
      <div className="create-legder-popup-div1">
        <div
          className="leg-pop-close-div"
          onClick={() => {
            // setGroupName("");
            // setGroupNature("");
            // setShowCreateGroup("hidden");
          }}
        >
          <Icon_Close />
        </div>       
        <div className="leg-pop-ledname-div">
          <label htmlFor>Ledger name</label>
          <input type="text" />
          <label className="add-family-error" htmlFor="error">
            This field is required
          </label>
        </div>
        <div className="leg-pop-ledgroup-div">
          <label htmlFor>Under</label>
          {/* <input type="text" /> */}
          <select name="relation" id="under-group">
            <option value selected disabled hidden />
            <option value="Direct income">Direct income</option>
            <option value="Direct expenses">Direct expenses</option>
          </select>
          <label className="add-family-error" htmlFor="error">
            This field is required
          </label>
        </div>
        <button className="led-create-btn">Create</button>
      </div>

      <Navigation />
      <div className="title-div">
        <div className="family-master">
          <h1>Transactions</h1>
        </div>
        <div className="baptism-registry-edit-btn-div">
          <button className="create-led-btn">Create Ledger</button>
        </div>
      </div>
      <hr />
      <div className="famili-members-div transactions">
        <div className="heading-div">
          <div className="led-slno">S.No</div>
          <div className="led-name">Name</div>
          <div className="led-under">Under Group</div>
          <div className="led-no-tra">No of Transations</div>
          <div className="led-total">Total</div>
          <div className="led-type">Type</div>
        </div>
        <div className="member-details-div" onClick={() => clickListener()}>
          <div className="led-slno">1</div>
          <div className="led-name">Electricity Bill</div>
          <div className="led-under">Indirect Expenses</div>
          <div className="led-no-tra">5</div>
          <div className="led-total">-5520</div>
          <div className="led-type">Payment</div>
        </div>

        <div className="member-details-div" onClick={() => clickListener()}>
          <div className="led-slno">2</div>
          <div className="led-name">Printing & Stationary</div>
          <div className="led-under">Indirect Expenses</div>
          <div className="led-no-tra">2</div>
          <div className="led-total">-220</div>
          <div className="led-type">Payment</div>
        </div>

        <div className="member-details-div" onClick={() => clickListener()}>
          <div className="led-slno">3</div>
          <div className="led-name">Furniture & Fixtures</div>
          <div className="led-under">Indirect Expenses</div>
          <div className="led-no-tra">1</div>
          <div className="led-total">-28990</div>
          <div className="led-type">Payment</div>
        </div>

        <div className="member-details-div" onClick={() => clickListener()}>
          <div className="led-slno">4</div>
          <div className="led-name">Coconut Sale</div>
          <div className="led-under">Direct Income</div>
          <div className="led-no-tra">2</div>
          <div className="led-total">+898550</div>
          <div className="led-type">Receipt</div>
        </div>
      </div>
    </div>
  );
}
