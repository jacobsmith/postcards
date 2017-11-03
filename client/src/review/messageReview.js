import React from 'react';
import EditInfo from './editInfo.js';

const MessageReview = ({ message }) => {
  return (
    <div>
      <div className="MessageReview">
        {message}
      </div>

      <EditInfo editLocation="/message" />
    </div>
  )
}

export default MessageReview;
