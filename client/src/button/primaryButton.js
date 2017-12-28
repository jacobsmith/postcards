import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lockIcon from './../assets/lock.svg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

import './primaryButton.css';

class PrimaryButton  extends Component {
  render() {
    let { text, to, link = true, enabled = true, enabledProp, onClick, type, wide = false } = this.props

    var deep_value = function(obj, path){
      for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
      };
      return obj;
    };

    let actuallyEnabled = false;
    if (enabledProp) {
      actuallyEnabled = deep_value(this.props.state, enabledProp)
    } else if (enabled) {
      actuallyEnabled = true;
    }

    let classes = classNames([
      "primaryButton",
      wide ? "primaryButton-wide" : "",
      !actuallyEnabled ? "primaryButton--disabled" : ""
    ])

    if (link && actuallyEnabled) {
      return (
        <Link to={to} className={classes} onClick={onClick} type={type}>
          <div>
            {text} &rsaquo;
          </div>
        </Link>
      )
    } else if (actuallyEnabled) { // no Link
      return (
        <a href="#" className={classes} onClick={onClick}>
          <div>
            <div className="">{text} &rsaquo;</div>
          </div>
        </a>
      )
    } else {
      // actually *disabled*
      return (
        <a href="#" className={classes}>
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
