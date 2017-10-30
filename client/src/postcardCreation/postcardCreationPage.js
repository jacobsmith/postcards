import React, { Component } from 'react';
import customFetch from './../helpers/customFetch.js';
import PostcardMessageInput from './../postcardMessageInput/postcardMessageInput.js';
import Button from './../button/button.js';
import ImageUpload from './../imageUpload/imageUpload.js'
import PreviewPostcard from './../previewPostcard/previewPostcard.js';

import AddressInputs from './../address/addressInputs.js';

import LoginWithFacebook from './../login/loginWithFacebook.js';

import { connect } from 'react-redux';

class PostcardCreationPage extends Component {
  constructor() {
    super()

    this.state = {
      thumbnails: [],
      previewingPostcard: false,
      front: '',
      back: '',
    }

    this.previewPostcard = this.previewPostcard.bind(this);
    this.canPreview = this.canPreview.bind(this);
    this.postcardCreatedSuccessfully = this.postcardCreatedSuccessfully.bind(this);
  }

  postcardCreatedSuccessfully() {
    console.log('created successfully!')
    this.setState({ previewingPostcard: false, postcardCreatedSuccessfully: true })
  }

  previewPostcard() {
    this.setState({ previewingPostcard: true })

    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photoId: this.props.photo.photoId,
        message: this.props.message.value,
        address: this.props.addresses
      })
    })
    .then(data => this.setState({ postcardReceived: true, front: data.front, back: data.back, postcardId: data.postcard_id }))
  }

  canPreview() {
    return this.props.photo.imgSrc &&
    this.props.addresses.from.addressName &&
    this.props.addresses.from.street &&
    this.props.addresses.from.city &&
    this.props.addresses.from.state &&
    this.props.addresses.from.zip &&
    this.props.addresses.to.addressName &&
    this.props.addresses.to.street &&
    this.props.addresses.to.city &&
    this.props.addresses.to.state &&
    this.props.addresses.to.zip &&
    0 < this.props.message.value.length &&
    this.props.message.value.length < 301
  }

  render() {
    return (
      <div className="postcardCreationPage">
        <LoginWithFacebook />

        <div>{this.state.postcardCreatedSuccessfully ? 'Your postcard was created successfully! Feel free to send this card to another person by entering in a new \'To\' address, or select a new photo by clicking the photo below!' : ''}</div>
        <ImageUpload />

        <AddressInputs />

        <PostcardMessageInput />
        <Button valid={this.canPreview} onClick={this.previewPostcard}>Send Postcard</Button>

        <PreviewPostcard
          previewingPostcard={this.state.previewingPostcard}
          front={this.state.front}
          back={this.state.back}
          recipient={this.props.addresses.to.addressName}
          postcardId={this.state.postcardId}
          postcardCreatedSuccessfully={this.postcardCreatedSuccessfully}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    message: state.postcard.message,
    addresses: state.postcard.addresses,
    photo: state.postcard.photo
  }
}

export default connect(mapStateToProps)(PostcardCreationPage);
