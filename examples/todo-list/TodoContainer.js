import React, { Component } from 'react'
import {
  View,
  Text,
  TabBarIOS,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

import TodoList from './TodoList'

class TodoContainer extends Component {
  state = {
    text: "",
    selectedTab: 'incomplete',
    items: ['yam', 'egg', 'bread', 'tea']
  }

  render(){
    let { text, items } = this.state
    let addTodo = () => {
      let newItems =  [text, ...items]
      this.setState({items: newItems})
    }

    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="incomplete"
          selected={ this.state.selectedTab === 'incomplete'}
          systemIcon="history"
          onPress={() => this.setState({selectedTab: 'incomplete'})}
          >
          <View style={styles.container}>
            <View style={styles.inputView}>
              <TextInput
                onChangeText={text => this.setState({text})}
                style={styles.textInput}
              />
              <TouchableHighlight
                style={styles.button}
                onPress={addTodo}
              ><Text style={styles.buttonText}>Add Todo</Text>
              </TouchableHighlight>
            </View>
            <TodoList
              items={this.state.items}
            />
          </View>
      </TabBarIOS.Item>
      <TabBarIOS.Item
        title="completed"
        selected={ this.state.selectedTab === 'completed'}
        onPress={() => this.setState({selectedTab: 'completed'})}
        >
        <View><Text>Another view with another content</Text></View>
      </TabBarIOS.Item>
    </TabBarIOS>
    )
  }
}

let styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 20,
    marginTop: 20,
  },
  inputView: {
    flexDirection: 'row',
  },
  textInput: {
    height: 30,
    width: 200,
    borderWidth: StyleSheet.hairlineWidth
  },
  button: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 30,
  },
  buttonText: {
    fontSize: 15,
    color: 'white',
  }
})


export default TodoContainer
