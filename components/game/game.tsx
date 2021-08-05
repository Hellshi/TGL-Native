/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  View, StyleSheet, Text, ScrollView, Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import { CartActions } from '../../store/CartSlice';
import colors from '../../utils';
import { RootState } from '../../interface';

const { BALL_COLOR } = colors;
const { height } = Dimensions.get('window');

const game = () => {
  const selectedNumbers = useSelector((state: RootState) => state.cart.selectedNumbers);
  const dispatch = useDispatch();
  const selectNumber = (selected: number) => {
    dispatch(CartActions.selectNumber(selected));
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

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  main: {
  },
  header: {
    margin: 20,
    height: (0.33 * height),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 25,
    fontStyle: 'italic',
    fontWeight: 'bold',
    color: '#707070',
  },
  bodyText: {
    fontStyle: 'italic',
    color: '#707070',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: 100,
    backgroundColor: '#fff',
    borderColor: '#000',
    padding: 0,
    borderWidth: 3,
    borderRadius: 25,
  },
  numbers: {
    marginTop: 20,
    marginLeft: 15,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  number: {
    width: 55,
    margin: 5,
    height: 55,
    borderRadius: 30,
    backgroundColor: BALL_COLOR,
  },
  choosed: {
    width: 55,
    margin: 5,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#000',
  },
  selected: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: '#000',
    margin: 5,
  },
  selectedContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default game;
