import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

class Card extends Component {
  render() {
    return (
      <Text>Hello, {this.props.name}</Text>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShowingText: true
    };

    setInterval(() => {
      this.setState({
        isShowingText: !this.state.isShowingText
      });
    }, 1000);
  }

  render() {
    let display = this.state.isShowingText ? this.props.text : ' ';
    return (
      <Text>{display}</Text>
    );
  }
}

export default class App extends Component {


  render() {
    return (
      <SafeAreaView>
        <Card name="Imron" />

        <Blink text="Hello text ini berkedip-kedip" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({});
