/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Login from '../components/auth/Login';
import SingUp from '../components/auth/SingUp';
import ForgotPass from '../components/auth/ForgotPass';
import { RootState } from '../interface';
import BottomNavigation from '../components/layout/BottomNavigation';

export default function Index() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

function RootNavigator() {
  const IsloggedIn = useSelector((state: RootState) => state.Auth.isAuth);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Forgot" component={ForgotPass} />

      <Stack.Screen name="Home" component={IsloggedIn ? BottomNavigation : Login} />
    </Stack.Navigator>
  );
}
