import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';

import logo from '../../images/logo.png';
import { styles } from './styles';

class RegisterScreen extends Component {
  onGoBack = () => {
    const { navigation } = this.props;

    navigation.goBack();
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Image source={logo} style={styles.headerLogo} />
        <Text style={styles.title}>Silahkan register untuk membuat akun</Text>
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
        <View style={styles.spacer} />
        <TextInput
          placeholder="Konfirmasi"
          style={styles.boxInput}
        />
        <View style={styles.spacerRegister} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>DAFTAR</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={[styles.button, styles.buttonRegister]}
          onPress={this.onGoBack}
        >
          <Text style={[styles.buttonText, styles.buttonRegisterText]}>Sudah punya akun? Masuk</Text>
        </TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <KeyboardAvoidingView contentContainerStyle={styles.avoidingStyle}>
          <View style={styles.container}>
            {this.renderHeader()}
            {this.renderBody()}
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}

export default RegisterScreen;
