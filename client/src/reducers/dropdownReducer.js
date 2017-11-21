import {
  SET_ACTIVE_DROPDOWN_ID,
} from './../actions/dropdownActions';

export default function dropdownReducer(state = {}, action) {
  let newState = JSON.parse(JSON.stringify(state))

  switch (action.type) {
  case SET_ACTIVE_DROPDOWN_ID:
    newState.activeDropdownId = action.payload;
    return newState;
  default:
    return state;
  }
}
