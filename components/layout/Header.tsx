/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header } from 'react-native-elements';
import colors from '../../utils';

const { PRIMARY_COLOR } = colors;

const HeaderComponent = () => (
  <Header
    containerStyle={{ height: 100, alignContent: 'center', justifyContent: 'center' }}
    backgroundColor="#fff"
    placement="left"
    centerComponent={{
      text: 'TGL',
      style: {
        color: '#707070', borderBottomColor: PRIMARY_COLOR, borderBottomWidth: 3, fontSize: 25, fontWeight: 'bold',
      },
    }}
    rightComponent={{ icon: 'logout', color: '#C1C1C1' }}
  />
);

const styles = StyleSheet.create({});

export default HeaderComponent;
