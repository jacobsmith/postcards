import * as actions from './actionTypes.js';

export function messageUpdated(event) {
  return {
    type: actions.MESSAGE_UPDATED,
    payload: {
      text: event.target.value
    }
  }
}

export function updateAddressInfo(addressType) {
  return function(dispatch) {
    return function(attribute) {
      return function(event) {
        dispatch({
          type: actions.ADDRESS_INFO_UPDATED,
          payload: {
            addressAttribute: attribute,
            addressType: addressType,
            value: event.target.value
          }
        })
      }
    }
  }
}
