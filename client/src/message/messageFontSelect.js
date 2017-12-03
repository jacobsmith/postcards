import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as messageActions from './../actions/actions.js';

import './messageFontSelect.css';

class MessageFontSelect extends Component {
  render() {
    let fonts = [
      "Amatic SC",
      "Gloria Hallelujah",
      "Permanent Marker",
      "Rock Salt",
      "Satisfy"
    ]

    let fontSizes = [
      12,
      14,
      16,
      18,
      20
    ]


    return (
      <div className="fontSelect-container" >
        <select onChange={this.props.messageActions.fontUpdated} value={this.props.font} className="fontSelect">
          {fonts.map(font => <option value={font}>{font}</option>)}
        </select>

        <select onChange={this.props.messageActions.fontSizeUpdated} value={this.props.fontSize} className="fontSizeSelect">
          {fontSizes.map(font => <option value={font}>{font}</option>)}
        </select>

        <select onChange={this.props.messageActions.alignmentUpdated} value={this.props.alignment} className="fontSizeSelect">
          {["left", "center"].map(alignment => <option value={alignment}>{alignment}</option>)}
        </select>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    font:      state.postcard.message.font,
    fontSize:  state.postcard.message.fontSize,
    alignment: state.postcard.message.alignment,
  }
}

function mapDispatchToActions(dispatch) {
  return {
    messageActions: bindActionCreators(messageActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToActions
)(MessageFontSelect);
