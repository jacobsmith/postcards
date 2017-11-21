export const SET_ACTIVE_DROPDOWN_ID = 'SET_ACTIVE_DROPDOWN_ID';

export function setActive(id) {
  return {
    type: SET_ACTIVE_DROPDOWN_ID,
    payload: id
  }
}
