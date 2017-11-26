import { ADDRESS_INFO_UPDATED } from  '../actions/actionTypes.js';
import { CREATE_NEW_POSTCARD } from '../actions/postcardActions';

let emptyAddress = {
  addressName: '',
  street: '',
  city: '',
  state: '',
  zip: ''
}

let initialState = {
  from: emptyAddress,
  to: emptyAddress
}


export default function addressesReducer(state = initialState, action) {
  // easiest way to deeply copy the object
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADDRESS_INFO_UPDATED:
      let addressType = action.payload.addressType;
      let addressAttribute = action.payload.addressAttribute;
      let value = action.payload.value

      newState[addressType][addressAttribute] = value

      if (
        newState[addressType]['addressName'] &&
        newState[addressType]['street'] &&
        newState[addressType]['city'] &&
        newState[addressType]['state'] &&
        newState[addressType]['zip']
      ) {
        newState[addressType]['allPresent'] = true
      } else {
        newState[addressType]['allPresent'] = false
      }

      return newState;
    case CREATE_NEW_POSTCARD:
      newState.to = emptyAddress;
    default:
      return newState;
  }
}
