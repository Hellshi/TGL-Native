/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';
import { Button, Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch } from 'react-redux';
import colors from '../../utils/index';
import { RootStackParamList } from '../../types';
import styles from './styles';
import api from '../../services/api';
import { ModalActions } from '../../store/ModalSlice';

const { PRIMARY_COLOR } = colors;

const SingUp = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const dispatch = useDispatch();
  const [secureEntry, setSecuryEntry] = useState(true);
  return (
    <Formik
      initialValues={{ email: '', password: '', name: '' }}
      onSubmit={async (values) => {
        try {
          const postRespnse = await api.post('/user/create', {
            email: values.email,
            password: values.password,
            name: values.name,
          });
          navigation.push('Home');
        } catch (error) {
          dispatch(ModalActions.openModal(`${error.response.data.error.message}`));
        }
      }}
    >
      {({
        handleChange, handleBlur, handleSubmit, values,
      }) => (
        <View style={styles.main}>
          <View style={styles.container}>
            <View style={styles.textContainer}>
              <Text style={[styles.text,
                {
                  borderBottomColor: PRIMARY_COLOR,
                  borderBottomWidth: 5,
                  borderBottomRightRadius: 2,
                  borderBottomLeftRadius: 2,
                  fontSize: 30,
                },
              ]}
              >
                TGL

              </Text>
              <Text style={styles.text}>Authentication</Text>
            </View>

            <View style={styles.form}>
              <TextInput
                style={styles.TextInput}
                placeholder="Name"
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <Input
                rightIcon={(
                  <Icon
                    name="eye"
                    size={20}
                    color="black"
                    onPress={() => setSecuryEntry(!secureEntry)}
                  />
                )}
                secureTextEntry={secureEntry}
                inputStyle={{ fontSize: 15 }}
                inputContainerStyle={[styles.TextInput, { paddingTop: 0, margin: 0 }]}
                placeholder="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Button
                buttonStyle={styles.button}
                titleStyle={{
                  color: PRIMARY_COLOR, fontSize: 25, marginRight: 5, fontStyle: 'italic',
                }}
                onPress={() => handleSubmit()}
                title="Submit"
                icon={
                  <Icon name="arrow-right" size={25} color={PRIMARY_COLOR} />
            }
              />
            </View>
            <Button
              buttonStyle={[styles.button, { flexDirection: 'row' }]}
              titleStyle={{
                color: '#707070', fontSize: 25, marginRight: 5, fontStyle: 'italic',
              }}
              onPress={() => navigation.goBack()}
              title="Back"
              icon={
                <Icon name="arrow-left" size={25} color="#707070" />
            }
            />

          </View>
        </View>
      )}
    </Formik>
  );
};
export default SingUp;
