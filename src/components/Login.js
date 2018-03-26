import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ToastAndroid,
  Alert,
  AsyncStorage,
  ActivityIndicator,
  StatusBar,
  ScrollView
} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from '../styles/Styles.js';
import HomeLogged from './HomeLogged.js';


export default class Login extends React.Component {


   static navigationOptions = {
    title: 'Efetue o login',
    headerStyle: {
      backgroundColor: '#1194f6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }

  state = {
    email: '',
    password: '',
    isAuthenticated: false,
  };

  login = async () => {

    const {email, password} = this.state;

    if (email == "" || password == "")
      ToastAndroid.show('Preencha todos os campos!', ToastAndroid.SHORT);
    else{

      firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {

      this.setState({ isAuthenticated: true});

      ToastAndroid.show('Login efetuado com sucesso!', ToastAndroid.SHORT);
      
      AsyncStorage.setItem('userToken', JSON.stringify(user));
      this.props.navigation.navigate('App');

      console.log(user);
    })
     .catch ((error) =>{
     
      ToastAndroid.show('Email e/ou senhas incorretos!', ToastAndroid.SHORT);
      console.log(error);
    });

  }
}

  render() {

    return (
      <ScrollView>
      <View style={styles.container}>
        <Image source={require('./../../resources/img/user.png')} style={styles.imageHome}/>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />
        <TouchableOpacity style={styles.button} onPress={this.login}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
        </ScrollView>
    );
  }
}

