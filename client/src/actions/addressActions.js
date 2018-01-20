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
    .then((response) => {
      if (response.error) {
        dispatch(handleNewAddressError(response))
      } else {
        dispatch(handleNewAddressSaved(response))
      }
    })
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

function handleNewAddressError(response) {
  return {
    type: actions.NEW_ADDRESS_SAVE_ERROR,
    payload: {
      error: response.error
    }
  }
}

export function addSelectedAddressesToPostcard() {
  return {
    type: actions.ADD_SELECTED_ADDRESSES_TO_POSTCARD
  }
}

export function toggleAddressBookAddressSelected(address) {
  return {
    type: actions.TOGGLE_ADDRESS_BOOK_ADDRESS_SELECTED,
    payload: {
      address: address
    }
  }
}

export function filterAddresses(addresses, searchTerm) {
  return function(dispatch) {
    if (searchTerm == undefined || searchTerm == '') {
      return addresses;
    } else {
      return addresses.filter((address) => {
        return safeInclude(address.addressName, searchTerm) ||
        safeInclude(address.nickname, searchTerm) ||
        safeInclude(address.city, searchTerm) ||
        safeInclude(address.state, searchTerm) ||
        safeInclude(address.zip, searchTerm)
      })
    }
  }
}

function safeInclude(string, substring) {
  return (string || '').toLowerCase().includes(substring);
}

export function saveAddresses(addresses) {
  return function(dispatch) {
    for (const address of addresses) {
      dispatch(saveNewAddress(address));
    }
  }
}

export function addToAddress(address) {
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

export function hideAddressBook() {
  return {
    type: actions.HIDE_ADDRESS_BOOK
  }
}

export function showCreateNewAddress() {
  return {
    type: actions.SHOW_CREATE_NEW_ADDRESS
  }
}

export function setFromAddress(address) {
  return {
    type: actions.SET_FROM_ADDRESS,
    payload: {
      address: address
    }
  }
}

export function fetchAddresses() {
  return function(dispatch) {
    customFetch('/api/addresses')
    .then(response => dispatch(fetchAddressBookAddressesSuccess(response)))
  }
}

export function fetchAddressBookAddressesSuccess(response) {
  return {
    type: actions.FETCH_ADDRESS_BOOK_ADDRESSES_SUCCESS,
    payload: {
      addresses: response.items,
      count: response.count
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
