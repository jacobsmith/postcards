import React from 'react';
import './postcardMessageInput.css';

const PostcardMessageInput = ({ value, onChange }) => {
  return (
    <div className="PostcardMessageInput--Container">
      <textarea className="PostcardMessageInput" value={value} onChange={onChange} />
    </div>
  )
}

export default PostcardMessageInput;
