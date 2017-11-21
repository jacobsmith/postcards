import React from 'react';
import './indexPage.css';
import './dropdown.css';
import './processDropdown.css';
import './printDropdown.css';

import headerImg from './headerImg.png';
import cameraImg from './camera.png';
import PrimaryButton from './../button/primaryButton.js'
import DropdownToggle from './dropdown.js';

import DropdownsDisplay from './dropdowns/display.js';

const IndexPage = () => {
  return (
    <div className="page">
      <div className="header">
        <div className="headerLeft">
          <img src={headerImg} alt="logo" className="headerLogo"/>
          <div className="headerName">Say it with a Postcard</div>
          <div className="headerSpacer"></div>
        </div>

        <div className="headerRight">
          <DropdownToggle text="Pricing" dropdownId="pricing" />
          <DropdownToggle text="Process" dropdownId="process" />
          <DropdownToggle text="Prints"  dropdownId="prints" />
        </div>
      </div>

      <div className="mainBody">
        <DropdownsDisplay />

        <div className="getStarted">Hello, let's get started!</div>
        <div className="mainCameraOutsideBorder">
          <div className="mainCamera">
            <img src={cameraImg} alt="" className=""/>
          </div>
        </div>

        <PrimaryButton text="Build your postcard" to="/start"/>
      </div>

      <div className="footer-container">
        &copy; Say it with a Postcard. All Rights Reserved.
      </div>
    </div>
  )
}

export default IndexPage;
