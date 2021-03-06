import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostcardMessageInput from './../postcardMessageInput/postcardMessageInput.js';
import MessageLiveUpdate from './messageLiveUpdate.js';
import MessageFontSelect from './messageFontSelect.js';

import './message.css';

class Message extends Component {
  render() {
    return (
      <div className="messagePageContent">
        <PostcardMessageInput />
        <MessageFontSelect />
        <MessageLiveUpdate message={this.props.messageValue} font={this.props.font} fontSize={this.props.fontSize} alignment={this.props.alignment}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messageValue: state.postcard.message.value,
    font: state.postcard.message.font,
    fontSize: state.postcard.message.fontSize,
    alignment: state.postcard.message.alignment
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Message);
