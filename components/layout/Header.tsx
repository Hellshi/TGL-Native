/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useDispatch } from 'react-redux';
import { AuthAction } from '../../store/AuthSlice';
import colors from '../../utils';

const { PRIMARY_COLOR } = colors;

const HeaderComponent = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(AuthAction.logOut());
  };
  return (
    <Header
      containerStyle={styles.main}
      backgroundColor="#fff"
      placement="left"
      centerComponent={{
        text: 'TGL',
        style: {
          color: '#707070', borderBottomColor: PRIMARY_COLOR, borderBottomWidth: 3, marginTop: -5, fontSize: 25, fontWeight: 'bold',
        },
      }}
      rightComponent={(
        <View style={styles.iconsContainer}>
          <Icon
            name="logout"
            type="material"
            color="#C1C1C1"
            onPress={LogOut}
          />
          <Icon
            name="shopping-cart"
            type="material"
            color={PRIMARY_COLOR}
          />
        </View>
)}
    />
  );
};
const styles = StyleSheet.create({
  main: {
    height: 100,
    alignContent: 'center',
    justifyContent: 'center',
  },
  iconsContainer: {
    flexDirection: 'row-reverse',
    width: 70,
    justifyContent: 'space-between',
  },
});

export default HeaderComponent;
