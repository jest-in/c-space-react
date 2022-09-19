import React from 'react'

export default function AddVoucher() {
  return (
    <div className="container-family">
  <header>
    <div className="nav-div">
      <nav>
        <div className="logo-div">
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className="navigations">
          <a href="#">Overview</a>
          <a className="registry-nav" href="#">Registries
            <div className="sub-menu1-div">
              <ul>
                <li>Family Registry</li>
                <li>Engagement Registry</li>
                <li>Marriage Registry</li>
                <li>Death Reigistry</li>
              </ul>
            </div>
          </a>
          <a href="#">Transactions</a>
          <a href="#">Pious Associations</a>
        </div>
      </nav>
    </div>
  </header>
  <div className="title-div">
    <div className="family-master regestries-person-head">
      <h1>Add voucher</h1>
    </div>
  </div>
  <hr />
  <div className="add-voucher-container">
    <div className="add-voucher-sub1">
      <div className="vno-div">
        <label htmlFor="vno">Voucher number</label>
        <input type="text" readOnly />
      </div>
      <div className="vdate-div">
        <label htmlFor="vdate">Date</label>
        <input type="date" />
      </div>
      <div className="vacc-div">
        <label htmlFor="vacc">Account</label>
        <select name="relation" id="under-group">
          <option value selected disabled hidden />
          <option value="income">Cash</option>
          <option value="expenses">Bank</option>
        </select>
      </div>
    </div>
    <div className="add-voucher-sub2">
      <div className="vno-div">
        <label htmlFor="vno">Particulars</label>
        <select name="relation" id="under-group">
          <option value selected disabled hidden />
          <option value="income">Electricity bill</option>
          <option value="expenses">
            printing and stationary
          </option>
        </select>
      </div>
      <div className="vdate-div">
        <label htmlFor="vdate">Amount</label>
        <input type="text" />
      </div>
      <div className="vacc-div">
        <label htmlFor="vacc">Type</label>
        <select name="relation" id="under-group">
          <option value selected disabled hidden />
          <option value="income">Receipt</option>
          <option value="expenses">Payment</option>
        </select>
      </div>
    </div>
    <div className="add-voucher-sub3">
      <label htmlFor="narration">Narration</label>
      <input type="text" />
    </div>
  </div>
  <div className="create-led-btn-div">
    <button href className="create-led-btn">Add Voucher</button>
  </div>
</div>

  )
}
