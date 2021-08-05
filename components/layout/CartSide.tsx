/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  View, Text,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import colors from '../../utils';
import styles from './Styles';

const { PRIMARY_COLOR } = colors;

const CartSide = (setCartState: React.Dispatch<React.SetStateAction<boolean>>) => (
  <View style={styles.animatedBox}>
    <View style={styles.mainContainer}>
      <Icon
        containerStyle={styles.close}
        name="close"
        type="material"
        color={PRIMARY_COLOR}
        onPress={() => setCartState(false)}
      />
      <View style={styles.header}>
        <Icon
          containerStyle={styles.close}
          name="shopping-cart"
          type="material"
          size={30}
          color={PRIMARY_COLOR}
          onPress={() => setCartState(false)}
        />
        <Text style={styles.title}>Cart</Text>
      </View>
      <View style={styles.recentGame}>
        <Text style={{ textAlign: 'justify' }}>  01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15 </Text>
        <Text>  (30/11/2225) - R$25.00 </Text>
        <Text style={{ fontWeight: 'bold', color: '#000' }}>  LotoNãoSei </Text>
      </View>
    </View>
    <Button
      title="Save"
      buttonStyle={styles.saveButton}
      titleStyle={styles.safeTitle}
      icon={
        <Icon name="arrow-right" size={25} color={PRIMARY_COLOR} type="material-community" />
            }
    />
  </View>
);

export default CartSide;
