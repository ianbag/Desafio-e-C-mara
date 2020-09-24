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
  ScrollView
} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from '../styles/Styles.js';

//salve

export default class Register extends React.Component {

  static navigationOptions = {
    title: 'Efetue um cadastro',
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

  register = async () => {
    const {email, password} = this.state;

    if (email == "" || password == "")
      ToastAndroid.show('Preencha todos os campos!', ToastAndroid.SHORT);
    else{

    try {
      const user = await firebase.auth()
      .createUserWithEmailAndPassword(email, password);

      this.setState({ isAuthenticated: true});

      ToastAndroid.show('Conta cadastrada!', ToastAndroid.SHORT);

    } catch (error) {


      ToastAndroid.show('E-mail ou senha inválido!', ToastAndroid.SHORT);
    }
  }
}

  render() {
    return (
      <ScrollView>
      <View style={styles.container}>
      <Image source={require('./../../resources/img/user-add.png')} style={styles.imageHome}/>     
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

        <TouchableOpacity style={styles.button} onPress={this.register}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>

        { this.state.isAuthenticated ? <Text>Usuário logado</Text> : null}

      </View>
      </ScrollView>
    );
  }
}
