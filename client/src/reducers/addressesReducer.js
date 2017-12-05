import {
  ADDRESS_INFO_UPDATED,
  ADD_TO_ADDRESS,
  REMOVE_TO_ADDRESS,
} from  '../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';

function emptyAddress() {
  return {
    addressName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    id: Math.random().toString(36).substr(2, 10)
  }
}

let initialState = {
  from: [emptyAddress()],
  to: [emptyAddress()]
}


export default function addressesReducer(state = initialState, action) {
  // easiest way to deeply copy the object
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
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
      newState['to'].push(emptyAddress());
      allPresent(newState, 'to')
      return newState;

    case REMOVE_TO_ADDRESS:
      newState['to'].splice(action.payload.index, 1)
      allPresent(newState, 'to')

      return newState;

    default:
      return newState;
  }
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
