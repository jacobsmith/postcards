import {
  ADDRESS_INFO_UPDATED,
  ADD_TO_ADDRESS,
  REMOVE_TO_ADDRESS,
  SHOW_ADDRESS_BOOK,
  TOGGLE_ADDRESS_BOOK_ADDRESS_SELECTED,
  ADD_SELECTED_ADDRESSES_TO_POSTCARD,
  SET_ADDRESSES,
  UPDATE_ADDRESS_SEARCH,
  NEW_ADDRESS_SAVED,
  SHOW_CREATE_NEW_ADDRESS,
} from  '../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';

function emptyAddressNoId() {
  return {
    addressName: '',
    street: '',
    city: '',
    state: '',
    zip: ''
  }
}

function emptyAddress() {
  let id = { id: Math.random().toString(36).substr(2, 10) }
  return Object.assign(emptyAddressNoId(), id)
}

let initialState = {
  from: [emptyAddress()],
  to: [emptyAddress()],
  new: [emptyAddress()],
  addressBook: { display: false, showCreateNewAddress: false },
  list: [],
  originalList: []
}


export default function addressesReducer(state = initialState, action) {
  // easiest way to deeply copy the object
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case NEW_ADDRESS_SAVED:
      console.log('hey!', state, action)
      newState.originalList.push(action.payload.address);
      newState.addressBook.display = false;
      newState.addressBook.showCreateNewAddress = false;

      return newState;
    case ADDRESS_INFO_UPDATED:
      let addressType = action.payload.addressType;
      let addressAttribute = action.payload.addressAttribute;
      let value = action.payload.value

      newState[addressType][action.payload.index][addressAttribute] = value

      allPresent(newState, addressType)
      return newState;

    case CREATE_NEW_POSTCARD:
      newState.to = [emptyAddress()];

      allPresent(newState, 'to')
      allPresent(newState, 'from')

    case ADD_TO_ADDRESS:
      addToAddress(newState)
      return newState;

    case REMOVE_TO_ADDRESS:
      newState['to'].splice(action.payload.index, 1)
      allPresent(newState, 'to')

      return newState;
    case SHOW_ADDRESS_BOOK:
      newState.addressBook.display = true
      return newState;
    case SHOW_CREATE_NEW_ADDRESS:
      newState.addressBook.showCreateNewAddress = true;
      return newState;
    case TOGGLE_ADDRESS_BOOK_ADDRESS_SELECTED:
      let selectedAddress = newState.originalList.find((originalListAddress) => originalListAddress.id == action.payload.address.id)
      selectedAddress.selected = !selectedAddress.selected;

      // let address;
      // if (addressesEqual(newState.to[0], emptyAddressNoId())) {
      //   address = newState.to[0]
      // } else {
      //   address = emptyAddress();
      // }
      //
      // let selectedAddress = action.payload.address;
      //
      // Object.assign(address, selectedAddress)
      // newState['to'].push(address);
      //
      // allPresent(newState, 'to')

      return newState;
    case SET_ADDRESSES:
      newState.originalList = action.payload.addresses;
      newState.list = action.payload.addresses;
      return newState;
    case UPDATE_ADDRESS_SEARCH:
      let searchTerm = action.payload.search;
      newState.listSearch = searchTerm;

     //  newState.list = newState.originalList.filter((address) => {
     //    return safeInclude(address.addressName, searchTerm) ||
     //           safeInclude(address.nickname, searchTerm) ||
     //           safeInclude(address.city, searchTerm) ||
     //           safeInclude(address.state, searchTerm) ||
     //           safeInclude(address.zip, searchTerm)
     // })

      return newState;
    case ADD_SELECTED_ADDRESSES_TO_POSTCARD:
      for ( selectedAddress of newState.originalList.filter(address => address.selected)) {
        addToAddress(newState, selectedAddress);
      }

      newState.addressBook.display = false;

      return newState;
    default:
      return newState;
  }
}

function safeInclude(string, substring) {
  return (string || '').toLowerCase().includes(substring);
}

function addressesEqual(addressA, addressB) {
   return addressA.addressName === addressB.addressName &&
   addressA.street === addressB.street &&
   addressA.city === addressB.city &&
   addressA.state === addressB.state &&
   addressA.zip === addressB.zip
}

function addToAddress(newState, address = emptyAddress()) {
  // don't allow duplicate addresses
  if (newState['to'].some((existingAddress) => addressesEqual(existingAddress, address))) {
    return;
  }

  // if the first address is empty, replace it
  if (addressesEqual(newState['to'][0], emptyAddress())) {
    newState['to'][0] = address
  } else {
    newState['to'].push(address);
  }
  allPresent(newState, 'to')
}

function allPresent(state, addressType) {
  if (state[addressType].every(addressPartsPresent)) {
    state[addressType + 'AllPresent'] = true
  } else {
    state[addressType + 'AllPresent'] = false
  }
}

function addressPartsPresent(address) {
  return address['addressName'] &&
  address['street'] &&
  address['city'] &&
  address['state'] &&
  address['zip']
}
