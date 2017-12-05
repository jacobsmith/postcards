import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as flashActions from './../actions/flashActions.js';
import flashPostcard from './../assets/postcard-flash.svg';
import flashStamp from './../assets/stamp-icon.svg';

import './flash.css';

class Flash extends Component {
  constructor() {
    super()
    this.state = {
      stampVisible: false
    }

    this.removeFlash = this.removeFlash.bind(this);
    this.addStamp = this.addStamp.bind(this);
  }

  removeFlash() {
    setTimeout(function() {
      this.props.flashActions.clearFlash();
    }.bind(this), 5000)
  }

  addStamp() {
    setTimeout(function() {
      this.setState({ stampVisible: true });
    }.bind(this), 2300)
  }

  render() {
    this.removeFlash()
    this.addStamp();

    if (this.props.level) {
      return (
        <div className="flash">
          <div className="flash-stamp">
            <img src={flashStamp} className="flash-stamp-image" style={{display: this.state.stampVisible ? '' : 'none'}}/>
          </div>
          <img src={flashPostcard} className="flash-postcard-image"/>
          <div className={`flash-text ${this.props.level}`}>
            {this.props.message}
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    level:   state.flash.level,
    message: state.flash.message
  }
}

function mapDispatchToActions(dispatch) {
  return {
    flashActions: bindActionCreators(flashActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(Flash);
