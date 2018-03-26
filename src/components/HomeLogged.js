import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Button,
  AsyncStorage,

} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from '../styles/Styles.js';

import Login from './Login.js';
import Register from './Register.js';
import Home from './Home.js';
import Vereador from './Vereador.js';

export default class HomeLogged extends React.Component {
        
  static navigationOptions = ({ navigation }) => {

    const { state } = navigation
    const { signOutButton } = "params" in state && state.params

    return {
      title: 'Vereadores',
      headerRight: signOutButton && signOutButton()
    }
  }

  logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
}

  componentWillMount() {

    const signOutButton = (
      <Button onPress={() => { this.logout() }} title="Sair"></Button>
    )

    this.props.navigation.setParams({ signOutButton: () => signOutButton })
  }
  render(){
    
    return(
      
       <View>
            <Vereador/>
        </View>
      
    );
  }
}

  
   