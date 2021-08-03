/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils';
import Home from '../Home/Home';
import { RootStackParamList } from '../../types';
import Header from './Header';

const { PRIMARY_COLOR } = colors;

const BottomNavigation = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer independent>
      <Tab.Navigator screenOptions={{ headerShown: true, header: () => <Header /> }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={PRIMARY_COLOR} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Home}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={PRIMARY_COLOR} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default BottomNavigation;
