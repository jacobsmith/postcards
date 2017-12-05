import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <Link to="/admin" style={{color: '#365B64'}}>
          &copy; Say it with a Postcard. All Rights Reserved.
      </Link>
      </div>
    )
  }
}

export default Footer;
