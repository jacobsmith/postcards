import React from 'react';
import { Link } from 'react-router-dom';

import './appNavButton.css';

const AppNavButton = ({ to, text }) => {
  return (
    <div className="AppNavButton">
      <Link to={to}>{text} 	&rsaquo;</Link>
    </div>
  )
}

export default AppNavButton;
