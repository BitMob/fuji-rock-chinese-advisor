import { connect } from 'react-redux'
import { bindActions } from '../../libs/store'

export const changePath = path => ({
  type: 'CHANGE_PATH',
  path
})

export const love = () => ({
  type: 'LOVE'
})

const actions = {
  changePath: path => dispatch => dispatch({ type: 'CHANGE_PATH', path }),
  love: () => dispatch => dispatch({ type: 'LOVE' })
}

export const reducer = {
  CHANGE_PATH: (state, { path }) => ({
    ...state,
    path
  })
}

const mapStateToProps = ({ path }) => ({ path })
export default comp => connect(mapStateToProps, bindActions(actions))(comp)
