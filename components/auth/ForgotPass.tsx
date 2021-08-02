import React from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import colors from '../../utils/index';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../types';

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
            buttonStyle={[styles.button, {flexDirection: 'row'}]}
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

export default ForgotPass

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: BACKGROUND_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    height: 350,
    justifyContent: 'space-between',

  },
  form: {
    width: 250,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 15,
    justifyContent: 'space-between',
    height: 110,
  },
  text: {
    fontSize: 30,
    color: '#707070',
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    padding: 10,
  },
  fogotPass: {
    textAlign: 'left',
    backgroundColor: 'transparent',
  },
  button: {
    flexDirection: 'row-reverse', backgroundColor: 'transparent',
  },
});
