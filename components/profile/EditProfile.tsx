/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-use-before-define */
import React, { useState } from 'react';
import {
  TextInput, View, Text, Alert, ScrollView,
} from 'react-native';
import { Avatar, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { RootState } from '../../interface';
import { AuthAction } from '../../store/AuthSlice';
import styles from './styles';
import colors from '../../utils';
import api from '../../services/api';

const { PRIMARY_COLOR } = colors;

const EditProfile = () => {
  const user = useSelector((state: RootState) => state.Auth.user);
  const [singleFile, setSingleFile] = useState(user.picture ? user.picture.url : 'https://hospitalevandroribeiro.com.br/images/no-photo.png');
  const [file, setFile] = useState('');
  const [showBox, setShowBox] = useState(true);
  const dispatch = useDispatch();

  const uploadImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 5],
      quality: 1,
    });

    if (!result.cancelled) {
      setSingleFile(result.uri);
      console.log(result);
      const fileName = result.uri.split('/').pop() || '';
      setFile(fileName);
    }
  };

  const addPicture = async () => {
    const formData = new FormData();
    const type = file.split('.');
    formData.append('file', { uri: singleFile, name: file, type: `image/${type[1]}` });
    console.log(formData);
    try {
      const response = await api.post('/file/add-pic', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.status);
    } catch (err) {
      console.log({ err });
    }
  };

  const showConfirmDialog = () => Alert.alert(
    'Are your sure?',
    'Are you sure you want to remove this beautiful box?',
    [
      {
        text: 'Yes',
        onPress: async () => {
          try {
            const response = await api.delete('/user/delete');
            dispatch(AuthAction.logOut());
          } catch (err) {
            alert(err);
          }
        },
      },
      {
        text: 'No',
      },
    ],
  );

  return (
    <ScrollView style={styles.main}>
      <View style={styles.mainContainer}>
        <View style={styles.info}>
          <Text style={styles.title}>
            {user.name}
          </Text>
          <Avatar rounded size="large" source={{ uri: singleFile }} />
        </View>
        <View style={styles.form}>
          <Formik
            initialValues={{
              email: user.email, password: '', name: user.name, conformPassword: '', oldPassword: '',
            }}
            onSubmit={async (values) => {
              try {
                const PutResponse = await api.put('/user/update', {
                  email: values.email,
                  oldPassword: values.oldPassword,
                  password: values.password,
                  ConfirmPassword: values.conformPassword,
                  name: values.name,
                });
                if (file.trim().length > 0) {
                  await addPicture();
                }
                alert('Dados atualizados con sucesso');
              } catch (error) {
                console.log(error);
              }
            }}
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
                    <TextInput
                      style={styles.TextInput}
                      placeholder="Old Password"
                      secureTextEntry
                      onChangeText={handleChange('oldPassword')}
                      onBlur={handleBlur('oldPassword')}
                      value={values.oldPassword}
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
                      buttonStyle={styles.buttonEdit}
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

export default EditProfile;
