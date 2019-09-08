import { StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-navigation';
import { Colors } from '../../utils/colors';

const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: height - Header.HEIGHT - 20,
    backgroundColor: Colors.RED,
    alignItems: 'center'
  },
  avoidingStyle: {
    flex: 1
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
    color: Colors.WHITE,
    fontSize: 14
  },
  body: {
    marginTop: 74,
    alignItems: 'center',
    width: width - 62
  },
  boxInput: {
    width: '100%',
    backgroundColor: Colors.WHITE,
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
    color: Colors.WHITE,
    fontSize: 14
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  buttonRegister: {
    backgroundColor: Colors.RED
  },
  buttonRegisterText: {
    color: Colors.WHITE
  },
  spacerRegister: {
    height: 30
  }
});

export { styles };
