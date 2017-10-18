import React, { Component } from 'react';
import './imageUpload.css';
import postcardImg from './../icons/postcard.svg';

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
    let emptyState = (
      <div className="fileUpload-Container">
        <img width="100%" className="fileUpload-PostcardIcon" src={postcardImg} />
        <div className="fileUpload-Text">Add your photo!</div>
      </div>
    )

    let photo = (
      <div className="fileUpload-Container withImage">
        <img src={this.props.imgSrc} />
      </div>
    )

    return (
      <label>

        {this.props.imgSrc ? photo : emptyState}

        <input
          ref="photo"
          id="photo-uploader"
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={() => this.getPhotoData(this.props.uploadPhoto)}
        />
      </label>

    )
  }
}

export default ImageUpload;
