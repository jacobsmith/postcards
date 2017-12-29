import React from 'react';
import './indexPage.css';
import './dropdown.css';
import './processDropdown.css';
import './printDropdown.css';

import headerImg from './headerImg.png';
import cameraImg from './../assets/camera.svg';
import Button from './../button/button.js'
import DropdownToggle from './dropdown.js';

import ChangeLoginStatus from './../login/changeLoginStatus.js';

import Flash from './../layout/flash.js';

import Footer from './../layout/footer.js';

import DropdownsDisplay from './dropdowns/display.js';
import { Link } from 'react-router-dom';

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
          <DropdownToggle text="About"  dropdownId="prints" />
          <ChangeLoginStatus />
        </div>
      </div>

      <Flash />

      <div className="mainBody">
        <DropdownsDisplay />

        <Link to="/start" className="getStarted">let's get started</Link>
        <div className="frontCopy">Send high quality, full color, 4" x 6" postcards directly to someone's mailbox</div>
        <div className="frontCopy">Great for thank you notes, party invitations, business connections, and more</div>
        <div className="frontCopy">Uses your own photos so you truly stand out - click below to get started!</div>

        <Link to="/start">
          <img src={cameraImg} alt="" className="selectImage"/>
        </Link>

        <Button text="Build your postcard" to="/start"/>
      </div>

      <Footer />
    </div>
  )
}

export default IndexPage;
