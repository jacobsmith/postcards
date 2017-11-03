import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class EditInfo extends Component {
  render() {
    return (
      <Link to={this.props.editLocation}>Edit</Link>
    )
  }
}

EditInfo.propTypes = {
  editLocation: PropTypes.string.isRequired
}

export default EditInfo;
