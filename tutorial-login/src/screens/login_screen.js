import React from 'react';
import {
  Alert,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Yup from 'yup';

import { SIGN_IN, SIGN_OUT } from '../utils/constant';
import login from '../redux/login_action';

const token = 'dummy-token';

const LoginScreen = () => {
  const dispatch = useDispatch();

  const onLogin = async ({ email, password }) => {
    try {
      const { token } = await login(email, password);

      dispatch({ type: SIGN_IN, payload: token });
      await AsyncStorage.setItem('@key_token', token);
    } catch (e) {
      dispatch({ type: SIGN_OUT });
      AsyncStorage.removeItem('@key_token');
      Alert.alert('Warning', e);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={onLogin}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
          password: Yup.string()
            .required('Password is required')
            .min(5, 'Minimum length is 5')
        })}>
        {(formikProps) => {
          const {
            handleBlur,
            handleSubmit,
            values,
            isValid,
            dirty,
            errors,
            touched,
            setFieldTouched,
            setFieldValue
          } = formikProps;
          return (
            <View style={styles.wrapper}>
              <TextInput
                style={styles.textInput}
                onChangeText={(value) => {
                  setFieldValue('email', value);
                  setFieldTouched('email', true);
                }}
                onBlur={handleBlur('email')}
                value={values.email}
                placeholder="Input email"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              {errors.email && touched.email && (
                <Text style={styles.errors}>{errors.email}</Text>
              )}
              <TextInput
                style={styles.textInput}
                onChangeText={(value) => {
                  setFieldValue('password', value);
                  setFieldTouched('password', true);
                }}
                onBlur={handleBlur('password')}
                value={values.password}
                placeholder="password"
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errors}>{errors.password}</Text>
              )}
              <TouchableOpacity
                style={[
                  styles.button,
                  (!isValid || !dirty) && styles.btnDisabled
                ]}
                disabled={!isValid || !dirty}
                onPress={handleSubmit}>
                <Text style={styles.title}>LOGIN</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
    borderRadius: 10
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  },
  wrapper: {
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: '50%'
  },
  textInput: {
    width: '100%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 8,
    marginTop: 8
  },
  btnDisabled: {
    backgroundColor: '#ccc'
  },
  errors: {
    alignSelf: 'flex-start',
    marginLeft: 5,
    color: 'red'
  }
});

export default LoginScreen;
