import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Image,
  ImageBackground,
  AsyncStorage,
} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from './src/styles/Styles.js';

import Login from './src/components/Login.js';
import Register from './src/components/Register.js';
import Home from './src/components/Home.js';
import HomeLogged from './src/components/HomeLogged.js';
import Trasmissao from './src/components/Trasmissao.js';
import AuthLoadingScreen from './src/util/VerifyAuth.js';
import Contact from './src/components/Contact.js';
import Vereador from './src/components/Vereador.js';


const AppStack = StackNavigator({ Home: HomeLogged, Vereador: Vereador, Contact:Contact });
const AuthStack = StackNavigator({ Home: Home, Login: Login, Register: Register });

export const CallNavs =  SwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);


export default Tabs = TabNavigator({
  Home:{screen: CallNavs},
  Trasmissao:{screen: Trasmissao},
});


