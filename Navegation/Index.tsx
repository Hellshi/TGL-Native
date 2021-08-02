import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import Login from '../components/auth/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home/Home';
import SingUp from '../components/auth/SingUp';
import ForgotPass from '../components/auth/ForgotPass';

export default function Index() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={Home}/>
      <Stack.Screen name='SingUp' component={SingUp}/>
      <Stack.Screen name='Forgot' component={ForgotPass}/>
    </Stack.Navigator>
  );
}
