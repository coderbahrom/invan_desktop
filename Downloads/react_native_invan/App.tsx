import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createStackNavigator} from '@react-navigation/stack'; // Изменили эту строку
import Login from './src/views/Login';
import HomePage from './src/views/HomePage';

const Stack = createStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomePage" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
