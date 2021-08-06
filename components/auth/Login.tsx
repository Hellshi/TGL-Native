/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import { StackScreenProps } from '@react-navigation/stack';
import { useDispatch, useSelector } from 'react-redux';
import { AuthAction } from '../../store/AuthSlice';
import colors from '../../utils/index';
import { RootStackParamList } from '../../types';
import { RootState } from '../../interface';
import api from '../../services/api';
import styles from './styles';

const { PRIMARY_COLOR, BORDER_COLOR, BACKGROUND_COLOR } = colors;
const Login = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => {
  const dispatch = useDispatch();
  const IsloggedIn = useSelector((state: RootState) => state.Auth.isAuth);
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={async (values) => {
        try {
          console.log(values.email, values.password);
          const postResponse = await api.post('/login', {
            email: values.email,
            password: values.password,
          });
          const { data } = postResponse;
          console.log(data);
          dispatch(
            AuthAction.login({
              name: data.user.name,
              email: data.user.email,
              picture: data.user.picture,
              is_admin: data.user.is_admin,
            }),
          );
          api.defaults.headers.Authorization = `Bearer ${data.token.token}`;
          navigation.push('Home');
        } catch (error) {
          alert('Credenciais de usuário inválidas');
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
                placeholder="Email"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              <TextInput
                style={styles.TextInput}
                placeholder="Password"
                secureTextEntry
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />
              <Button
                title="Forgot Password"
                buttonStyle={styles.fogotPass}
                onPress={() => navigation.push('Forgot')}
                titleStyle={{ color: '#707070', fontSize: 10 }}
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
              buttonStyle={styles.button}
              titleStyle={{
                color: '#707070', fontSize: 25, marginRight: 5, fontStyle: 'italic',
              }}
              onPress={() => navigation.push('SingUp')}
              title="Sing-Up"
              icon={
                <Icon name="arrow-right" size={25} color="#707070" />
            }
            />

          </View>
        </View>
      )}
    </Formik>
  );
};

export default Login;
