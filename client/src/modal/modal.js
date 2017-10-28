import React from 'react';
import './modal.css';

const Modal = ({ display, children }) => {
  return (
    <div className="Modal" style={{display: (display ? '' : 'none')}}>
      {children}
    </div>
  )
}

export default Modal;
