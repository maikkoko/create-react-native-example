import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'

import Home from './Home'
import Counter from './Counter'

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Home" initial />
          <Scene key="counter" component={Counter} title="Counter" />
        </Scene>
      </Router>
    )
  }
}

export default Routes
