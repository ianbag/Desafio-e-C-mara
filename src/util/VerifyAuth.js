import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import styles from '../styles/Styles.js';

export default class AuthLoadingScreen extends React.Component {

  constructor() {
    super();
    this._bootstrapAsync();
  }


  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');


    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}