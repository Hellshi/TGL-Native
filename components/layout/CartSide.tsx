/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, RootState } from '../../interface';
import colors from '../../utils';
import { FormatPrice } from '../../utils/FormatPrice';

import styles from './Styles';

const { PRIMARY_COLOR } = colors;

const CartSide = (setCartState: React.Dispatch<React.SetStateAction<boolean>>) => {
  const dispatch = useDispatch();
  const cart: CartItem[] = useSelector((state: RootState) => state.cart.buyedGames);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((prevItem, currentItem) => prevItem + currentItem.price, 0),
    );
  }, [cart]);
  return (
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
        {cart.map((game) => (
          <View
            key={cart.indexOf(game)}
            style={[styles.recentGame, { borderLeftColor: game.color }]}
          >
            <Text style={{ textAlign: 'justify' }}>
              {game.numbers.join(', ')}
            </Text>
            <Text>

              {FormatPrice(game.price)}
            </Text>
            <Text style={{ fontWeight: 'bold', color: game.color }}>
              {game.type}
            </Text>
          </View>
        ))}

      </View>
      <View>
        <Text style={styles.price}>
          Total Price
          {' '}
          {FormatPrice(totalPrice)}
        </Text>
        <Button
          title="Save"
          buttonStyle={styles.saveButton}
          titleStyle={styles.safeTitle}
          icon={
            <Icon name="arrow-right" size={25} color={PRIMARY_COLOR} type="material-community" />
            }
        />
      </View>

    </View>
  );
};
export default CartSide;
