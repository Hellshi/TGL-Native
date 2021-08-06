/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import {
  TextInput, View, StyleSheet, Text, Alert, ScrollView,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import colors from '../../utils';

const { PRIMARY_COLOR, BORDER_COLOR } = colors;

const EditProfile = () => {
  const [singleFile, setSingleFile] = useState('https://i.pinimg.com/736x/39/f0/6b/39f06b3e7051ea76931637e7b8b43e87.jpg');
  const [showBox, setShowBox] = useState(true);

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.cancelled) {
      setSingleFile(result.uri);
    }
  };

  const showConfirmDialog = () => Alert.alert(
    'Are your sure?',
    'Are you sure you want to remove this beautiful box?',
    [
      // The "Yes" button
      {
        text: 'Yes',
        onPress: () => {
          setShowBox(false);
        },
      },
      // The "No" button
      // Does nothing but dismiss the dialog when tapped
      {
        text: 'No',
      },
    ],
  );
  return (
    <ScrollView style={styles.main}>
      <View style={styles.mainContainer}>
        <View style={styles.info}>
          <Text style={styles.title}> Dallon Weekes </Text>
          <Avatar rounded size="large" source={{ uri: singleFile }} />
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{
              email: '', password: '', name: '', conformPassword: '',
            }}
            onSubmit={(values) => { alert('submit'); }}
          >
            {({
              handleChange, handleBlur, handleSubmit, values,
            }) => (
              <View>
                <View>
                  <View style={styles.form}>
                    <TextInput
                      style={styles.TextInput}
                      placeholder="Name"
                      onChangeText={handleChange('Name')}
                      onBlur={handleBlur('Name')}
                      value={values.name}
                    />
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
                    <TextInput
                      style={styles.TextInput}
                      placeholder="Confirm Password"
                      secureTextEntry
                      onChangeText={handleChange('Conform Password')}
                      onBlur={handleBlur('Conform Password')}
                      value={values.conformPassword}
                    />
                    <Button title="Change Profile Pic" buttonStyle={{ backgroundColor: PRIMARY_COLOR }} onPress={uploadImage} />
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
                </View>
              </View>
            )}
          </Formik>
        </View>
        <Button title="Delete Profile" buttonStyle={{ backgroundColor: 'transparent', marginTop: 20 }} titleStyle={{ color: '#ed2939' }} onPress={showConfirmDialog} />
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  info: {
    flexDirection: 'row-reverse',
    margin: 20,
  },
  mainContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginTop: 20,
    marginBottom: 20,
    color: PRIMARY_COLOR,
  },
  form: {
    width: 250,
    borderWidth: 1,
    borderColor: BORDER_COLOR,
    borderRadius: 15,
    backgroundColor: '#FFFFFF',
  },
  TextInput: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    padding: 10,
  },
  button: {
    flexDirection: 'row-reverse', backgroundColor: 'transparent',
  },
});

export default EditProfile;
