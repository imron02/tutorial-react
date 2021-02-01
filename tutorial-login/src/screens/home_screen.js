import React from 'react';
import { View, Text, Pressable, StyleSheet, Alert } from "react-native";
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SIGN_OUT } from '../utils/constant';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch({ type: SIGN_OUT });

    try {
      await AsyncStorage.removeItem('@key_token');
    } catch (e) {
      // saving error
      Alert.alert('Warning', 'Mohon maaf terjadi kesalahan');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onLogout}>
        <Text style={styles.title}>LOGOUT</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    height: 40,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF'
  }
});

export default HomeScreen;
