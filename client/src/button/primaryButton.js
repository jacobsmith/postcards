import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lockIcon from './../assets/lock.svg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './primaryButton.css';

class PrimaryButton  extends Component {
  render() {
    let { text, to, link = true, disabled = false, enabled = true, enabledProp, onClick, type } = this.props

    let actuallyEnabled;
    if (enabled) {
      actuallyEnabled = true;
    } else if (!disabled) {
      actuallyEnabled = true;
    } else {
      actuallyEnabled = false;
    }

    var deep_value = function(obj, path){
      for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
      };
      return obj;
    };

    if (enabledProp) {
      actuallyEnabled = deep_value(this.props.state, enabledProp)
    }

    if (link && actuallyEnabled) {
      return (
        <Link to={to} className="primaryButton" onClick={onClick} type={type}>
          <div>
            {text} &rsaquo;
          </div>
        </Link>
      )
    } else if (actuallyEnabled) { // no Link
      return (
        <a href="#" className="primaryButton">
          <div>
            <div className="">{text} &rsaquo;</div>
          </div>
        </a>
      )
    } else {
      // actually *disabled*
      return (
        <a href="#" className="primaryButton primaryButton--disabled">
          <div className="disabledContainer">
            <img className="disabled-lock-icon" src={lockIcon} />
            <div className="disabledText">{text} &rsaquo;</div>
          </div>
        </a>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state
  }
}

function mapDispatchToActions(dispatch) {
  return {
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(PrimaryButton)
