/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import { StackScreenProps } from '@react-navigation/stack';
import {
  View, Text, ScrollView,
} from 'react-native';
import { Button } from 'react-native-elements';
import React, { useEffect, useState } from 'react';
import { RootStackParamList } from '../../types';
import { Game, RecentGames } from '../../interface';
import api from '../../services/api';
import styles from './styles';

const Home = ({
  route,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const [recentGames, setRecentGames] = useState<RecentGames[]>([]);
  const [allGames, setAllGames] = useState<Game[]>([]);
  useEffect(() => {
    api('/all-games').then(({ data }) => {
      setAllGames(data);
    });
  }, []);
  const getGames = async () => {
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
  };

  useEffect(() => {
    getGames();
  }, []);

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Recent Games</Text>
          <Text style={{ fontStyle: 'italic' }}>Filters</Text>
          <View style={styles.buttons}>
            {allGames.map((game) => (
              <Button title={game.game_type} buttonStyle={[styles.button, { borderColor: game.color }]} titleStyle={{ color: game.color }} />
            ))}
          </View>

        </View>
        { recentGames.length === 0 ? (
          <Text> Opps, parece que não temos nenhum jogo aqui! </Text>
        ) : (
          recentGames.map((item, id) => (
            <View key={id} style={[styles.recentGame, { borderLeftColor: item.type.color }]}>
              <Text style={{ textAlign: 'justify' }}>
                {item.choosen_numbers}
              </Text>
              <Text>
                (
                {item.created_at}
                )
                -
                {item.price.toLocaleString('pt-br', {
                  style: 'currency',
                  currency: 'BRL',
                })}
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
