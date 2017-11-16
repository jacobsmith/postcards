import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';
import postcardImg from './../icons/postcard.svg'
import customFetch from './../helpers/customFetch.js';
import { connect } from 'react-redux';


class Payment extends Component {
  constructor() {
    super()
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    let body = {
      stripeToken: token,
      postcard_id: this.props.postcardId
    }

    customFetch('/api/postcards/create', {
      method: 'post',
      body: JSON.stringify(body)
    })
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <div style={{height: '100px'}}></div>
        <div className="PaymentReady-Text">
          Your postcard is ready to be sent!<br /> Simply click the button below to pay and it will be on its way!
        </div>
{/*
        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={1250}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            label="Buy 10 cards for $14"
          />
        </div>

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={2500}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            label="Buy 20 cards for $25"
          />
        </div>

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={4500}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            label="Buy 50 cards for $60"
          />
        </div>

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={4500}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            label="Buy 100 cards for $110"
          />
        </div> */}

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_live_lzEl0T1QkJfJNGTu8mwlANIK"
            amount={149}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
            label="Send the postcard for $1.49"
          />
        </div>

        <Link to="/approve">
        <button style={{border: '1px solid gray', marginTop: '2em'}}>Review postcard again</button>
      </Link>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {
    postcardId: state.postcardPreview.postcardId
  }
}

export default connect(
  mapStateToProps
)(Payment);
