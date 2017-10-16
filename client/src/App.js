import React, { Component } from 'react';
import customFetch from './helpers/customFetch.js';
import CharacterCounter from './characterCounter/characterCounter.js';
import PostcardMessageInput from './postcardMessageInput/postcardMessageInput.js';
import Button from './button/button.js';
import ImageUpload from './imageUpload/imageUpload.js'

import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      imgSrc: null,
      photoId: null,
      thumbnails: [],
      messageLength: 0,
      maxMessageLength: 300
    }
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.previewPostcard = this.previewPostcard.bind(this);
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
    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photoId: this.state.photoId,
        message: this.state.message
      })
    })
    .then(data => this.setState({ front: data.front, back: data.back }))
  }

  render() {
    return (
      <div className="App">
        <ImageUpload uploadPhoto={this.uploadPhoto}/>
        <div className="imageContainer">
          <img src={this.state.imgSrc} />
        </div>

        <PostcardMessageInput value={this.state.message} onChange={this.handleMessageChange} />
        <CharacterCounter count={this.state.messageLength} max={this.state.maxMessageLength} />

        <Button onClick={this.previewPostcard}>Send Postcard</Button>

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
