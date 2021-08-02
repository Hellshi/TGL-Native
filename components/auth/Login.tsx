 import React from 'react';
 import { TextInput, View, StyleSheet, Text } from 'react-native';
 import { Button } from 'react-native-elements'
 import { Formik } from 'formik';

const Login = () => (
   <Formik
     initialValues={{ email: '', password: '' }}
     onSubmit={values => alert(values.email)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <View style={styles.main}>
         <View style={styles.container}>
            <View>
          <Text>TGL</Text>
          <Text>Authentication</Text>
         </View>

         <View style={styles.form}>
          <TextInput
          placeholder="Email"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
          <TextInput
          placeholder="Password"
           onChangeText={handleChange('password')}
           onBlur={handleBlur('password')}
           value={values.password}
         />
         <Button onPress={handleSubmit} title="Forgot Password" />
         <Button onPress={() => alert('aaa')} title="Submit" />
         <Button onPress={() => alert('aaa')} title="Sing In" />
         </View>

         </View>
       </View>
     )}
   </Formik>
 );

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {

  },
  form: {
    width: 250,
  },
})

export default Login
