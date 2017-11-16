import React from 'react';
import './primaryButton.css';

const PrimaryButton = (props) => {
  return (
    <div className="primaryButton">
      {props.text} &rsaquo;
    </div>
  )
}

export default PrimaryButton;
