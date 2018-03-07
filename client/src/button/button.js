import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lockIcon from './../assets/lock.svg'
import { connect } from 'react-redux';
import classNames from 'classnames';

import './primaryButton.css';

class Button extends Component {
  render() {
    let { text, to, link = true, enabled = true, enabledProp, onClick, type, wide = false, buttonStyle = "primary", ...rest } = this.props

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

    let buttonClass = `button`;
    let classes = classNames([
      buttonClass,
      wide ? `${buttonClass}-wide` : "",
      !actuallyEnabled ? `${buttonClass}--disabled` : "",
      `${buttonClass}--${buttonStyle}`,
      rest.className
    ])

    let forwardCaret, backwardCaret;
    if (buttonStyle === "primary") {
      forwardCaret = `\u{203A}`
      backwardCaret = '';
    } else if (buttonStyle === "secondary") {
      forwardCaret = '';
      backwardCaret = "\u{2039}";
    }

    let buttonText = `${backwardCaret} ${text} ${forwardCaret}`

    if (link && actuallyEnabled) {
      return (
        <Link {...rest} to={to} className={classes} type={type} onClick={onClick}>
          <div>
            {buttonText}
          </div>
        </Link>
      )
    } else if (actuallyEnabled) { // no Link
      return (
        <a {...rest} href="#" className={classes} onClick={onClick}>
          <div>
            <div className="">{buttonText}</div>
          </div>
        </a>
      )
    } else {
      // actually *disabled*
      return (
        <a href="#" {...rest} className={classes}>
          <div className="disabledContainer">
            <img className="disabled-lock-icon" src={lockIcon} alt="locked"/>
            <div className="disabledText">{buttonText}</div>
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
)(Button)
