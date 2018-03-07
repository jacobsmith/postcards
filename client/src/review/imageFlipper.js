import React, { Component } from 'react';
import './imageFlipper.css';
import arrowFlipLeft from './../assets/arrowFlipLeft.svg'

class ImageFlipper extends Component {
  constructor() {
    super()
    this.state = {
      hover: false,
      hasFlipped: false
    }

    this.toggleHover = this.toggleHover.bind(this);
  }

  toggleHover() {
    this.setState({ hover: !this.state.hover, hasFlipped: true })
  }

  render() {
    let containerClassName = "flip-container"
    if (this.state.hover) {
      containerClassName += " hover"
    }

    return (
      <div className={containerClassName} onTouchStart={this.toggleHover} onClick={this.toggleHover}>
        <div className="flipper">
          <div className="front">
            <img src={arrowFlipLeft} className="flipperArrow flipperArrow-Left" style={{display: this.state.hasFlipped ? 'none' : ''}} alt="flip left"/>
            <img src={this.props.frontImage} className="image" alt="font of postcard" />
            <img src={arrowFlipLeft} className="flipperArrow flipperArrow-Right" style={{display: this.state.hasFlipped ? 'none' : ''}} alt="flip right"/>
          </div>

          <div className="back">
            <img src={this.props.backImage} className="image" alt="back of postcard"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageFlipper;
