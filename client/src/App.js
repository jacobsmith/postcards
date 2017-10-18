import React, { Component } from 'react';
import customFetch from './helpers/customFetch.js';
import CharacterCounter from './characterCounter/characterCounter.js';
import PostcardMessageInput from './postcardMessageInput/postcardMessageInput.js';
import Button from './button/button.js';
import ImageUpload from './imageUpload/imageUpload.js'

import Address from './address/address.js';

import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      imgSrc: null,
      photoId: null,
      thumbnails: [],
      messageLength: 0,
      maxMessageLength: 300,
      address: {
        from: {
          addressName: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        },
        to: {
          addressName: '',
          street: '',
          city: '',
          state: '',
          zip: ''
        }
      }
    }
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.previewPostcard = this.previewPostcard.bind(this);
    this.addressChanger = this.addressChanger.bind(this);
    this.canPreview = this.canPreview.bind(this);
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

  handleMessageChange(e) {
    this.setState({ message: e.target.value, messageLength: e.target.value.length })
  }

  previewPostcard() {
    console.log('got here')
    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photoId: this.state.photoId,
        message: this.state.message,
        address: this.state.address
      })
    })
    .then(data => this.setState({ front: data.front, back: data.back }))
  }

  addressChanger(addressType) { // from | to
    var self = this;

    return function(attribute) { // name, street, city, state, zip
      return function(event) {
        event.persist(); // if we don't persis the event, it is nullified before setState function runs

        this.setState(prevState => {
          let oldAddress = Object.assign({}, prevState.address)
          oldAddress[addressType][attribute] = event.target.value;

          return {
            address: oldAddress
          }
        }
      )
      }.bind(self);
    }
  }

  canPreview() {
    console.log('executing')
    return this.state.imgSrc &&
    this.state.address.from.addressName &&
    this.state.address.from.street &&
    this.state.address.from.city &&
    this.state.address.from.state &&
    this.state.address.from.zip &&
    this.state.address.to.addressName &&
    this.state.address.to.street &&
    this.state.address.to.city &&
    this.state.address.to.state &&
    this.state.address.to.zip &&
    this.state.message
  }

  render() {
    return (
      <div className="App">
        <ImageUpload uploadPhoto={this.uploadPhoto} imgSrc={this.state.imgSrc}/>

        <div className="fromAndTo">
          <Address
            namePlaceholder="From"
            onChange={this.addressChanger('from')}
            addressName={this.state.address.from.addressName}
            street={this.state.address.from.street}
            city={this.state.address.from.city}
            state={this.state.address.from.state}
            zip={this.state.address.from.zip}
          />

          <Address
            namePlaceholder="To"
            onChange={this.addressChanger('to')}
            addressName={this.state.address.to.addressName}
            street={this.state.address.to.street}
            city={this.state.address.to.city}
            state={this.state.address.to.state}
            zip={this.state.address.to.zip}
          />
        </div>


        <PostcardMessageInput value={this.state.message} onChange={this.handleMessageChange} />
        <CharacterCounter count={this.state.messageLength} max={this.state.maxMessageLength} />

        <Button valid={this.canPreview} onClick={this.previewPostcard}>Send Postcard</Button>

        <div className="front-of-postcard">
          <img src={this.state.front} />
        </div>

        <div className="back-of-postcard">
          <img src={this.state.back} />
        </div>
      </div>
    );
  }
}

export default App;
