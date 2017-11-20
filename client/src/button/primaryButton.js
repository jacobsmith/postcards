import React from 'react';
import { Link } from 'react-router-dom';
import './primaryButton.css';

const PrimaryButton = ({ text, to }) => {
  return (
    <Link to={to} className="primaryButton">
      <div>
        {text} &rsaquo;
      </div>
    </Link>
  )
}

export default PrimaryButton;
