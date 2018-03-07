import React from 'react';
import './postcardMessageInput.css';
import { messageUpdated } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const PostcardMessageInput = ({ value, messageUpdated }) => {
  return (
    <div>
      <div className="PostcardMessageInput--Container">
        <div className="inputGroup">
          <label htmlFor="message" className="small-detail">My Message</label>
          <textarea name="message" className="PostcardMessageInput" value={value} onChange={messageUpdated} placeholder="Write a custom message!"/>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    value: state.postcard.message.value
  }
}

function mapDispatchToProps(dispatch) {
  return {
    messageUpdated: bindActionCreators(messageUpdated, dispatch)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostcardMessageInput);
