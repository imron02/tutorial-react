import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import { Colors } from '../utils/colors';

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: Colors.RED
      },
      headerTintColor: Colors.WHITE
    }
  }
});

export default createAppContainer(AppNavigator);
