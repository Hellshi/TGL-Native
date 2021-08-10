/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  View, StyleSheet, Text, Dimensions,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { RootState } from '../../interface';
import { ModalActions } from '../../store/ModalSlice';
import colors from '../../utils';

const { PRIMARY_COLOR } = colors;

const { height } = Dimensions.get('window');

const ErrorModal = () => {
  const isVisible = useSelector((state: RootState) => state.Modal.isVisible);
  const error = useSelector((state: RootState) => state.Modal.error);
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch(ModalActions.closeModal());
  };
  return (
    <Modal
      isVisible={isVisible}
      useNativeDriver
      hideModalContentWhileAnimating
    >
      <View style={styles.main}>
        <Text style={styles.title}>TGL</Text>
        <Text style={styles.error}>{error}</Text>
        <Button
          buttonStyle={styles.button}
          titleStyle={{
            color: PRIMARY_COLOR, fontSize: 25, marginRight: 5, fontStyle: 'italic',
          }}
          onPress={() => closeModal()}
          title="Close"
          icon={
            <Icon name="arrow-right" size={25} color={PRIMARY_COLOR} />
            }
        />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontStyle: 'italic',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
    borderBottomWidth: 5,
    borderColor: PRIMARY_COLOR,
  },
  error: {
    marginTop: 20,
    alignSelf: 'center',
    fontStyle: 'italic',
    fontSize: 15,
  },
  main: {
    backgroundColor: '#fff',
    height: height * 0.25,
    justifyContent: 'space-around',
  },
  button: {
    flexDirection: 'row-reverse',
    backgroundColor: 'transparent',
  },
});

export default ErrorModal;
