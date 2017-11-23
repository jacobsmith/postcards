import React, { Component } from 'react';
import AppNavButton from './../nav/appNavButton.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FromAddressReview from './../review/fromAddressReview.js';
import ToAddressReview from './../review/toAddressReview.js';
import MessageReview from './../review/messageReview.js';
import PostcardImageReview from './../review/postcardImageReview.js';
import postcardImg from './../icons/postcard.svg'
import StripeCheckout from 'react-stripe-checkout';
import PrimaryButton from './../button/primaryButton.js';
import * as previewActions from './../actions/previewActions.js';

import './approval.css';

class Approval extends Component {
  componentWillMount() {
    this.props.previewActions.previewPostcard(this.props.postcard);
  }

  render() {
    let postcard = this.props.postcard;
    return (
    <div>
      <div className="approvalContent">
        <div>
          <PostcardImageReview preview={this.props.postcardPreview} />
        </div>

        <div>
          <div className="address-reviews">
            <FromAddressReview address={postcard.addresses.from} />
            <ToAddressReview address={postcard.addresses.to} />
          </div>

          <div className="reviewHorizontalDivider"></div>

          <div className="message-review">
            <MessageReview message={postcard.message.value} />
          </div>
        </div>
      </div>

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            ComponentClass="div"
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={149}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            >
              <PrimaryButton text="Finish + Checkout" to="#" />
            </StripeCheckout>
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
