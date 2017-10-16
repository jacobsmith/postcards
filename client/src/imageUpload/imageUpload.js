import React, { Component } from 'react';
import './imageUpload.css';

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
      <label>
        <div className="fileUpload-Button">Upload Photo!</div>
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
