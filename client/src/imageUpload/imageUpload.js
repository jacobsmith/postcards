import React, { Component } from 'react';
import './imageUpload.css';
import * as photoActions from './../actions/photoActions.js';
import photoImg from './../assets/polaroid-icon.svg';
import LoadingIndicator from './../loading/loadingIndicator';

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
      <img src={photoImg} alt="upload" className="selectImage"/>
    )

    let photo = (
      <img src={this.props.imgSrc} alt="upload" className="selectImage"/>
    )

    if (this.props.uploading) {
      return (<LoadingIndicator text="Uploading" />)
    }

    return (
      <label style={{cursor: 'pointer'}}>
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
    uploading: state.postcard.photo.uploadInProgress,
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
