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

      if (newState[addressType].every(addressPartsPresent)) {
        newState[addressType]['allPresent'] = true
      } else [
        newState[addressType]['allPresent'] = false
      ]

      return newState;
    case CREATE_NEW_POSTCARD:
      newState.to = [emptyAddress()];
    case ADD_TO_ADDRESS:
      newState['to'].push(emptyAddress());
      return newState;
    case REMOVE_TO_ADDRESS:
      newState['to'].splice(action.payload.index, 1)

      // handle if we removed an incomplete address but now we are complete
      if (newState['to'].every(addressPartsPresent)) {
        newState['to']['allPresent'] = true
      } else [
        newState['to']['allPresent'] = false
      ]

      return newState;
    default:
      return newState;
  }
}

function addressPartsPresent(address) {
  return address['addressName'] &&
  address['street'] &&
  address['city'] &&
  address['state'] &&
  address['zip']
}
