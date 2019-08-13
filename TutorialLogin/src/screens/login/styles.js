import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
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

export { styles };
