import React, { Component } from 'react';
import cameraImg from './../camera.png';

class ProcessDropdown extends Component {
  render() {
    return (
      <div className="dropdownContent">
        <div className="contentHeader secondary-info">How our process works</div>

        <div className="processCards">
          <div className="processCard">
            <div className="processImageContainer">
              <div className="processImage">
                <img src={cameraImg} />
              </div>
            </div>

            <div className="processStep secondary-action">
              01. Upload
            </div>

            <div className="processDetails small-detail">
              Choose the perfect image for your postcard from your image library.
            </div>

          </div>
          <div className="processCard">
            <div className="processImage">

            </div>

            <div className="processStep secondary-action">
              02. Addresses
            </div>

            <div className="processDetails small-detail">
              Fill out who you're sending to or use our address book to keep track of addresses.
            </div>

          </div>
          <div className="processCard">
            <div className="processImage">

            </div>

            <div className="processStep secondary-action">
              03. Note
            </div>

            <div className="processDetails small-detail">
              Thank someone, tell Grandma "hi", or even share an inside joke!
            </div>

          </div>
          <div className="processCard">
            <div className="processImage">

            </div>

            <div className="processStep secondary-action">
              04. Send
            </div>

            <div className="processDetails small-detail">
              Your postcard will be printed and mailed to your lucky recipient in 4 to 6 business days!
            </div>

          </div>
        </div>

      </div>
    )
  }
}

export default ProcessDropdown;
