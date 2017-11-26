import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import lockIcon from './../assets/lock.svg'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import './primaryButton.css';

class PrimaryButton  extends Component {
  render() {
    let { text, to, link = true, disabled = false, enabled = true, enabledProp, onClick } = this.props

    var deep_value = function(obj, path){
      for (var i=0, path=path.split('.'), len=path.length; i<len; i++){
        obj = obj[path[i]];
      };
      return obj;
    };

    if (enabledProp) {
      enabled = deep_value(this.props.state, enabledProp)
    }

    if (link && enabled && !disabled) {
      return (
        <Link to={to} className="primaryButton" onClick={onClick}>
          <div>
            {text} &rsaquo;
          </div>
        </Link>
      )
    } else {
      return (
        <a href="#" className={`primaryButon ${(!enabled || disabled) ? 'primaryButton--disabled' : ''}`}>
          <div className="disabledContainer">
            { (disabled || !enabled) ? <img className="disabled-lock-icon" src={lockIcon} /> : '' }
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
