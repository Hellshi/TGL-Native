/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useDispatch, useSelector } from 'react-redux';
import MenuDrawer from 'react-native-side-drawer';
import { RootState } from '../../interface';
import { AuthAction } from '../../store/AuthSlice';
import colors from '../../utils';
import CartSide from './CartSide';

const { PRIMARY_COLOR } = colors;

const HeaderComponent = () => {
  const [cartState, setCartState] = useState(false);
  const selectedNumbers = useSelector((state: RootState) => state.cart.selectedNumbers);
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(AuthAction.logOut());
  };
  return (
    <>
      <MenuDrawer
        open={cartState}
        drawerContent={CartSide(setCartState)}
        drawerPercentage={70}
        animationTime={250}
        overlay
        position="right"
        opacity={0.9}
      />

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
            {selectedNumbers.length === 0 ? <Text /> : (
              <Icon
                name="shopping-cart"
                type="material"
                color={PRIMARY_COLOR}
                onPress={() => setCartState(!cartState)}
              />
            )}

          </View>
)}
      />
    </>

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
