import React, { Component } from 'react';
import Modal from './../modal/modal.js';
import postcardImg from './../icons/postcard.svg'
import StripeCheckout from 'react-stripe-checkout';
import ImageCarousel from './../imageCarousel/imageCarousel.js';
import './previewPostcard.css';

class PreviewPostcard extends Component {
  constructor() {
    super();
    this.state = {
      loaded: false
    }
    this.onToken = this.onToken.bind(this);
  }

  onToken(token) {
    console.log(token)
  }

  render() {
    let loaded = this.props.front && this.props.back;
    var content;

    if (loaded) {
      content = (
        <div>
          <ImageCarousel images={ [this.props.front, this.props.back] } />
          <div className="PreviewPostcard-Text">
            Your postcard looks awesome! Click below to finish checkout!
          </div>

        <div className="PreviewPostcard-ButtonContainer">
          <StripeCheckout
            token={this.onToken}
            stripeKey="pk_test_1fP6F3hjLbG2TbLXPuEL3jEx"
            amount={149}
            name="Postcard"
            description={`Send postcard to ${this.props.recipient}`}
            image={postcardImg}
          />
        </div>
        </div>
      )    } else {
      content = <div>Loading... This is going to be awesome!</div>
    }

    return (
      <Modal display={this.props.previewingPostcard}>
        {content}
      </Modal>
    )
  }
}

export default PreviewPostcard;
