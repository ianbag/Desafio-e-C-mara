import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Button,
  ImageBackground,
  AsyncStorage,
  ScrollView
} from 'react-native';

import firebase from 'react-native-firebase';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from '../styles/Styles.js';

import Login from './Login.js';
import Register from './Register.js';
import HomeLogged from './HomeLogged.js';


export default class Home extends React.Component {


  static navigationOptions = {
    title: 'Início',
    headerStyle: {
      backgroundColor: '#1194f6',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  render(){
    console.log(AsyncStorage.getItem('userToken'));
    return(
      
        <ImageBackground source={require('./../../resources/img/bg8.jpg')} style={styles.backgroundHome}>
        <ScrollView>
          <View style={styles.containerHome}>
          <View style={styles.viewStart}>
              <Text style={styles.titleHome}>CÂMARA MUNICIPAL DE TAQUARITINGA</Text>
              <Image source={require('./../../resources/img/brasao-colorido.png')} style={styles.imageHome}/> 
              </View>
              <View style={styles.viewEnd}>
            <Text style={styles.textHome}>Você pode entrar ou efetuar um novo cadastro para obter acesso completo de nosso aplicativo!</Text>
            
              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Login')}>
                <Text style={styles.buttonText}>ENTRAR</Text>
              </TouchableOpacity>

              <Text style={styles.textHome}>- ou -</Text>

              <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Register')}>
                <Text style={styles.buttonText}>CADASTRAR</Text>
              </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
        </ImageBackground>
      
    );
  }
}



