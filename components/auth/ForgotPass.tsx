import React from 'react';
import { StackScreenProps } from '@react-navigation/stack';
import { View, Text } from 'react-native';
import { RootStackParamList } from '../../types';

export default function ForgotPass({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'> ) {
  return (
    <View>
      <Text>I'm Dumb</Text>
    </View>
  );
}
