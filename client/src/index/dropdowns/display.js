import React, { Component } from 'react';
import PricingDropdown      from './pricing.js';
import ProcessDropdown      from './process.js';
import PrintsDropdown       from './prints.js';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class DropdownsDisplay extends Component {
  render() {
    let mapping = {
      'pricing': PricingDropdown,
      'process': ProcessDropdown,
      'prints': PrintsDropdown
    }

    let activeDropdown = mapping[this.props.activeDropdownId]

    return activeDropdown ? React.createElement(activeDropdown) : null;
  }
}

function mapStateToProps(state) {
  return {
    activeDropdownId: state.dropdowns.activeDropdownId
  }
}

function mapDispatchToActions(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(DropdownsDisplay);
