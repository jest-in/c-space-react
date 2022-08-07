import React from 'react'
import Logo from "./Assets/logo";

export default function ForgotPassword() {
  return (
    <div className="container-family">
        <header>
            <div className="nav-div">
                <Logo/>
            </div>
        </header>
        <div className="forgot-head-div">
            <div className="forgot-head">
               <h1>Forgot password ?</h1> 
            </div>
        </div>

        <div className="otp-div">
            <div className="otp-forms">
                <label htmlFor="uid">User id</label>
                <input type="text" id="userid"/>
                <label htmlFor="otp" id="otp-label">Enter the OTP</label>
                <input type="text" id="otp"/>
                <input type="button" value="Proceed" id="otp-btn-proceed"/>
            </div>
        </div>

        <div className="otp-div new-pswrd-div">
            <div className="otp-forms password-forms">
                <label htmlFor="uid">Enter new password</label>
                <input type="text" id="userid"/>
                <label htmlFor="otp" id="otp-label">Confirm new password</label>
                <input type="text" id="otp"/>
                <input type="button" value="Change Password" id="otp-btn-proceed" className="change-pswrd"/>
            </div>
        </div>
    </div>  )
}
