import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import FromAddressReview from './../review/fromAddressReview.js';
import ToAddressReview from './../review/toAddressReview.js';
import MessageReview from './../review/messageReview.js';
import PostcardImageReview from './../review/postcardImageReview.js';
import postcardImg from './../icons/postcard.svg'
import StripeCheckout from 'react-stripe-checkout';
import Button from './../button/button.js';
import customFetch from './../helpers/customFetch.js';
import * as previewActions from './../actions/previewActions.js';
import * as postcardActions from './../actions/postcardActions.js';
import * as userActions from './../actions/userActions'
import LoadingIndicator from './../loading/loadingIndicator.js';

import './approval.css';

class PostcardCreatedSuccessfully extends Component {
  render() {
    return (
    <div style={{marginTop: '3rem'}}>
      <div>Your postcard was created successfully!</div>
      <Button to="/start" text="send another postcard!" onClick={this.props.postcardActions.createNewPostcard} />
    </div>
    )
  }
}

class PostcardError extends Component {
  render() {
    return (
      <div style={{marginTop: '3rem'}}>
        <div>Uh-oh, something happened while trying to make your postcard!</div>
        <div>You have not been charged yet. Please double check the addresses or email jacob.wesley.smith@gmail.com for assistance.</div>
        <Button to="/address/to" text="Double check the information" />
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
    this.allowCheckout = this.allowCheckout.bind(this);
  }

  componentWillMount() {
    this.props.previewActions.previewPostcard(this.props.postcard);
    this.props.userActions.fetchCredits();
  }

  componentWillUnmount() {
    this.props.previewActions.resetPreviewState();
  }

  allowCheckout() {
    // ensure that we have all the necessary data for checkout
    if (this.props.postcardPreview.postcardId) {
      return true;
    } else {
      return false;
    }
  }

  onToken(token, useCredit = false) {
    let body = {
      stripeToken: token,
      postcard_id: this.props.postcardPreview.postcardId,
      use_credit: useCredit
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

    let numberOfPostcards = this.props.postcard.addresses.to.length;
    let recipientDescription = this.props.postcard.addresses.to.length === 1 ?
      this.props.postcard.addresses.to[0].addressName :
      (this.props.postcard.addresses.to.length + ' recipients' )

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
              <Checkout onToken={this.onToken} numberOfPostcards={numberOfPostcards} recipientDescription={recipientDescription} enabled={this.allowCheckout} credits={this.props.credits} />
            </div>
          </div>
        )
      }
    }
  }

  const Checkout = ({ onToken, numberOfPostcards, recipientDescription, enabled, credits = 0}) => {
      let creditCheckout = (
        <div>
          <Button text={`Checkout for ${numberOfPostcards} credit${numberOfPostcards > 1 ? 's' : ''}`} to="#" enabled={enabled()} onClick={() => onToken(null, true)} />
          <div className="credits-checkout-desc">{`You have ${credits} credits.`}</div>
        </div>
        )

        function stripeCheckout(stripeText = "Finish + Checkout") {
          return (
            <StripeCheckout
              ComponentClass="div"
              token={onToken}
              stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
              // stripeKey="pk_test_1fP6F3hjLbG2TbLXPuEL3jEx"
              amount={179 * numberOfPostcards}
              name="Postcard"
              description={`Send postcard to ${recipientDescription}`}
              image={postcardImg}
              disabled={!enabled()}
              >
                <Button text={stripeText} to="#" enabled={enabled()} />
              </StripeCheckout>
          )
        }

      if (credits >= numberOfPostcards) {
        let stripeText = "Checkout with Credit Card"

        return (
          <div className="checkout-buttons">
            {creditCheckout}
            <div className="checkout-button-divider" style={{fontSize: '1.5rem', margin: '0.5rem'}}>OR</div>
            {stripeCheckout(stripeText)}
          </div>
        )
      } else {
        return (
          <div>
            {stripeCheckout()}
          </div>
        )
      }
  }

  function mapStateToProps(state) {
    return {
      postcard: state.postcard,
      postcardPreview: state.postcardPreview,
      postcardCreation: state.postcardCreation,
      credits: state.user.credits
    }
  }

  function mapDispatchToProps(dispatch) {
    return {
      previewActions: bindActionCreators(previewActions, dispatch),
      postcardActions: bindActionCreators(postcardActions, dispatch),
      userActions:    bindActionCreators(userActions, dispatch)
    }
  }

  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Approval);
