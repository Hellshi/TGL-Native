/* eslint-disable no-alert */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text,
} from 'react-native';
import { Icon, Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { CartItem, RootState } from '../../interface';
import api from '../../services/api';
import { CartActions } from '../../store/CartSlice';
import { ModalActions } from '../../store/ModalSlice';
import colors from '../../utils';

import styles from './Styles';

const { PRIMARY_COLOR } = colors;

const CartSide = ({ setCartState } : { setCartState: (arg: boolean) => void }) => {
  const dispatch = useDispatch();

  const FormatPrice = (value:number) => {
    const formated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
    const price = formated.toString().split('BRL');
    const response = `R$ ${price[0]}`;
    return response;
  };

  const cart: CartItem[] = useSelector((state: RootState) => state.cart.buyedGames);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((prevItem, currentItem) => prevItem + currentItem.price, 0),
    );
  }, [cart]);

  const deleteItemHandler = (id: number) => {
    dispatch(CartActions.deleteGame(id));
    if (cart.length < 2) { setCartState(false); }
  };

  const handleBuyGames = async () => {
    // Substituir alert por modal
    try {
      if (cart.length === 0) {
        dispatch(ModalActions.openModal('Opa, adicione algum jogo ao carrinho primeiro!'));
        return;
      }
      if (totalPrice < 30) {
        dispatch(ModalActions.openModal('Opa, para completar essa ação seu carrinho deve ter um valor maior que R$30,00. Continue comprando e tente novamente'));
        return;
      }
      await api.post('/bet/new-bet', { games: cart });
      dispatch(CartActions.clearCart());
      setCartState(false);
      dispatch(ModalActions.openModal('Jogo adicionado com sucesso!'));
    } catch (err) {
      // Readicionar os console.log no catch
      alert(err);
    }
  };
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
            style={styles.recentGameContainer}
          >
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
            <Icon
              onPress={() => deleteItemHandler(cart.indexOf(game))}
              name="delete"
              type="material"
              color="#ed2939"
            />
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
          onPress={handleBuyGames}
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
