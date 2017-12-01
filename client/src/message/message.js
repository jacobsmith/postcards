import React, { Component } from 'react';
import AppNavButton from './../nav/appNavButton.js';
import { updateAddressInfo } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostcardMessageInput from './../postcardMessageInput/postcardMessageInput.js';
import MessageLiveUpdate from './messageLiveUpdate.js';
import MessageFontSelect from './messageFontSelect.js';

class AddressTo extends Component {
  render() {
    return (
      <div style={{display: 'flex', justifyContent: 'center', marginBottom: '3rem'}}>
        <PostcardMessageInput />
        <MessageFontSelect />
        <MessageLiveUpdate message={this.props.messageValue} font={this.props.font} fontSize={this.props.fontSize}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    messageValue: state.postcard.message.value,
    font: state.postcard.message.font,
    fontSize: state.postcard.message.fontSize
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddressTo);
