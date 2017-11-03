import React, { Component } from 'react';
import './imageFlipper.css';

class ImageFlipper extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover })
  }

  render() {
    let containerClassName = "flip-container"
    if (this.state.hover) {
      containerClassName += " hover"
    }

    return (
      <div className={containerClassName} onTouchStart={this.toggleHover}>
        <div className="flipper">
          <div className="front">
            <img src={this.props.frontImage} className="image" />
          </div>
          <div className="back">
            <img src={this.props.backImage} className="image" />
          </div>
        </div>
      </div>
    )
  }
}

export default ImageFlipper;
