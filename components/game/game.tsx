/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartActions } from '../../store/CartSlice';
import { RootState } from '../../interface';
import styles from './style';

const game = () => {
  const selectedNumbers = useSelector((state: RootState) => state.cart.selectedNumbers);
  const dispatch = useDispatch();

  const selectNumber = (selected: number) => {
    dispatch(CartActions.selectNumber(selected));
  };

  const clearNumbers = () => {
    dispatch(CartActions.clearNumbers());
  };

  const buttons: JSX.Element[] = [];
  for (let i = 1; i <= 60; i += 1) {
    buttons.push(<Button key={i} title={i.toString()} buttonStyle={selectedNumbers.indexOf(i) === -1 ? styles.number : styles.choosed} onPress={() => selectNumber(i)} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#fff' }} />);
  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>New Bet for Lotomania</Text>
          <Text style={styles.bodyText}>Choose game</Text>
          <View style={styles.buttons}>
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
            <Button title="Mega-Sena" buttonStyle={styles.button} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#000' }} />
          </View>
          <View>
            {selectedNumbers.length < 1
              ? (
                <>
                  <Text style={[styles.bodyText, { fontSize: 15, fontWeight: 'bold', marginBottom: 5 }]}>Fill your bet</Text>
                  <Text style={styles.bodyText}>Fill your bet Mark as many numbers as you want up to a maximum of 50. Win by hitting 15, 16, 17, 18, 19, 20 or none of the 20 numbers drawn</Text>
                </>
              )
              : (
                <>
                  <View>
                    <View style={styles.selectedContainer}>
                      {selectedNumbers.map((item) => (<Button key={item} title={item} buttonStyle={styles.selected} onPress={() => selectNumber(item)} />))}
                    </View>
                    <View style={styles.actionButtons}>
                      <Button title="Complete Game" buttonStyle={styles.actionSingle} titleStyle={styles.actionsTitle} />
                      <Button title="Clear Game" buttonStyle={styles.actionSingle} titleStyle={styles.actionsTitle} onPress={clearNumbers} />
                      <Button
                        title="Add to Cart"
                        buttonStyle={styles.actionAddToCart}
                        icon={
                          <Icon name="cart" size={15} color="#ffff" />
            }
                        titleStyle={[styles.actionsTitle, { color: '#fff', marginLeft: 5 }]}
                      />
                    </View>
                  </View>

                </>
              )}
          </View>
        </View>
        <View style={styles.numbers}>
          {buttons.map((button) => button)}
        </View>
      </View>
    </ScrollView>
  );
};

export default game;
