import React, { Component } from 'react';
import customFetch from './helpers/customFetch.js';

import './app.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      imgSrc: null,
      photoId: null
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
    .then((data) => this.setState({imgSrc: data.data, photoId: data.id}))
    .catch((error) => console.log(error));
  }

  handleMessageChange(e) {
    this.setState({ message: e.target.value })
  }

  previewPostcard() {
    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photo: this.state.imgSrc,
        message: this.state.message
      })
    })
    .then(data => this.setState({ postcardUrl: data.postcardUrl }))
  }

  render() {
    return (
      <div className="App">
        <ImageUpload uploadPhoto={this.uploadPhoto}/>
        <div className="imageContainer">
          <img src={this.state.imgSrc} />
        </div>
        <textarea value={this.state.message} onChange={this.handleMessageChange} />

        <div className="generatePostCard-button" onClick={this.previewPostcard}>Preview Postcard</div>
      </div>
    );
  }
}

class ImageUpload extends Component {
  constructor() {
    super()
    this.getPhotoData = this.getPhotoData.bind(this);
  }

  getPhotoData(uploadPhoto) {
    var file = this.refs.photo.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(event) {
      let putBody = {
        imgSrc: reader.result,
        imgName: file.name
      }

      uploadPhoto(putBody)
    };
  }

  render() {
    return (
      <input
        ref="photo"
        id="photo-uploader"
        type="file"
        accept="image/*"
        onChange={() => this.getPhotoData(this.props.uploadPhoto)}
      />
    )
  }
}

export default App;
