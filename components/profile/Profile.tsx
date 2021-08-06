/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View, StyleSheet, Text, Dimensions, ImageBackground,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import styles from './styles';
import { RootStackParamList } from '../../types';
import { RootState } from '../../interface';

const Profile = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const user = useSelector((state: RootState) => state.Auth.user);
  const image = { uri: 'http://blog.investimentofutebol.com/wp-content/uploads/2017/10/102-Como-sacar-dinheiro-na-Bet365.jpg' };
  return (
    <View style={styles.main}>
      <View style={styles.avatarContainer}>
        <ImageBackground style={styles.image} source={image} blurRadius={1} resizeMode="cover">
          <Avatar containerStyle={{ alignSelf: 'center', borderColor: '#707070', borderWidth: 4 }} rounded size="xlarge" source={{ uri: user.picture ? user.picture.url : 'https://hospitalevandroribeiro.com.br/images/no-photo.png' }} />
          <Text style={styles.name}>
            {user.name}
          </Text>
          <Text style={{ alignSelf: 'center', color: '#fff' }}>dallon@weekes.com</Text>
        </ImageBackground>
      </View>
      <View style={styles.container}>
        <Button title="Edit Profile" buttonStyle={styles.button} onPress={() => navigation.navigate('Edit')} />
      </View>
    </View>
  );
};

export default Profile;
