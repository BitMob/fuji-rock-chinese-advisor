import { createStore, applyMiddleware, bindActionCreators } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
// import { apiEndpoint } from './server/config'
import { reducers } from '../components'

const initialState = {
  path: '/'
}

const ACTIONS = {
  ...reducers
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
      action && ACTIONS[action.type] ? ACTIONS[action.type](state, action) : state,
    initialState,
    composeWithDevTools(applyMiddleware(thunk))
  )
