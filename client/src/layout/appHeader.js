import React from 'react';
import headerImg from './../index/headerImg.png';

import './appHeader.css';

const AppHeader = ({ text }) => {
  return (
    <div className="header">
      <div className="headerLeft">
        <img src={headerImg} alt="logo" className="headerLogo"/>
        <div className="headerName">Say it with a Postcard</div>
        <div className="headerSpacer"></div>
      </div>
    </div>
  )
}

export default AppHeader;
