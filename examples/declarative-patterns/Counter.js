import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'

class Counter extends Component {
  state = {
    counter: 0
  }

  render() {
    let { counter } =  this.state
    return (
      <View style={styles.container}>
        <View><Text>{this.state.counter}</Text></View>
        <TouchableHighlight
          style={styles.button}
          onPress={() => {
            this.setState({counter: counter+1})
          }}
          >
          <Text>+</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

let styles =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    width: 100,
    height: 50,
    marginLeft: 50,
  }
})


export default Counter
