import React, { useState } from 'react'
import Navigation from '../navigation'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CreateEvent() {
  const navigate = useNavigate();

  // input fields
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    festDate: "",
    amount:'',
  });

  // Errors
  const [nameError,setNameError]=useState('hidden');
  const [descriptionError,setDescriptionError] = useState("hidden");
  const [festDateError,setFestDateError] = useState("hidden");
  const [amountError,setAmountError] = useState("hidden");

  // Inputs handler
  function inputsHandler(event){
    const {name,value}=event.target;
    if(name==='name'){
      value?setNameError('hidden'):setNameError('');
    }
    else if(name==='description'){
      value ? setDescriptionError("hidden") : setDescriptionError("");
    }
    else if(name==='festDate'){
      value ? setFestDateError("hidden") : setFestDateError("");
    }
    else if(name==='amount'){
      value ? setAmountError("hidden") : setAmountError("");
    }
    setInputs((prev)=>{
      let data=prev;
      data[name]=value;
      return data;
    })
  }

  // create button
  function createButton(){
    // Checking whether its null
    inputs.name ? setNameError("hidden") : setNameError("");
    inputs.description ? setDescriptionError("hidden") : setDescriptionError("");
    inputs.festDate ? setFestDateError("hidden") : setFestDateError("");
    inputs.amount ? setAmountError("hidden") : setAmountError("");
    if (inputs.name && inputs.description && inputs.festDate && inputs.amount) {
      console.log("Entered inputs:", inputs);
      axios
        .post(`http://localhost:5000/api/v1/offerings`, inputs, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.status === "success") {
            navigate("/view-event");
          }
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
        });
    }
  }

  return (
    <div className="container-family">
  <Navigation/>
  <div className="announce-title-div">
    <div className="family-master">
      <h1>Create Event</h1>
    </div>
  </div>
  <hr />
  <div className="compose-announcement-div">
    <div className="family-details-div">
      <div className="payment-entries">
        <div className="inner-div-1 payment-inner-div-1">
          <div className="house-name-div">
            <h1>Name</h1>
            <input className="house-name-input" name='name' type="text" defaultValue={inputs.name} onChange={(event)=>inputsHandler(event)}/>
            <label className={`add-family-error ${nameError}`} htmlFor="error">This field is required</label>
          </div>
          <div className="address-div">
            <h1>Description</h1>
            <textarea className="address-input" cols={13} rows={4} name='description' defaultValue={inputs.description} onChange={(event)=>inputsHandler(event)}/>
            <label className={`add-family-error ${descriptionError}`} htmlFor="error">This field is required</label>
          </div>
        </div>
        <div className="inner-div-2 payment-inner-div-2">
          <div className="houseno-div">
            <h1>Date</h1>
            <input className="house-no-input" type="date" name='festDate' defaultValue={inputs.festDate} onChange={(event)=>inputsHandler(event)} />
            <label className={`add-family-error ${festDateError}`} htmlFor="error">This field is required</label>
          </div>
          <div className="ward-div">
            <h1>Amount</h1>
            <input className="house-no-input" type="text" name='amount' defaultValue={inputs.amount} onChange={(event)=>inputsHandler(event)} />
            <label className={`add-family-error ${amountError}`} htmlFor="error">This field is required</label>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="publish-btn-div">
    <button onClick={()=>createButton()}>Create</button>
  </div>
</div>

  )
}
