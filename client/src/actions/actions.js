import * as actions from './actionTypes.js';

export function messageUpdated(event) {
  return {
    type: actions.MESSAGE_UPDATED,
    payload: {
      text: event.target.value
    }
  }
}

export function fontUpdated(event) {
  return {
    type: actions.FONT_UPDATED,
    payload: {
      font: event.target.value
    }
  }
}

export function fontSizeUpdated(event) {
  return {
    type: actions.FONT_SIZE_UPDATED,
    payload: {
      fontSize: event.target.value
    }
  }
}

export function alignmentUpdated(event) {
  return {
    type: actions.ALIGNMENT_UPDATED,
    payload: {
      alignment: event.target.value
    }
  }
}
