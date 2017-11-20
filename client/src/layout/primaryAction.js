import React, { Component } from 'react';

class PrimaryAction extends Component {
  render() {
    return (
      <div className="primary-info" style={{textTransform: 'uppercase'}}>
        {this.props.text}:
      </div>
    )
  }
}

export default PrimaryAction;
