import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import logo from './images/logo.png';

const { width } = Dimensions.get('window');

class App extends Component {
  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={styles.title}>Silahkan login untuk melanjutkan</Text>
      </View>
    );
  };

  renderBody = () => {
    return (
      <View style={styles.body}>
        <TextInput
          placeholder="Email"
          style={styles.boxInput}
        />
        <View style={styles.spacer} />
        <TextInput
          placeholder="Password"
          style={styles.boxInput}
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Lupa password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>MASUK</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity style={[styles.button, styles.buttonRegister]}>
          <Text style={[styles.buttonText, styles.buttonRegisterText]}>DAFTAR</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.renderHeader()}
        {this.renderBody()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center'
  },
  header: {
    marginTop: 83,
    alignItems: 'center'
  },
  headerLogo: {
    width: 105,
    height: 53
  },
  title: {
    marginTop: 13,
    color: 'white',
    fontSize: 14
  },
  body: {
    marginTop: 74,
    alignItems: 'center',
    width: width - 62
  },
  boxInput: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 5
  },
  spacer: {
    height: 6
  },
  forgotPassword: {
    marginTop: 25,
    alignSelf: 'flex-end',
    marginBottom: 33
  },
  forgotPasswordText: {
    color: 'white',
    fontSize: 14
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  buttonRegister: {
    backgroundColor: 'red'
  },
  buttonRegisterText: {
    color: 'white'
  }
});

export default App;
