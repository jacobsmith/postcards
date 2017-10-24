import initialState from './initialState.js';
import { ADDRESS_INFO_UPDATED } from  '../actions/actionTypes.js';


export default function addressesReducer(state = initialState.addresses, action) {
  // easiest way to deeply copy the object
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADDRESS_INFO_UPDATED:
      let addressType = action.payload.addressType;
      let addressAttribute = action.payload.addressAttribute;
      let value = action.payload.value

      newState[addressType][addressAttribute] = value

      console.log('new state: ', newState)
      return newState;
    default:
      return newState;
  }
}
