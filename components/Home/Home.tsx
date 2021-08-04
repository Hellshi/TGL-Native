/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import { StackScreenProps } from '@react-navigation/stack';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import React, { useState } from 'react';
import { RootStackParamList } from '../../types';

const { height, width } = Dimensions.get('window');

const Home = ({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  useState(() => { console.log(height, width); });
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Recent Games</Text>
          <Text style={{ fontStyle: 'italic' }}>Filters</Text>
          <View style={styles.buttons}>
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
          </View>

        </View>
        <View style={styles.recentGame}>
          <Text style={{ textAlign: 'justify' }}>  01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15 </Text>
          <Text>  (30/11/2225) - R$25.00 </Text>
          <Text style={{ fontWeight: 'bold', color: '#000' }}>  LotoNãoSei </Text>
        </View>

        <View style={styles.recentGame}>
          <Text style={{ textAlign: 'justify' }}>  01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15 </Text>
          <Text>  (30/11/2225) - R$25.00 </Text>
          <Text style={{ fontWeight: 'bold', color: '#000' }}>  LotoNãoSei </Text>
        </View>
      </View>
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    width: (width * 0.9),
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    color: '#707070',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'italic',
  },
  topContainer: {
    height: (height * 0.15),
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    backgroundColor: 'transparent',
    borderColor: '#000',
    padding: 0,
    borderWidth: 3,
    borderRadius: 25,
  },
  recentGame: {
    marginBottom: 20,
    borderRadius: 4,
    borderLeftColor: '#000',
    borderLeftWidth: 5,
    paddingLeft: 5,
  },
});
