import React from "react";
import { useState } from "react";
import Logo from "./Assets/logo";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// inputs
let inputs = {};

export default function ForgotPassword() {
    const navigate=useNavigate();

  const [newPasswordSection, setNewPasswordSection] = useState("hidden");
  const [userIdHide, setUserIdHide] = useState("");
  const [otpHide, setOtpHide] = useState("hidden");

  const [confirmPasswordError, setConfirmPasswordError] = useState("hidden");
  const [newPasswordError, setNewPasswordError] = useState("hidden");

  // Inputs handling function
  function inputsHandler(event) {
    const { name, value } = event.target;
    inputs[name] = value;
  }

  // new pasword input section
  function inputsHandlerNewPass(event) {
    const { name, value } = event.target;
    inputs[name] = value;
    if (inputs["password"]) setNewPasswordError("hidden");
    if (name === "confirm-password") {
      if (value === inputs["password"]) {
        setConfirmPasswordError("hidden");
      }
      if (!inputs["password"]) {
        setNewPasswordError("Enter password");
        return;
      }
      if (value !== inputs["password"] || !value) {
        setConfirmPasswordError("passwords don't match");
      }
    }
  }

  // proceed button
  function proceedButton() {
    if (!inputs["loginId"]) {
      alert("Enter User Id");
      return;
    }
    console.log("forgot password success");
    // post request for forgot password with payload inputs, after success hide userId display otp, !only after success
    axios
      .post("http://localhost:5000/api/v1/users/forgot-password", inputs, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          setUserIdHide("hidden");
          setOtpHide("");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }
  function otpProceedButton() {
    if (!inputs["otp"]) {
      alert("Enter OTP");
      return;
    }
    // post request for forgot password with payload inputs, after success hide otp display new password section, delete inputs['otp'];,  !only after success
    axios
      .post("http://localhost:5000/api/v1/users/verify-otp", inputs, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          delete inputs["otp"];
          setOtpHide("hidden");
          setNewPasswordSection("");
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  // Change password button
  function changePassword() {
    if (!inputs["password"]) {
      alert("Enter new password");
      return;
    }
    if (!inputs["confirm-password"]) {
      alert("confirm new password");
      return;
    }
    if (inputs["password"] !== inputs["confirm-password"]) {
      setConfirmPasswordError("password missmatch");
      return;
    }
    delete inputs["confirm-password"];
    // post request
    axios
      .patch("http://localhost:5000/api/v1/users/reset-password", inputs, {
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.status === "success") {
          navigate('/login');
        }
      })
      .catch((err) => {
        // Error
        alert(`${err.response.data.message}`);
      });
  }

  return (
    <div className="container-family">
      <header>
        <div className="nav-div">
          <Logo />
        </div>
      </header>
      <div className="forgot-head-div">
        <div className="forgot-head">
          <h1>Forgot password ?</h1>
        </div>
      </div>

      <div className="otp-div">
        <div
          className={`otp-forms ${
            otpHide === "hidden" && userIdHide === "hidden" ? "hidden" : ""
          }`}
        >
          <label className={userIdHide} htmlFor="uid">
            User id
          </label>
          <input
            className={userIdHide}
            onChange={(event) => inputsHandler(event)}
            type="text"
            name="loginId"
            id="userid"
          />
          <label className={otpHide} htmlFor="otp" id="otp-label">
            Enter the OTP
          </label>
          <input
            className={otpHide}
            onChange={(event) => inputsHandler(event)}
            type="text"
            name="otp"
            id="otp"
          />
          <input
            className={userIdHide}
            onClick={() => proceedButton()}
            type="button"
            value="Proceed"
            id="otp-btn-proceed"
          />
          <input
            className={otpHide}
            onClick={() => otpProceedButton()}
            type="button"
            value="Proceed"
            id="otp-btn-proceed"
          />
        </div>
      </div>

      <div className={`otp-div new-pswrd-div ${newPasswordSection}`}>
        <div className="otp-forms password-forms">
          <label htmlFor="uid">Enter new password</label>
          <input
            onChange={(event) => inputsHandlerNewPass(event)}
            name="password"
            type="text"
            id="userid"
          />
          <label
            className={`add-family-error ${
              newPasswordError === "hidden" ? "hidden" : ""
            }`}
            htmlFor="error"
          >
            {newPasswordError}
          </label>
          <label htmlFor="otp" id="otp-label">
            Confirm new password
          </label>
          <input
            onChange={(event) => inputsHandlerNewPass(event)}
            name="confirm-password"
            type="text"
            id="otp"
          />
          <label
            className={`add-family-error ${
              confirmPasswordError === "hidden" ? "hidden" : ""
            }`}
            htmlFor="error"
          >
            {confirmPasswordError}
          </label>
          <input
            onClick={() => changePassword()}
            type="button"
            value="Change Password"
            id="otp-btn-proceed"
            className="change-pswrd"
          />
        </div>
      </div>
    </div>
  );
}
