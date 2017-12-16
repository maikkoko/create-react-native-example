import { combineReducers } from 'redux'

import counter from './counter'
import routes from './routes'

const reducers = combineReducers({
  counter,
  routes
})

export default reducers
