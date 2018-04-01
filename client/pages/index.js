import React from 'react'
import withRedux from 'next-redux-wrapper'
import store from '../libs/store'
import { App, Menu } from '../components'
import FontTest from '../components/FontTest'

const Home = () => (
  <App>
    <FontTest />
    <Menu />
  </App>
)

export default withRedux(store, null, null)(Home)
