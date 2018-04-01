/* eslint no-alert: 0 */
/* eslint import/prefer-default-export: 0 */

export function addClickCount() {
  return dispatch =>
    dispatch({
      type: 'ADD_CLICK_COUNT'
    })
}

export function toggleMove(shouldMove) {
  return dispatch =>
    dispatch({
      type: 'TOGGLE_MOVE',
      shouldMove
    })
}

export function setStep(step) {
  return dispatch =>
    dispatch({
      type: 'SET_STEP',
      step
    })
}

export function enterMain() {
  return dispatch =>
    dispatch({
      type: 'ENTER_MAIN'
    })
}
