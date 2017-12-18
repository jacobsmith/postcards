import * as actions from './actionTypes.js';

export function updateAddressInfo(addressType, index) {
  return function(dispatch) {
    return function(attribute) {
      return function(event) {
        dispatch({
          type: actions.ADDRESS_INFO_UPDATED,
          payload: {
            addressAttribute: attribute,
            addressType: addressType,
            value: event.target.value,
            index: index
          }
        })
      }
    }
  }
}

export function addressBookAddressSelected(address) {
  return {
    type: actions.ADDRESS_BOOK_ADDRESS_SELECTED,
    payload: {
      address: address
    }
  }
}

export function addToAddress() {
  return {
    type: actions.ADD_TO_ADDRESS
  }
}

export function removeToAddress(index) {
  return {
    type: actions.REMOVE_TO_ADDRESS,
    payload: {
      index: index
    }
  }
}

export function showAddressBook() {
  return {
    type: actions.SHOW_ADDRESS_BOOK
  }
}

export function setAddresses(addresses) {
  return {
    type: actions.SET_ADDRESSES,
    payload: {
      addresses: addresses
    }
  }
}

export function updateSearch(event) {
  return {
    type: actions.UPDATE_ADDRESS_SEARCH,
    payload: {
      search: event.target.value
    }
  }
}
