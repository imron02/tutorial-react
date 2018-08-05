import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

const cat = require('./assets/images/cat.jpg');
const dog = require('./assets/images/dog.jpg');

class FlexBox extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxOne}>
          <Image source={cat} style={styles.cat} />
          <Image source={cat} style={styles.cat} />
          <Image source={cat} style={styles.cat} />
        </View>
        <View style={styles.boxTwo} />
        <View style={styles.boxThree}>
          <Image source={dog} style={styles.cat} />
          <Image source={dog} style={styles.cat} />
          <Image source={dog} style={styles.cat} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row-reverse'
  },
  boxOne: {
    flex: 1,
    backgroundColor: '#CDDC39',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row'
  },
  boxTwo: {
    flex: 1,
    backgroundColor: '#4CAF50'
  },
  boxThree: {
    flex: 2,
    backgroundColor: '#81D4FA',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cat: {
    width: 70,
    height: 70,
    resizeMode: 'contain'
  }
});

export default FlexBox;