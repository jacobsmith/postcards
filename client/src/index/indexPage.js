import React from 'react';
import './indexPage.css';
import headerImg from './headerImg.png';
import cameraImg from './camera.png';
import PrimaryButton from './../button/primaryButton.js'

const IndexPage = () => {
  return (
    <div className="page">
      <div className="header">
        <img src={headerImg} alt="logo" className="headerLogo"/>
        <div className="headerName">Say it with a Postcard</div>
        <div className="headerSpacer"></div>
      </div>

      <div className="mainBody">
        <div className="getStarted">Hello, let's get started!</div>
        <div className="mainCameraOutsideBorder">
          <div className="mainCamera">
            <img src={cameraImg} alt="" className=""/>
          </div>
        </div>

        <PrimaryButton text="Build your postcard" />
      </div>

      <div className="footer">
        &copy; Say it with a Postcard. All Rights Reserved.
      </div>
    </div>
  )
}

export default IndexPage;
