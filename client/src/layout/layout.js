import React, { Component } from 'react';
import './layout.css';

class Layout extends Component {
  render() {
    return (
      <div className="mainBody">
        {this.props.children}
      </div>
    )
  }
}

export default Layout;
