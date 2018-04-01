import App from './App'
import Button from './Button'
import { Menu, reducer as menuReducer } from './Menu'
// import {  } from './Menu/store'

const reducers = {
  ...menuReducer
}

export { App, Button, Menu, reducers }
