import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dropdownActions from './../actions/dropdownActions.js';

import upArrowImg from './../assets/arrow-open.svg';
import downArrowImg from './../assets/arrow-closed.svg';

class DropdownToggle extends Component {
  constructor() {
    super()
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }

  toggleDisplay() {
    if (this.props.dropdownId === this.props.activeDropdownId) {
      this.props.dropdownActions.setActive(null)
    } else {
      this.props.dropdownActions.setActive(this.props.dropdownId)
    }
  }

  render() {
    let upArrow =   <img className="dropdownArrow" src={upArrowImg}   alt=""/>
    let downArrow = <img className="dropdownArrow" src={downArrowImg} alt=""/>

    return (
      <div onClick={this.toggleDisplay}>
        {this.props.text} {this.props.activeDropdownId === this.props.dropdownId ? upArrow : downArrow }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    activeDropdownId: state.dropdowns.activeDropdownId
  }
}

function mapDispatchToActions(dispatch) {
  return {
    dropdownActions: bindActionCreators(dropdownActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(DropdownToggle);
