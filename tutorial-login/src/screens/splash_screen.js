import React, { useEffect } from 'react';
import { Alert, View, Text, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { APP_INIT, SIGN_IN } from '../utils/constant';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    initApp();
  }, []);

  const initApp = async () => {
    try {
      const token = await AsyncStorage.getItem('@key_token');
      if (token !== null) {
        dispatch({ type: SIGN_IN, payload: token });
      } else {
        dispatch({ type: APP_INIT });
      }
    } catch (e) {
      Alert.alert('Warning', 'Mohon maaf terjadi kesalahan');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loading</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default SplashScreen;
