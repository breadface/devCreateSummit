import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
} from 'react-native'

let { width } =  Dimensions.get('window')
let xOffset = new Animated.Value(0)

let onScroll = Animated.event(
  [{ nativeEvent: { contentOffset: { x: xOffset } } }],
  { useNativeDriver: true}
)

let rotateTransform = index => {
  return {
    transform: [{
      rotate: xOffset.interpolate({
        inputRange: [(index-1)*width, index*width, (index+1)*width],
        outputRange: ['30deg', '0deg', '-30deg'],
      })
    }]
  }
}


export default class ImageSwiper extends React.Component {
  render() {
    return (
      <Animated.ScrollView
        style={styles.container}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        onScroll={onScroll}
        >
        <View style={styles.scrollPage}>
          <Animated.View style={[styles.card, rotateTransform(0)]}>
            <Text>Page 1</Text>
          </Animated.View>
        </View>
        <View style={styles.scrollPage}>
          <Animated.View style={[styles.card, rotateTransform(1)]}>
            <Text>Page 2</Text>
          </Animated.View>
        </View>
        <View style={styles.scrollPage}>
          <Animated.View style={[styles.card, rotateTransform(2)]}>
            <Text>Page 3</Text>
          </Animated.View>
        </View>
      </Animated.ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  scrollPage: {
    width,
    padding: 20,
  },
  card: {
    height: 300,
    backgroundColor: "#F5FCFF",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black'
  },
});
