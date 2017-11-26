import React, { Component } from 'react';
import './loadingIndicator.css';

class LoadingIndicator extends Component {
  render() {
    return (
      <div className={'spinner ' + (this.props.wide ? 'spinner-wide' : '') }>
        <div className="text">{this.props.text}</div>
        <div className="cube1"></div>
        <div className="cube2"></div>
      </div>
    )
  }
}

export default LoadingIndicator;
