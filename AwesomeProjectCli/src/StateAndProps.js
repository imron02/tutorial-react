import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Card extends Component {
  render() {
    const { name } = this.props;

    return (
      <Text>Hello, {name}</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true
    };

    setInterval(() => {
      this.setState({ show: !this.state.show })
    }, 1000);
  }

  render() {
    let display = this.state.show ? this.props.value : '';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class StateAndProps extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lastName: ''
    };

    setTimeout(() => {
      this.setState({ lastName: 'Rosdiana' });
    }, 2000);
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Hello World</Text>

        <Card name="Imron Rosdiana" />

        <Text>Nama saya imron {this.state.lastName}</Text>

        <Blink value="Ini teks berkedip-kedip" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: 'blue'
  }
});