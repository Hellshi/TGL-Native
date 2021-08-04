/* eslint-disable no-unused-vars */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../utils';
import Home from '../Home/Home';
import { RootStackParamList } from '../../types';
import Header from './Header';
import Profile from '../profile/Profile';
import EditProfile from '../profile/EditProfile';

const { PRIMARY_COLOR } = colors;

const BottomNavigation = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const Tab = createBottomTabNavigator();
  const ProfileStack = createStackNavigator();

  const ProfileScreens = () => (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={Profile} />
      <ProfileStack.Screen name="Edit" component={EditProfile} />
    </ProfileStack.Navigator>
  );

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
          component={ProfileScreens}
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
