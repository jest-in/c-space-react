import React from 'react'
import Logo from '../Assets/logo';
import Icon_Menu from '../Assets/Icon_Menu'
import Navigation from '../navigation';

export default function Voucher() {
  return (
    <div className="container-family">
      <Navigation/>
      <div className="title-div">
        <div className="family-master">
          <h1>Vouchers</h1>
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
          <div className="vchr-vno">V.No</div>
          <div className="vchr-date">Date</div>
          <div className="vchr-particulars">Particulars</div>
          <div className="vchr-account">Account</div>
          <div className="vchr-type">Type</div>
          <div className="vchr-amount">Amount</div>
          <div className="vchr-mode">Mode</div>
        </div>
        <div className="member-details-div" onclick="clickListener()">
          <div className="vchr-vno">1</div>
          <div className="vchr-date">02-08-2022</div>
          <div className="vchr-particulars">Electricity Bill</div>
          <div className="vchr-account">Indirect Expenses</div>
          <div className="vchr-type">Payment</div>
          <div className="vchr-amount">5520</div>
          <div className="vchr-mode">Cash</div>
        </div>
        <div className="member-details-div" onclick="clickListener()">
          <div className="vchr-vno">2</div>
          <div className="vchr-date">15-08-2022</div>
          <div className="vchr-particulars">Printing and Stationary</div>
          <div className="vchr-account">Indirect Expenses</div>
          <div className="vchr-type">Payment</div>
          <div className="vchr-amount">320</div>
          <div className="vchr-mode">Bank</div>
        </div>
        <div className="member-details-div" onclick="clickListener()">
          <div className="vchr-vno">3</div>
          <div className="vchr-date">22-09-2022</div>
          <div className="vchr-particulars">Furniture &amp; Fixtures</div>
          <div className="vchr-account">Indirect Expenses</div>
          <div className="vchr-type">Payment</div>
          <div className="vchr-amount">85520</div>
          <div className="vchr-mode">Cash</div>
        </div>
        <div className="member-details-div" onclick="clickListener()">
          <div className="vchr-vno">4</div>
          <div className="vchr-date">25-09-2022</div>
          <div className="vchr-particulars">Coconut Sale</div>
          <div className="vchr-account">Direct Income</div>
          <div className="vchr-type">Receipt</div>
          <div className="vchr-amount">535800</div>
          <div className="vchr-mode">Bank</div>
        </div>
      </div>
      <div className="create-led-btn-div">
        <a href className="create-led-btn">
          <h1>Add Voucher</h1>
        </a>
      </div>
    </div>
  );
}
