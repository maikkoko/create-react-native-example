import React from 'react'
import { Provider } from 'react-redux'

import createStore from './store'
import './config/ReactotronConfig'

import Scenes from './scenes'

const store = createStore()

const Main = () => (
  <Provider store={store}>
    <Scenes />
  </Provider>
)

export default Main
