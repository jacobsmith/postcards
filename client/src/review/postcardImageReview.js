import React, { Component } from 'react';
import ImageFlipper from './imageFlipper.js';


class PostcardImageReview extends Component {
  render() {
    let postcardLoading = this.props.preview.fetchingPostcard;
    let postcardSuccess = this.props.preview.frontImage && this.props.preview.backImage;
    let postcardError = this.props.preview.errorDuringFetch;

    if (postcardLoading) {
      return (
        <div>Postcard is loading!</div>
      )
    } else if (postcardSuccess) {
      return (
        <div style={{width: '100%'}}>
          {/* <img src={this.props.preview.frontImage} style={{maxWidth: '100%'}}/> */}
          <ImageFlipper frontImage={this.props.preview.frontImage} backImage={this.props.preview.backImage} />
        </div>
      )
    } else if (postcardError) {
      return (
        <div>Oops, something went wrong!</div>
      )
    } else {
      return null;
    }
  }
}

export default PostcardImageReview;
