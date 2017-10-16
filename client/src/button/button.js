import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = ({ onClick, children, className }) => {
  const classes = classNames([
    "Button",
    className
  ])

  return (
    <div className={classes}>
      {children}
    </div>
  )
}

export default Button;
