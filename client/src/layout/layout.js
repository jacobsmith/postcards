import React, { Component } from 'react';
import Footer from './../layout/footer.js';

class Layout extends Component {
  render() {
    return (
      <div className="page">
        <div className="mainBody">
          {this.props.children}
        </div>

        <Footer />
      </div>
    )
  }
}

export default Layout;
