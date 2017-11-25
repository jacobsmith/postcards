import React from 'react';
import { Link } from 'react-router-dom';
import lockIcon from './../assets/lock.svg'
import './primaryButton.css';

const PrimaryButton = ({ text, to, link = true, disabled = false }) => {
  if (link && !disabled) {
    return (
      <Link to={to} className="primaryButton">
        <div>
          {text} &rsaquo;
        </div>
      </Link>
    )
  } else {
    return (
      <a href="#" className={`primaryButon ${disabled ? 'primaryButton--disabled' : ''}`}>
        <div className="disabledContainer">
          { disabled ? <img className="disabled-lock-icon" src={lockIcon} /> : '' }
          <div className="disabledText">{text} &rsaquo;</div>
        </div>
      </a>

    )
  }
}

export default PrimaryButton;
