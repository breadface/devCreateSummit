import React, { Component } from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import { withState } from './hoc'

const enhance = withState('counter', 'setCounter', 0)

const Counter = (({counter, setCounter}) =>
  <View style={styles.container}>
    <View><Text>{counter}</Text></View>
    <TouchableHighlight
      style={styles.button}
      onPress={() => setCounter(n => n+1)}
      >
      <Text>+</Text>
    </TouchableHighlight>
  </View>
)

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


export default enhance(Counter)
