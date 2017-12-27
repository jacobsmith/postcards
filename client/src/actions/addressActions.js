import customFetch from './../helpers/customFetch'
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

export function saveNewAddress(newAddress) {
  return function(dispatch) {
    customFetch('/api/addresses', {
      method: 'post',
      body: JSON.stringify(newAddress)
    })
    .then((response) => dispatch(handleNewAddressSaved(response)))
  }
}

function handleNewAddressSaved(newAddress) {
  return {
    type: actions.NEW_ADDRESS_SAVED,
    payload: {
      address: newAddress
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

export function showCreateNewAddress() {
  return {
    type: actions.SHOW_CREATE_NEW_ADDRESS
  }
}

export function fetchAddresses() {
  return function(dispatch) {
    customFetch('/api/addresses')
    .then(response => dispatch(setAddresses(response)))
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
