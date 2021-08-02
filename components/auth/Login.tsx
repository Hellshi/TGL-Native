import React from 'react';
import {
  TextInput, View, StyleSheet, Text,
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import colors from '../../utils/index';

const { PRIMARY_COLOR, BORDER_COLOR, BACKGROUND_COLOR } = colors;

const Login = () => (
  <Formik
    initialValues={{ email: '', password: '' }}
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
              onPress={handleSubmit}
              titleStyle={{ color: '#707070', fontSize: 10 }}
            />
            <Button
              buttonStyle={styles.button}
              titleStyle={{
                color: PRIMARY_COLOR, fontSize: 25, marginRight: 5, fontStyle: 'italic',
              }}
              onPress={() => console.log('aaa')}
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
            onPress={() => console.log('aaa')}
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

export default Login;
