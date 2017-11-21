import React, { Component } from 'react';
import AppNavButton from './../nav/appNavButton.js';
import { updateAddressInfo } from './../actions/actions.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PostcardMessageInput from './../postcardMessageInput/postcardMessageInput.js';

class AddressTo extends Component {
  render() {
    return (
      <PostcardMessageInput />
    )
  }
}

function mapStateToProps(state) {
  return {
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
