import {
  createStore as _createStore,
  applyMiddleware,
  combineReducers,
  compose
} from 'redux'
import thunk from 'redux-thunk'
import counterReducer from './modules/counter'
import Reactotron from 'reactotron-react-native'

const reducer = combineReducers({
  counter: counterReducer
})

const middleware = applyMiddleware(thunk)

export default function createStore(initialValue = {}) {
  let store

  if (process.env.NODE_ENV === 'development') {
    // Development mode with Redux DevTools support enabled.
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: true })
      : compose
    // Create the redux store.
    store = Reactotron.createStore(
      reducer,
      initialValue,
      composeEnhancers(middleware)
    )
  } else {
    // Production mode.
    store = _createStore(reducer, initialValue, middleware)
  }

  return store
}
