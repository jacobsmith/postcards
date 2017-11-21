import React from 'react';
import EditInfo from './editInfo.js';

const MessageReview = ({ message }) => {
  return (
    <div className="MessageReviewContainer">
      <div className="MessageReviewLabel">my message</div>

      <div className="MessageReview">
        {message}
      </div>

      <div style={{float: 'right'}}>
        <EditInfo editLocation="/message" />
      </div>
    </div>
  )
}

export default MessageReview;
