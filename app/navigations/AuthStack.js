import LoginScreen from '../screens/auth/Login.js';
import React from 'react';
import RegisterScreen from '../screens/auth/Register.js';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const HIDE_HEADER = {
  headerShown: false,
};
const AuthStack = ({ setUserToken }) => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={HIDE_HEADER}>
      <Stack.Screen name="Login">
        {() => <LoginScreen setUserToken={setUserToken} />}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {() => <RegisterScreen setUserToken={setUserToken} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
