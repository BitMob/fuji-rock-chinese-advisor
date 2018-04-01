import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import { apiEndpoint } from './server/config'

const initialState = {
  clickCount: 0,
  shouldMove: true,
  step: 0,
  entered: false
}

const ACTIONS = {
  ADD_CLICK_COUNT: state => ({
    ...state,
    clickCount: (state.clickCount || 0) + 1
  }),

  TOGGLE_MOVE: (state, { shouldMove }) => ({ ...state, shouldMove }),

  SET_STEP: (state, { step }) => ({ ...state, step }),
  ENTER_MAIN: state => ({ ...state, entered: true })
}

export function bindActions(_act) {
  return dispatch => ({
    ...bindActionCreators(_act, dispatch)
  })
}

// createStore(reducer, [preloadedState], [enhancer])
export default () =>
  createStore(
    (state, action) =>
      action && ACTIONS[action.type]
        ? ACTIONS[action.type](state, action)
        : state,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
