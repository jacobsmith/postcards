import React from 'react';
import './indexPage.css';
import './dropdown.css';
import './processDropdown.css';
import './printDropdown.css';

import headerImg from './headerImg.png';
import cameraImg from './../assets/camera.svg';
// import cameraImg from './camera.png';
import PrimaryButton from './../button/primaryButton.js'
import DropdownToggle from './dropdown.js';

import ChangeLoginStatus from './../login/changeLoginStatus.js';

import Flash from './../layout/flash.js';

import Footer from './../layout/footer.js';

import DropdownsDisplay from './dropdowns/display.js';

const IndexPage = () => {
  return (
    <div className="page">
      <div className="header indexHeader">
        <div className="headerLeft">
          <img src={headerImg} alt="logo" className="headerLogo"/>
          <div className="headerName">Say it with a Postcard</div>
          <div className="headerSpacer"></div>
        </div>

        <div className="headerRight">
          <DropdownToggle text="Pricing" dropdownId="pricing" />
          <DropdownToggle text="Process" dropdownId="process" />
          <DropdownToggle text="Prints"  dropdownId="prints" />
          <ChangeLoginStatus />
        </div>
      </div>

      <Flash />

      <div className="mainBody">
        <DropdownsDisplay />

        <div className="getStarted">let's get started</div>
        <div className="frontCopy">In this day of hustle and bustle, take a minute to let someone know you care. A real, physical postcard delivered straight to their mailbox will surely bring a smile to their face!</div>
        <img src={cameraImg} alt="" className="selectImage"/>

        <PrimaryButton text="Build your postcard" to="/start"/>
      </div>

      <Footer />
    </div>
  )
}

export default IndexPage;
