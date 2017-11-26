import React, { Component } from 'react';
import './imageUploadingIndicator.css';

class ImageUploadingIndicator extends Component {
  render() {
    return (
      <div className="spinner">
        <div className="text">{this.props.text}</div>
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  }
}

export default ImageUploadingIndicator;
