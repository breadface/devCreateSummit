import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ImageSwiper from './examples/image-swiper/ImageSwiper'
import Todo from './examples/todo-list/TodoContainer'
import Counter from './examples/declarative-patterns/Counter'

export default class App extends React.Component {
  render() {
    return (
      // <ImageSwiper />
      // <Todo />
      <Counter />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
