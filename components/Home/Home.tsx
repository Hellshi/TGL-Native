/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet } from 'react-native';
import { RootStackParamList } from '../../types';

const Home = ({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <View style={styles.main}>
    <Text>Home</Text>
  </View>
);

export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
