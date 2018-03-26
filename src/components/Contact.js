import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  Image,
  TouchableOpacity,
  ToastAndroid,    
} from 'react-native';
import { List, ListItem } from 'react-native-elements';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import styles from '../styles/Styles.js';
import Vereador from './Vereador.js';

export default class Contact extends React.Component {

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
        assunto: '',
        mensagem: '',
        isAuthenticated: false,
      };

      enviarEmail = async () => {
        ToastAndroid.show('Mensagem enviada com sucesso!', ToastAndroid.SHORT);
      }
   
    render() {

        return(
            <ScrollView>
        <View>
             <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Index')}>
                <Text style={styles.buttonText}>Voltar</Text>
              </TouchableOpacity>

            <View style={styles.containerApp}>
            <Image source={require('./../../resources/img/message.png')} style={styles.imageHome}/>

                <TextInput
                 style={styles.input}
                 placeholder="Digite o assunto"
                value={this.state.assunto}
                onChangeText={assunto => this.setState({ assunto })}
                />

                <TextInput
                style={styles.input}
                placeholder="Digite a mensagem"
                value={this.state.mensagem}
                onChangeText={mensagem => this.setState({ mensagem })}
                />

        <TouchableOpacity style={styles.button} onPress={this.enviarEmail}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
                
            </View>
        </View>
        </ScrollView>
        
    );
  }
}