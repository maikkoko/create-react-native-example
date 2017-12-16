import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { Actions } from 'react-native-router-flux'

class Home extends Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>The current scene is titled {this.props.title}.</Text>

        <TouchableOpacity style={styles.button} onPress={this.handleClick}>
          <Text style={styles.buttonText}> Counter </Text>
        </TouchableOpacity>
      </View>
    )
  }

  handleClick = () => {
    Actions.counter()
  }
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 40,
    backgroundColor: 'lightgray'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Home
