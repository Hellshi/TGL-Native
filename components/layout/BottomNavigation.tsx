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
import game from '../game/game';

const { PRIMARY_COLOR } = colors;

const BottomNavigation = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const Tab = createBottomTabNavigator();
  const ProfileStack = createStackNavigator();
  const GameStack = createStackNavigator();

  const ProfileScreens = () => (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileMain" component={Profile} />
      <ProfileStack.Screen name="Edit" component={EditProfile} />
    </ProfileStack.Navigator>
  );

  const GameScreen = () => (
    <GameStack.Navigator screenOptions={{ headerShown: false }}>
      <GameStack.Screen name="Games" component={game} />
    </GameStack.Navigator>
  );

  return (
    <NavigationContainer independent>
      <Tab.Navigator screenOptions={{ headerShown: true, header: () => <Header /> }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={PRIMARY_COLOR} size={size} />
            ),
            tabBarActiveTintColor: PRIMARY_COLOR,
          }}
        />
        <Tab.Screen
          name="games"
          component={GameScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bitcoin" color={PRIMARY_COLOR} size={size} />
            ),
            tabBarActiveTintColor: PRIMARY_COLOR,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreens}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={PRIMARY_COLOR} size={size} />
            ),
            tabBarActiveTintColor: PRIMARY_COLOR,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

export default BottomNavigation;
