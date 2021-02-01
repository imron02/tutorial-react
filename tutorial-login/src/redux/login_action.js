import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { Alert } from 'react-native';
import { SIGN_IN, SIGN_OUT } from '../utils/constant';

const login = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://192.168.0.28:3000/login', {
      email,
      password
    });

    if (response.status === 200) {
      const data = response?.data?.data;

      dispatch({ type: SIGN_IN, payload: data?.token });
      AsyncStorage.setItem('@key_token', data?.token);
    } else {
      dispatch({ type: SIGN_OUT });
      AsyncStorage.removeItem('@key_token');
      Alert.alert('Warning', response?.data?.message ?? 'Login failure');
    }
  } catch (e) {
    dispatch({ type: SIGN_OUT });
    AsyncStorage.removeItem('@key_token');
    Alert.alert('Warning', e?.response?.data?.message ?? 'Login failure');
  }
};

export default login;
