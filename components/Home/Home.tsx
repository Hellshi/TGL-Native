/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import { StackScreenProps } from '@react-navigation/stack';
import {
  View, Text, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { RootStackParamList } from '../../types';
import { Game, RecentGames } from '../../interface';
import api from '../../services/api';
import styles from './styles';
import { ModalActions } from '../../store/ModalSlice';

const Home = ({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  useEffect(() => {
    getGames();
    getBets();
  }, []);
  const dispatch = useDispatch();
  const [recentGames, setRecentGames] = useState<RecentGames[]>([]);
  const [allGames, setAllGames] = useState<Game[] >([]);
  const [selectedFilters, setSelectedFilter] = useState<string[]>([]);
  const [filteredGames, setFilteredGames] = useState(recentGames);

  const getGames = async () => {
    try {
      const { data } = await api.get('/all-games');
      setAllGames(data);
    } catch (err) {
      console.log(err);
      dispatch(ModalActions.openModal(`${err}`));
    }
  };

  const getBets = async () => {
    const getResponse = await api.get('/bet/all-bets');
    const { data } = getResponse;
    setRecentGames(
      data.map((item: RecentGames) => ({
        ...item,
        created_at: (() => {
          const date = new Date(item.created_at);
          return date.toLocaleDateString('pt-BR');
        })(),
      })),
    );
    setFilteredGames(recentGames);
  };

  const filterGameHandler = (filter: string) => {
    const index = selectedFilters.indexOf(filter);
    if (index < 0) {
      setSelectedFilter((prevFilters) => [...prevFilters, filter]);
    } else {
      setSelectedFilter((prevFilters) => prevFilters.filter((item) => item !== filter));
    }
  };

  useEffect(() => {
    if (selectedFilters.length === 0) {
      setFilteredGames(recentGames);
    } else {
      setFilteredGames(recentGames.filter((game) => selectedFilters.indexOf(game.type.game_type) !== -1));
    }
  }, [selectedFilters, recentGames]);

  const FormatPrice = (value:number) => {
    const formated = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
    const price = formated.toString().split('BRL');
    const response = `R$ ${price[0]}`;
    return response;
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Recent Games</Text>
          <Text style={{ fontStyle: 'italic' }}>Filters</Text>
          <View style={styles.buttons}>
            {allGames.map((game) => (
              <Button
                key={game.id}
                onPress={() => filterGameHandler(game.game_type)}
                title={game.game_type}
                buttonStyle={[styles.button, {
                  borderColor: game.color,
                  backgroundColor: selectedFilters.indexOf(game.game_type) > -1 ? game.color : '#fff',
                }]}
                titleStyle={{ color: selectedFilters.indexOf(game.game_type) > -1 ? '#fff' : game.color }}
              />
            ))}
          </View>

        </View>
        { filteredGames.length === 0 ? (
          <Text> Opps, parece que não temos nenhum jogo aqui! </Text>
        ) : (
          filteredGames.map((item) => (
            <View
              key={item.id}
              style={[styles.recentGame, { borderLeftColor: item.type.color }]}
            >
              <Text style={{ textAlign: 'justify' }}>
                {item.choosen_numbers}
              </Text>
              <Text>
                (
                {item.created_at}
                )
                {` - ${FormatPrice(item.price)}`}
              </Text>
              <Text style={{ fontWeight: 'bold', color: item.type.color }}>
                {item.type.game_type}
              </Text>
            </View>
          )))}
      </View>
    </ScrollView>
  );
};
export default Home;
