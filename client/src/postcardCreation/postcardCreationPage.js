import React, { Component } from 'react';
import customFetch from './../helpers/customFetch.js';
import PostcardMessageInput from './../postcardMessageInput/postcardMessageInput.js';
import Button from './../button/button.js';
import ImageUpload from './../imageUpload/imageUpload.js'
import PreviewPostcard from './../previewPostcard/previewPostcard.js';
import TestReduxComponent from './testReduxComponent.js';

import AddressInputs from './../address/addressInputs.js';

class PostcardCreationPage extends Component {
  constructor() {
    super()

    var fromAddress;
    if (localStorage.getItem('fromAddress')) {
      fromAddress = JSON.parse(localStorage.getItem('fromAddress'));
    } else {
      fromAddress = {
        addressName: '',
        street: '',
        city: '',
        state: '',
        zip: ''
      }
    }

    this.state = {
      imgSrc: null,
      photoId: null,
      thumbnails: [],
      message: '',
      messageLength: 0,
      maxMessageLength: 300,
      address: {
        from: fromAddress,
        to: {
          addressName: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        }
      },
      previewingPostcard: false,
      front: '',
      back: '',
    }

    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.previewPostcard = this.previewPostcard.bind(this);
    this.canPreview = this.canPreview.bind(this);
    this.postcardCreatedSuccessfully = this.postcardCreatedSuccessfully.bind(this);
  }

  uploadPhoto(photoObject) {
    customFetch(`/api/photos`, {
      method: 'post',
      body: JSON.stringify(photoObject)
    })
    .then((response) => {
      this.setState({imgSrc: response.photo.data, photoId: response.id})
    })
    .catch((error) => console.log(error));
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
        photoId: this.state.photoId,
        message: window.reduxStore.getState().postcardMessage.message,
        address: this.state.address
      })
    })
    .then(data => this.setState({ postcardReceived: true, front: data.front, back: data.back, postcardId: data.postcard_id }))
  }

  canPreview() {
    return this.state.imgSrc &&
    window.reduxStore.getState().addresses.from.addressName &&
    window.reduxStore.getState().addresses.from.street &&
    window.reduxStore.getState().addresses.from.city &&
    window.reduxStore.getState().addresses.from.state &&
    window.reduxStore.getState().addresses.from.zip &&
    window.reduxStore.getState().addresses.to.addressName &&
    window.reduxStore.getState().addresses.to.street &&
    window.reduxStore.getState().addresses.to.city &&
    window.reduxStore.getState().addresses.to.state &&
    window.reduxStore.getState().addresses.to.zip &&
    0 < window.reduxStore.getState().postcardMessage.message.length < 301
  }

  render() {
    return (
      <div className="postcardCreationPage">
        <div>{this.state.postcardCreatedSuccessfully ? 'Your postcard was created successfully! Feel free to send this card to another person by entering in a new \'To\' address, or select a new photo by clicking the photo below!' : ''}</div>
        <ImageUpload uploadPhoto={this.uploadPhoto} imgSrc={this.state.imgSrc}/>

        <AddressInputs />

        <PostcardMessageInput />
        <Button valid={this.canPreview} onClick={this.previewPostcard}>Send Postcard</Button>

        <PreviewPostcard
          previewingPostcard={this.state.previewingPostcard}
          front={this.state.front}
          back={this.state.back}
          recipient={this.state.address.to.addressName}
          postcardId={this.state.postcardId}
          postcardCreatedSuccessfully={this.postcardCreatedSuccessfully}
        />
      </div>
    );
  }
}

export default PostcardCreationPage;
