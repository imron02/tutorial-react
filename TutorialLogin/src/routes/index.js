import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login';

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen
  }
}, {
  headerMode: 'none'
});

export default createAppContainer(AppNavigator);
