/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import { StackScreenProps } from '@react-navigation/stack';
import colors from '../../utils/index';
import { RootStackParamList } from '../../types';
import styles from './styles';

const { PRIMARY_COLOR, BORDER_COLOR, BACKGROUND_COLOR } = colors;

const ForgotPass = ({
  navigation,
}: StackScreenProps<RootStackParamList, 'NotFound'>) => (
  <Formik
    initialValues={{ email: '', password: '', name: '' }}
    onSubmit={(values) => alert(values.email)}
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

            <Button
              buttonStyle={styles.button}
              titleStyle={{
                color: PRIMARY_COLOR, fontSize: 25, marginRight: 5, fontStyle: 'italic',
              }}
              onPress={() => console.log('Home')}
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

export default ForgotPass;
