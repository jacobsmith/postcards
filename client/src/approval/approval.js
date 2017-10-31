import React from 'react';
import AppNavButton from './../nav/appNavButton.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FromAddressReview from './../review/fromAddressReview.js';
import ToAddressReview from './../review/toAddressReview.js';
import MessageReview from './../review/messageReview.js';

const Approval = ({ postcard }) => {
  return (
    <div>
      <FromAddressReview address={postcard.addresses.from} />
      <ToAddressReview address={postcard.addresses.to} />
      <MessageReview message={postcard.message.value} />

      <AppNavButton text="Finish + Checkout" to="/" />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    postcard: state.postcard
  }
}

function mapDispatchToProps(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Approval);
