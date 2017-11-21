import React, { Component } from 'react';
import AppNavButton from './../nav/appNavButton.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FromAddressReview from './../review/fromAddressReview.js';
import ToAddressReview from './../review/toAddressReview.js';
import MessageReview from './../review/messageReview.js';
import PostcardImageReview from './../review/postcardImageReview.js';
import * as previewActions from './../actions/previewActions.js';

import './approval.css';

class Approval extends Component {
  componentWillMount() {
    this.props.previewActions.previewPostcard(this.props.postcard);
  }

  render() {
    let postcard = this.props.postcard;
    return (
      <div className="approvalContent">
        <div>
          <PostcardImageReview preview={this.props.postcardPreview} />
        </div>

        <div>
          <div className="address-reviews">
            <FromAddressReview address={postcard.addresses.from} />
            <ToAddressReview address={postcard.addresses.to} />
          </div>

          <div className="message-review">
            <MessageReview message={postcard.message.value} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    postcard: state.postcard,
    postcardPreview: state.postcardPreview,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    previewActions: bindActionCreators(previewActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Approval);
