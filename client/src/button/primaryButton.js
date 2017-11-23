import React from 'react';
import { Link } from 'react-router-dom';
import './primaryButton.css';

const PrimaryButton = ({ text, to, link = true }) => {
  if (link) {
    return (
      <Link to={to} className="primaryButton">
        <div>
          {text} &rsaquo;
        </div>
      </Link>
    )
  } else {
    return (
      <div className="primaryButon">
        {text} &rsaquo;
      </div>

    )
  }
}

export default PrimaryButton;
