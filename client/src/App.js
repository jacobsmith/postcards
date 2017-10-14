import React, { Component } from 'react';
import customFetch from './helpers/customFetch.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      imgSrc: null,
      photoId: null,
      thumbnails: []
    }
    this.uploadPhoto = this.uploadPhoto.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.previewPostcard = this.previewPostcard.bind(this);
    this.fetchThumbnailsUntilLoaded = this.fetchThumbnailsUntilLoaded.bind(this);
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
    this.setState({ message: e.target.value })
  }

  previewPostcard() {
    customFetch('/api/postcards/preview', {
      method: 'post',
      body: JSON.stringify({
        photoId: this.state.photoId,
        message: this.state.message
      })
    })
    .then(data => (this.fetchThumbnailsUntilLoaded(data.thumbnails)))
  }

  fetchThumbnailsUntilLoaded(thumbnails) {
    let thumbnailsToFetch = thumbnails.map((thumbnail) => thumbnail.large)
    let urlA = thumbnailsToFetch[0]
    let urlB = thumbnailsToFetch[1]
    var urlALoaded, urlBLoaded;

    var fetchThumbnailA = setInterval(function() {
      console.log('testing url a')
      customFetch(urlA, { mode: 'no-cors', on404: function() { return Promise.reject() } }).then(_ => urlALoaded = true).then(clearInterval(fetchThumbnailA))
    }, 200)

    var fetchThumbnailB = setInterval(function() {
      console.log('testing url b')
      customFetch(urlB, { mode: 'no-cors', on404: function() { return Promise.reject() } }).then(_ => urlBLoaded = true).then(clearInterval(fetchThumbnailB))
    }, 200)

    var setUrlsInState = setInterval(function() {
      console.log('checking if urls are loaded')
      if (urlALoaded && urlBLoaded) {
        this.setState({ thumbnails: thumbnailsToFetch })
        clearInterval(setUrlsInState);
      }
    }, 200)

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

        {this.state.thumbnails.map((thumbnail) => {
          return (
            <div className="imageContainer" key={thumbnail}>
              <img src={thumbnail} />
            </div>
          )
        })}
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
