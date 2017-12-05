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
import customFetch from './../helpers/customFetch.js';
import * as previewActions from './../actions/previewActions.js';
import * as postcardActions from './../actions/postcardActions.js';
import LoadingIndicator from './../loading/loadingIndicator.js';

import './approval.css';

class PostcardCreatedSuccessfully extends Component {
  render() {
    return (
    <div style={{marginTop: '3rem'}}>
      <div>Your postcard was created successfully!</div>
      <PrimaryButton to="/start" text="send another postcard!" onClick={this.props.postcardActions.createNewPostcard} />
    </div>
    )
  }
}

class PostcardError extends Component {
  render() {
    return (
      <div style={{marginTop: '3rem'}}>
        <div>Uh-oh, something happened while trying to make your postcard!</div>
        <PrimaryButton to="/address/to" text="Double check the information" />
      </div>
    )
  }
}

class CreatingPostcard extends Component {
  render() {
    return (
      <LoadingIndicator text="Securely processing your payment and sending your postcard!" wide={true} />
    )
  }
}

class Approval extends Component {
  constructor() {
    super()
    this.onToken = this.onToken.bind(this);
    this.preventCheckout = this.preventCheckout.bind(this);
  }

  componentWillMount() {
    this.props.previewActions.previewPostcard(this.props.postcard);
  }

  preventCheckout() {
    // ensure that we have all the necessary data for checkout
    console.log(this.props.postcardPreview.postcardId);

    if (!this.props.postcardPreview.postcardId) {
      return true;
    } else {
      return false;
    }
  }

  onToken(token) {
    let body = {
      stripeToken: token,
      postcard_id: this.props.postcardPreview.postcardId
    }

    this.props.postcardActions.creatingPostcard();

    customFetch('/api/postcards/create', {
      method: 'post',
      body: JSON.stringify(body)
    })
    .then(response => this.props.postcardActions.postcardCreated(response))
  }


  render() {
    let postcard = this.props.postcard;

    if (this.props.postcardCreation.creatingPostcard) {
      return <CreatingPostcard />
    } else if (this.props.postcardCreation.postcardCreatedSuccessfully) {
      return <PostcardCreatedSuccessfully postcardActions={this.props.postcardActions} />
    } else if (this.props.postcardCreation.postcardCreatedSuccessfully === false) {
      return <PostcardError />
    } else {
      return (
        <div>
          <div className="approvalContent">
            <div className="postcardImageReviewContainer">
              <PostcardImageReview preview={this.props.postcardPreview} />
            </div>

            <div className="approvalAddressAndMessage">
              <div className="address-reviews">
                <FromAddressReview address={postcard.addresses.from} />
                <ToAddressReview addresses={postcard.addresses.to} />
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
              description={`Send postcard to ${this.props.postcard.addresses.to.addressName}`}
              image={postcardImg}
              disabled={this.preventCheckout()}
              >
                <PrimaryButton text="Finish + Checkout" to="#" disabled={this.preventCheckout()} />
              </StripeCheckout>
            </div>
          </div>
        )
      }
    }
  }

  function mapStateToProps(state) {
    return {
      postcard: state.postcard,
      postcardPreview: state.postcardPreview,
      postcardCreation: state.postcardCreation
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      previewActions: bindActionCreators(previewActions, dispatch),
      postcardActions: bindActionCreators(postcardActions, dispatch),
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Approval);
