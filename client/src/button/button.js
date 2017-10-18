import React from 'react';
import classNames from 'classnames';
import './button.css';

const Button = ({ onClick, children, className, valid }) => {
  const classes = classNames([
    "Button",
    className,
    valid() ? "Button-valid" : "Button-invalid"
  ])

  let nop = () => {}

  return (
    <div className={classes} onClick={() => (valid() ? onClick() : nop())}>
      {children}
    </div>
  )
}

export default Button;
