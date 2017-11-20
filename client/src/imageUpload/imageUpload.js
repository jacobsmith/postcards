import React, { Component } from 'react';
import './imageUpload.css';
import postcardImg from './../icons/postcard.svg';
import * as photoActions from './../actions/photoActions.js';
import cameraImg from './../index/camera.png';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


class ImageUpload extends Component {
  constructor() {
    super()
    this.uploadPhoto = this.uploadPhoto.bind(this);
  }

  uploadPhoto() {
    this.props.photoActions.notifyUserOfUpdate()
    this.props.photoActions.uploadPhoto(this.refs.photo.files[0]);
  }

  render() {
    let emptyState = (
        <div className="mainCameraOutsideBorder">
          <div className="mainCamera">
            <img src={cameraImg} alt="upload" className=""/>
          </div>
        </div>
    )

    let photo = (
      // this needs an "uploaded icon" or something
      <div className="mainCameraOutsideBorder">
        <div className="mainCamera">
          <img src={cameraImg} alt="upload" className=""/>
        </div>
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
          onChange={() => this.uploadPhoto()}
        />
      </label>

    )
  }
}

function mapStateToProps(state) {
  return {
    imgSrc: state.postcard.photo.imgSrc,
    uploading: state.postcard.photo.imageUploadInProgress,
    success: state.postcard.photo.imageUploadSuccess,
    failure: state.postcard.photo.imageUploadFailure
  }
}

function mapDispatchToProps(dispatch) {
  return {
    photoActions: bindActionCreators(photoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageUpload);
