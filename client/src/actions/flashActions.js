export const FLASH_MESSAGE_ADDED = 'FLASH_MESSAGE_ADDED';
export const CLEAR_FLASH = 'CLEAR_FLASH';

export function flash(level, message) {
  return {
    type: FLASH_MESSAGE_ADDED,
    payload: {
      level: level,
      message: message
    }
  }
}

export function clearFlash() {
  return {
    type: CLEAR_FLASH
  }
}
