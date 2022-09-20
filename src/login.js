import Logo from "./Assets/logo";
import axios from "axios";

import {useNavigate} from 'react-router-dom'
import { useState } from "react";

function Login() {
const navigate=useNavigate();

  // Errors
  const [userIdError,setUserIdError]=useState('hidden');
  const [passwordError, setPasswordError] = useState("hidden");

  // Credentials
  const [credentials,setCredentials]=useState({});

  // Input Handler
  function inputsHandler(event){
    const {name,value}=event.target;
    if(name==='loginId')
    value?setUserIdError('hidden'):setUserIdError('');
    else
    value ? setPasswordError("hidden") : setPasswordError("");
    setCredentials((prev)=>{
      let data=prev;
      data[name]=value;
      return data;
    })
  }

  function authentication() {
    if(!credentials.loginId)
    setUserIdError('');
    if(!credentials.password)
    setPasswordError('');
    if(credentials.loginId&&credentials.password){
      console.log('Data:',credentials);
      axios
        .post("http://localhost:5000/api/v1/users/login", credentials, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.status === "success") {
            if(res.data.data.user.role=== 'Super-Admin'){
            navigate("/new-admin")}else navigate("/family");
          }
          
        })
        .catch((err) => {
          // Error
          alert(`${err.response.data.message}`);
        });
    }
    // fetch("http://localhost:5000/api/v1/users/login", {
    //   method: "POST",
    //   credentials:'include',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log(response));
  }
  return (
    <>
      <div className="container">
        <div className="div1">
          <div className="forms">
          <label className="user-id" htmlFor="uid">User id</label>

            <input type="text" name="loginId" id="uid" defaultValue={credentials.loginId?credentials.loginId:''} onChange={(event)=>inputsHandler(event)} />
            <label className={`add-family-error ${userIdError==='hidden'?'hidden':''}`} htmlFor="error">This field is required</label>

            <label className="password-text" htmlFor="password">
              Password
            </label>
            <input type="password" name="password" id="password"defaultValue={credentials.password?credentials.password:''} onChange={(event)=>inputsHandler(event)} />
            <label className={`add-family-error ${passwordError==='hidden'?'hidden':''}`} htmlFor="error">This field is required</label>
            <input type='submit' value='Log-In' className="login-btn" onClick={()=>authentication()}/>
            

            <a href="/forgot-password" className="forgot-password">
              Forgot Password?
            </a>
          </div>  
        </div>
        <div className="div2">
          <div className="logo-login">
            <Logo />
          </div>
          <h1>GOD WANTS</h1>
          <h1>YOU TO KNOW</h1>
          <h2>that its handled</h2>
        </div>
      </div>
    </>
  );
}

export default Login;
// onClick={() => authentication()}