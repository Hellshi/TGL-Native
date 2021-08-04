/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View, StyleSheet, Text, Dimensions, ImageBackground,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import { StackScreenProps } from '@react-navigation/stack';
import colors from '../../utils';
import { RootStackParamList } from '../../types';

const { PRIMARY_COLOR } = colors;

const image = { uri: 'http://blog.investimentofutebol.com/wp-content/uploads/2017/10/102-Como-sacar-dinheiro-na-Bet365.jpg' };

const { height, width } = Dimensions.get('window');
const Profile = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <View style={styles.main}>
    <View style={styles.avatarContainer}>
      <ImageBackground style={styles.image} source={image} blurRadius={1} resizeMode="cover">
        <Avatar containerStyle={{ alignSelf: 'center', borderColor: '#707070', borderWidth: 4 }} rounded size="xlarge" source={{ uri: 'https://i.pinimg.com/736x/39/f0/6b/39f06b3e7051ea76931637e7b8b43e87.jpg' }} />
        <Text style={styles.name}>
          Dallon James Weekes
        </Text>
        <Text style={{ alignSelf: 'center', color: '#fff' }}>dallon@weekes.com</Text>
      </ImageBackground>
    </View>
    <View style={styles.container}>
      <Button title="Edit Profile" buttonStyle={styles.button} onPress={() => navigation.navigate('Edit')} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  container: {
    width: (width * 0.9),
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: 20,
  },
  name: {
    textAlign: 'center',
    alignSelf: 'center',
    marginLeft: 20,
    color: '#ffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  avatarContainer: {
    width,
    height: 250,
  },
  image: {
    flex: 1,
    width,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 10,
  },
});

export default Profile;
