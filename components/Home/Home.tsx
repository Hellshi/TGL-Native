import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../types';

const Home = ({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'> ) => {
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home
