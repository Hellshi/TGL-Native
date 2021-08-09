/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text, ScrollView, ActivityIndicator,
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
  const [selectedNumbers, setSelectedNumbers] = useState<(number | string)[]>(
    []);
  useEffect(() => {
    api('/all-games').then(({ data }) => {
      setGames(data);
      setSelectedGame(data[0]);
    });
  }, []);

  const selectNumber = (selected: number | string) => {
    const value = selected;
    if (
      selectedNumbers.indexOf(value) === -1
      && selectedNumbers.length < selectedGame.max_number
    ) {
      setSelectedNumbers((currentArr: (number | string)[]) => [
        ...currentArr,
        value,
      ]);
    } else if (selectedNumbers.indexOf(value) !== -1) {
      setSelectedNumbers((currentArr) => currentArr.filter((number) => number !== value));
    } else {
      alert(
        'Oops. Parece que você já adicionou o número máximo de números. Adicione ao carrinho!',
      );
    }
  };

  const clearNumbers = () => {
    setSelectedNumbers([]);
  };

  const buttons: JSX.Element[] = [];
  for (let i = 1; i <= selectedGame.range; i += 1) {
    buttons.push(<Button
      key={i}
      title={i.toString()}
      buttonStyle={selectedNumbers.indexOf(i) === -1 ? styles.number
        : [styles.choosed, { backgroundColor: selectedGame.color }]}
      onPress={() => selectNumber(i)}
      titleStyle={{ fontWeight: '400', fontSize: 15, color: '#fff' }}
    />);
  }

  const generateRandomGameHandler = () => {
    const numbers = [];
    while (numbers.length < selectedGame.max_number) {
      const randomNumber = Math.floor(Math.random() * selectedGame.range);

      if (numbers.indexOf(randomNumber) === -1 && randomNumber > 0) {
        numbers.push(randomNumber);
      }
    }
    setSelectedNumbers(numbers);
  };
  return (
    <ScrollView style={styles.scroll}>
      {games.length === 0 ? (
        <>
          <ActivityIndicator size="small" color="#B5C401" />
        </>
      ) : (
        <View style={styles.main}>
          <View style={styles.header}>
            <Text style={styles.title}>
              {`New Bet for ${selectedGame.game_type}`}
            </Text>
            <Text style={styles.bodyText}>Choose game</Text>
            <View style={styles.buttons}>
              {games.map((single) => (
                <Button
                  onPress={() => setSelectedGame(single)}
                  key={single.id}
                  title={single.game_type}
                  buttonStyle={[styles.button, {
                    borderColor: single.color,
                    backgroundColor: selectedGame.game_type === single.game_type ? single.color : '#fff',
                  }]}
                  titleStyle={{
                    fontWeight: '400',
                    fontSize: 15,
                    color: selectedGame.game_type === single.game_type ? '#fff' : single.color,
                  }}
                />
              ))}
            </View>
            <View>
              {selectedNumbers.length < 1
                ? (
                  <>
                    <Text style={[styles.bodyText, { fontSize: 15, fontWeight: 'bold', marginBottom: 5 }]}>
                      Fill your bet
                    </Text>
                    <Text style={styles.bodyText}>{selectedGame.description}</Text>
                  </>
                )
                : (
                  <>
                    <View>
                      <View style={styles.selectedContainer}>
                        {selectedNumbers.map((item) => (
                          <Button
                            key={item}
                            title={item.toString()}
                            buttonStyle={[styles.selected, { backgroundColor: selectedGame.color }]}
                            onPress={() => selectNumber(item)}
                          />
                        ))}
                      </View>
                      <View style={styles.actionButtons}>
                        <Button
                          title="Complete Game"
                          buttonStyle={styles.actionSingle}
                          titleStyle={styles.actionsTitle}
                          onPress={generateRandomGameHandler}
                        />
                        <Button
                          title="Clear Game"
                          buttonStyle={styles.actionSingle}
                          titleStyle={styles.actionsTitle}
                          onPress={clearNumbers}
                        />
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
      )}

    </ScrollView>
  );
};

export default game;
