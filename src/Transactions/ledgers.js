import React from 'react'
import Icon_Menu from '../Assets/Icon_Menu'
import Logo from '../Assets/logo'
import Navigation from '../navigation';

export default function Ledgers() {
    function clickListener() {
        console.log("clicked");
    }
  return (
        <div className="container-family">
        <Navigation/>
        <div className="title-div">
            <div className="family-master">
               <h1>Transactions</h1> 
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
                <div className="led-slno">S.No</div>
                <div className="led-name">Name</div>
                <div className="led-under">Under Group</div>
                <div className="led-no-tra">No of Transations</div>
                <div className="led-total">Total</div>
                <div className="led-type">Type</div>
            </div>
            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-slno">1</div>
                <div className="led-name">Electricity Bill</div>
                <div className="led-under">Indirect Expenses</div>
                <div className="led-no-tra">5</div>
                <div className="led-total">-5520</div>
                <div className="led-type">Payment</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-slno">2</div>
                <div className="led-name">Printing & Stationary</div>
                <div className="led-under">Indirect Expenses</div>
                <div className="led-no-tra">2</div>
                <div className="led-total">-220</div>
                <div className="led-type">Payment</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-slno">3</div>
                <div className="led-name">Furniture & Fixtures</div>
                <div className="led-under">Indirect Expenses</div>
                <div className="led-no-tra">1</div>
                <div className="led-total">-28990</div>
                <div className="led-type">Payment</div>
            </div>

            <div className="member-details-div" onClick={()=>clickListener()}>
                <div className="led-slno">4</div>
                <div className="led-name">Coconut Sale</div>
                <div className="led-under">Direct Income</div>
                <div className="led-no-tra">2</div>
                <div className="led-total">+898550</div>
                <div className="led-type">Receipt</div>
            </div>
        </div>
        <div className="create-led-btn-div">
            <a href="" className="create-led-btn"><h1>Create Ledger</h1></a>
        </div>
    </div>
  )
}
