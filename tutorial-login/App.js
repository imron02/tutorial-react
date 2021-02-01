import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider, useSelector } from 'react-redux';
import 'react-native-gesture-handler';

import store from './src/redux/store';
import SplashScreen from './src/screens/splash_screen';
import HomeScreen from './src/screens/home_screen';
import LoginScreen from './src/screens/login_screen';

const Stack = createStackNavigator();

const RootNav = () => {
  const { isLoading, userToken } = useSelector((state) => state.login);

  return (
    <Stack.Navigator>
      {isLoading ? (
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'red',
              elevation: 0
            }
          }}
        />
      ) : userToken === null ? (
        <Stack.Screen name="Login" component={LoginScreen} />
      ) : (
        <Stack.Screen name="Home" component={HomeScreen} />
      )}
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNav />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
