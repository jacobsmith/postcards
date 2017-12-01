import React, { Component } from 'react';
import logo from './../assets/postcard-logo-and-text.png'
import './messageLiveUpdate.css';

class MessageLiveUpdate extends Component {
  render() {
    return (
      <div className="postcard-live-preview">
        <div className="card">
          <div id="safe-area">

            <div className="text">
              <div id="spacer"></div>
              <div id="ink-free">
                Address Information
                <br/>
                No text allowed here
              </div>
              { this.props.message }

              <img src={ logo } id="logo" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageLiveUpdate;
