/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CartActions } from '../../store/CartSlice';
import { Game, RootState } from '../../interface';
import styles from './style';
import api from '../../services/api';

const game = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    id: 0,
    game_type: '',
    description: '',
    range: 10,
    price: 20,
    max_number: 1,
    color: '',
    min_cart_value: 1,
  });
  useEffect(() => {
    api('/all-games').then(({ data }) => {
      setGames(data);
      setSelectedGame(data[0]);
    });
  }, []);

  const selectedNumbers = useSelector((state: RootState) => state.cart.selectedNumbers);
  const dispatch = useDispatch();

  const selectNumber = (selected: number) => {
    dispatch(CartActions.selectNumber(selected));
  };

  const clearNumbers = () => {
    dispatch(CartActions.clearNumbers());
  };

  const buttons: JSX.Element[] = [];
  for (let i = 1; i <= selectedGame.range; i += 1) {
    buttons.push(<Button key={i} title={i.toString()} buttonStyle={selectedNumbers.indexOf(i) === -1 ? styles.number : styles.choosed} onPress={() => selectNumber(i)} titleStyle={{ fontWeight: '400', fontSize: 15, color: '#fff' }} />);
  }
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {`New Bet for ${selectedGame.game_type}`}
          </Text>
          <Text style={styles.bodyText}>Choose game</Text>
          <View style={styles.buttons}>
            {games.map((single) => (
              <Button
                key={single.id}
                title={single.game_type}
                buttonStyle={[styles.button, { borderColor: single.color }]}
                titleStyle={{
                  fontWeight: '400', fontSize: 15, color: single.color,
                }}
              />
            ))}
          </View>
          <View>
            {selectedNumbers.length < 1
              ? (
                <>
                  <Text style={[styles.bodyText, { fontSize: 15, fontWeight: 'bold', marginBottom: 5 }]}>Fill your bet</Text>
                  <Text style={styles.bodyText}>{selectedGame.description}</Text>
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
