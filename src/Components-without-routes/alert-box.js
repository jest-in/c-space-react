import React from 'react'
import { useState } from 'react';
import Icon_Close from '../Assets/Icon_Close';

export default function AlertBox({props}) {
    const {alertHide,message}=props;
    const [hideComponent,setHideComponent]=useState('')
  return (
    <div className={`universal-alert-popup-bg ${alertHide} ${hideComponent}`}>
      <div className={`universal-alert-popup ${alertHide} ${hideComponent}`}>
        <div className="universal-alert-message-close-icon-div" onClick={()=>setHideComponent('hidden')}>
          <Icon_Close />
        </div>
        <div className="universal-alert-message-div">
          <label className="universal-alert-message">{message}</label>
        </div>
        <div className="universal-alert-ok-button-div">
          <button className="universal-alert-ok-buttion">Ok</button>
        </div>
      </div>
    </div>
  );
}
