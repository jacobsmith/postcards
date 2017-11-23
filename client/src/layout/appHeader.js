import React from 'react';
import { Link } from 'react-router-dom';
import headerImg from './../index/headerImg.png';

import './appHeader.css';

const AppHeader = ({ text }) => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/" className="headerLink">
          <img src={headerImg} alt="logo" className="headerLogo"/>
          <div className="headerName">Say it with a Postcard</div>
      </Link>
      <div className="headerSpacer"></div>
    </div>
  </div>
)
}

export default AppHeader;
