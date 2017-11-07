import React from 'react';
import './pageContent.css';

const PageContent = (props) => {
  return (
    <div className="PageContent">
      {props.children}
    </div>
  )
}

export default PageContent;
