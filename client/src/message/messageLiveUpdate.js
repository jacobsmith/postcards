import React, { Component } from 'react';
import logo from './../assets/postcard-logo-and-text.png'
import './messageLiveUpdate.css';

class MessageLiveUpdate extends Component {
  render() {
    return (
      <div className="postcard-live-preview">
        <div className="card">
          <div id="safe-area">

            <div className="text" style={{fontFamily: this.props.font, fontSize: this.props.fontSize, textAlign: this.props.alignment}}>
              <div id="spacer"></div>
              <div id="ink-free" style={{textAlign: 'center', backgroundColor: 'rgba(1, 1, 1, 0.05)'}}>
                Address Information
                <br/>
                No text allowed here
              </div>
              { this.props.message }

              <img src={ logo } id="logo" alt="Say It With A Postcard!"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MessageLiveUpdate;
