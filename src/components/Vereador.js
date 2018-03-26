import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from 'react-native';
import { StackNavigator, TabNavigator, SwitchNavigator, TabBarBottom  } from 'react-navigation';
import { List, ListItem } from 'react-native-elements'
import styles from '../styles/Styles.js';
import Contact from './Contact.js';


export class Vereador extends React.Component {

  constructor(props) {
    super(props);
    this.buttonPress = this.buttonPress.bind(this);
  }

  buttonPress() {
    console.log('chamou');
    this.props.navigation.navigate('Contact');
  }


    render() {

        const list = [
            {
                name: 'Tonhão da Borracharia',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'Partido: PPS',
            },
            {
                name: 'Prof. Caio Porto',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PSD'
            },
            {
                name: 'Mirão Basso',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PP'
              },
              {
                name: 'Denis Eduardo Machado',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'MDB'
              },
              {
                name: 'Eduardo Henrique Moutinho',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PSD'
              },
              {
                name: 'Genésio Aparecido Valensio',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PRB'
              },
              {
                name: 'Gilberto Junqueira',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'DEM'
              },
              {
                name: 'Joel da Joctel',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PPS'
              },
              {
                name: 'José Roberto Girotto',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PTB'
              },
              {
                name: 'José Rodrigo de Pietro',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'SD'
              },
              {
                name: 'Marcos Aparecido Lourençano',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'MDB'
              },
              {
                name: 'Marcos Bonilla',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'DEM'
              },
              {
                name: 'Juninho Previdelli',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'SD'
              },
              {
                name: 'Wadinho Peretti',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'MDB'
              },
              {
                name: 'Valcir Conceição Zacarias',
                avatar_url: 'https://i.imgur.com/959PP6M.png',
                subtitle: 'PSB'
              },
          ]

        return(
            <ScrollView>
        <List containerStyle={{marginBottom: 20}}>
         {
        list.map((l, i) => (
            <ListItem
                roundAvatar
                avatar={{uri:l.avatar_url}}
                key={i}
                title={l.name}
                onPress={() => this.props.navigation.navigate('Contact')}
            />
        ))
        }
        </List>
        </ScrollView>
        
    );
  }
}
const VereadorStack = StackNavigator({ Contact: Contact });

export default  SwitchNavigator(
  {
    Index: Vereador,
    Contact: Contact,
  },
  {
    initialRouteName: 'Index',
  }
);