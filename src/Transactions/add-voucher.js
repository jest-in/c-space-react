import React from 'react'
import { useEffect,useState } from "react";
import Navigation from '../navigation';
import axios from "axios";

export default function AddVoucher() {
  const [ledgerDetails,setLedgerDetails]=useState([]);
  const [voucherNumber,setVoucherNumber]=useState('')
  const [account, setAccount] = useState("");
  const [narration,setNarration]=useState('')
  const [amount, setAmount] = useState("");
  const [ledgerId, setLedgerId] = useState("");
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  // input handler
  function inputHandler(event){
    const { name, value } = event.target;
    if(name==='voucherNum') setVoucherNumber(value);
    if (name === "account") setAccount(value);
    if (name === "narration") setNarration(value);
    if (name === "amount") setAmount(value);
    if (name === "ledgerId") setLedgerId(value);
    if (name === "type") setType(value);
    if (name === "date") setDate(value);
    console.log("Data entered:", name, value);
  }
  function addVoucherButton(){
    console.log(
      "Data entered:",
      voucherNumber ,
        account ,
        narration ,
        amount ,
        ledgerId ,
        type ,
        date
    );
    if(voucherNumber.toString&&account&&narration&&amount&&ledgerId&&type&&date){
      axios
        .post(
          "http://localhost:5000/api/v1/accounts/vouchers",
          {
            voucherNum: voucherNumber,
            account: account,
            date: date,
            narration: narration,
            amount: amount,
            ledgerId: ledgerId,
            type: type,
          },
          {
            withCredentials: true,
          }
        )
        .then((res) => {
          // console.log(res.data);
          if (res.data.status === "success") {
            alert("voucher added");
            window.location.reload(false);
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
          console.log("Error", err.response);
        });
    }
  }
  useEffect(()=>{
    axios
      .get(`http://localhost:5000/api/v1/accounts/vouchers`, {
        withCredentials: true,
      })
      .then((res) => {
        setVoucherNumber(res.data.results)
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
    axios
      .get(`http://localhost:5000/api/v1/accounts/ledgers`, {
        withCredentials: true,
      })
      .then((res) => {
        setLedgerDetails(res.data.data);
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  },[])
  return (
    <div className="container-family">
      <Navigation />
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
            <input
              name="voucherNum"
              defaultValue={voucherNumber}
              onChange={(event) => inputHandler(event)}
              type="text"
              readOnly
            />
          </div>
          <div className="vdate-div">
            <label htmlFor="vdate">Date</label>
            <input
              name="date"
              onChange={(event) => inputHandler(event)}
              type="date"
            />
          </div>
          <div className="vacc-div">
            <label htmlFor="vacc">Account</label>
            <select
              onChange={(event) => inputHandler(event)}
              name="account"
              id="under-group"
            >
              <option value selected disabled hidden />
              <option value="cash">Cash</option>
              <option value="bank">Bank</option>
            </select>
          </div>
        </div>
        <div className="add-voucher-sub2">
          <div className="vno-div">
            <label htmlFor="vno">Ledgers</label>
            <select
              onChange={(event) => inputHandler(event)}
              name="ledgerId"
              id="under-group"
            >
              <option value selected disabled hidden />
              {ledgerDetails.map((ledger, index) => {
                return (
                  <option
                    key={index}
                    value={ledger._id}
                  >
                    {ledger.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="vdate-div">
            <label htmlFor="vdate">Amount</label>
            <input
              name="amount"
              onChange={(event) => inputHandler(event)}
              type="text"
            />
          </div>
          <div className="vacc-div">
            <label htmlFor="vacc">Type</label>
            <select
              onChange={(event) => inputHandler(event)}
              name="type"
              id="under-group"
            >
              <option value selected disabled hidden />
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>
        <div className="add-voucher-sub3">
          <label htmlFor="narration">Narration</label>
          <input
            name="narration"
            onChange={(event) => inputHandler(event)}
            type="text"
          />
        </div>
      </div>
      <div className="create-led-btn-div">
        <button
          className="create-led-btn"
          onClick={() => addVoucherButton()}
        >
          Add Voucher
        </button>
      </div>
    </div>
  );
}
