import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu';
import Logo from "../Assets/logo";
import Navigation from '../navigation';

export default function LedgerIndividual() {
        function clickListener() {
          console.log("clicked");
        }
  return (
    <>
        <div className="container-family">
        <Navigation/>
        <div className="title-div">
            <div className="family-master">
               <h1>Electricity Bill</h1> 
            </div>
            <div className="registries-nav-div">
                <a href="#">Ledgers</a>
                <a href="#">Groups</a>
                <a href="#">Vouchers</a>
                <a href="#">Reports</a>
            </div>
            <div className="menu-div">
                <Icon_Menu/>
            </div>   
        </div>
        <hr/>
        <div className="famili-members-div transactions">
            <div className="heading-div">
                <div className="led-indi-slno">S.No</div>
                <div className="led-indi-date">Date</div>
                <div className="led-indi-narration">Narration</div>
                <div className="led-indi-vno">Voucher No</div>
                <div className="led-indi-amt">Amount</div>
                <div className="led-indi-mode">Mode</div>
            </div>
            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-indi-slno">1</div>
                <div className="led-indi-date">1-4-2023</div>
                <div className="led-indi-narration">Being Electricity Bill Paid. Bill NO: 12345</div>
                <div className="led-indi-vno">5</div>
                <div className="led-indi-amt">-5520</div>
                <div className="led-indi-mode">Bank</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-indi-slno">2</div>
                <div className="led-indi-date">10-5-2023</div>
                <div className="led-indi-narration">Being Electricity Bill Paid. Bill NO: 99885</div>
                <div className="led-indi-vno">18</div>
                <div className="led-indi-amt">-6008</div>
                <div className="led-indi-mode">Cash</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-indi-slno">3</div>
                <div className="led-indi-date">23-5-2023</div>
                <div className="led-indi-narration">Being Electricity Bill Paid. Bill NO: 8899656</div>
                <div className="led-indi-vno">29</div>
                <div className="led-indi-amt">-3898</div>
                <div className="led-indi-mode">Cash</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-indi-slno">4</div>
                <div className="led-indi-date">11-6-2023</div>
                <div className="led-indi-narration">Being Electricity Bill Paid. Bill NO: 82569314</div>
                <div className="led-indi-vno">54</div>
                <div className="led-indi-amt">-4896</div>
                <div className="led-indi-mode">Bank</div>
            </div>
        </div>
        <div className="create-led-btn-div">
            <a href="" className="create-led-btn"><h1>Add Voucher</h1></a>
        </div>
    </div>
    </>
  )
}
