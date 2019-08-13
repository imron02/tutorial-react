import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';

import logo from '../../images/logo.png';
import { styles } from './styles';

class LoginScreen extends Component {
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

export default LoginScreen;
