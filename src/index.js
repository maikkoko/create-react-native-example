import React from 'react'
import { Provider } from 'react-redux'

import createStore from './store'
import './config/ReactotronConfig'

import Counters from './containers/Counter'

const store = createStore()

const Main = () => (
  <Provider store={store}>
    <Counters />
  </Provider>
)

export default Main
