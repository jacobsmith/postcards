import React from 'react';
import './postcardMessageInput.css';
import CharacterCounter from './../characterCounter/characterCounter.js';
import { messageUpdated } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const maxMessageLength = 300;

const PostcardMessageInput = ({ value, messageUpdated }) => {
  return (
    <div>
      <div className="PostcardMessageInput--Container">
        <div className="inputGroup">
          <label for="message">My Message</label>
          <textarea name="message" className="PostcardMessageInput" value={value} onChange={messageUpdated} />
        </div>
      </div>
      <CharacterCounter count={value.length} max={maxMessageLength} />
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
