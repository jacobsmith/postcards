import React, { Component } from 'react';

class DropdownToggle extends Component {
  constructor() {
    super()
    this.state = {
      display: false
    }

    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    this.setState({ display: !this.state.display })
  }

  render() {
    let upArrow = '\u2303';
    let downArrow = '\u2304';

    return (
      <div onClick={this.toggleDisplay}>
        {this.props.text} {this.state.display ? upArrow : downArrow }
        { this.state.display ? this.props.children : ''}</div>
    )
  }
}

export default DropdownToggle;
