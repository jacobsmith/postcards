import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import pencilIcon from './../assets/pencil-edit-button.svg'

class EditInfo extends Component {
  render() {
    return (
      <Link to={this.props.editLocation} className="edit"><img src={pencilIcon} /></Link>
    )
  }
}

EditInfo.propTypes = {
  editLocation: PropTypes.string.isRequired
}

export default EditInfo;
