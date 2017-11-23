import React, { Component } from 'react';
import cameraImg from './../camera.png';

import uploadImg from './../../assets/upload-icon.svg';
import addressImg from './../../assets/address-icon.svg';
import noteImg from './../../assets/note-icon.svg';
import sendImg from './../../assets/send-icon.svg';

class ProcessDropdown extends Component {
  render() {
    return (
      <div className="dropdownContent">
        <div className="contentHeader secondary-info">How our process works</div>

        <div className="processCards">
          <div className="processCard">
            <div className="processImageContainer">
              <div className="processImage">
                <img src={uploadImg} />
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
                <img src={addressImg} />
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
                <img src={noteImg} />
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
                <img src={sendImg} />
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
