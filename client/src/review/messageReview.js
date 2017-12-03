import React from 'react';
import EditInfo from './editInfo.js';

const MessageReview = ({ message }) => {
  return (
    <div className="AddressReview">

      {/* Yes, this is using AddressReview classes because they work better. Dear future jacob, make it generic class names */}
      <div className="AddressReview-Type">my message</div>

      <div className="AddressReviewAndEdit">
        <div className="Address">
          <div>{message}</div>
        </div>
        <EditInfo editLocation="/message" />
      </div>
    </div>
  )
}

export default MessageReview;
