import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  WebView,
  Dimensions,
} from 'react-native';
import styles from '../styles/Styles.js';

export default class Trasmissao extends React.Component {
  static navigationOptions = {
    title: 'Trasmissão',
  };

  state = {
    streamOn: false,
  };

  render() {

    var birthday = new Date();
    var day = birthday.getDay();
    var hour = birthday.getHours();
    var minutes = birthday.getMinutes();
    var hourMinutes = hour+""+ minutes;

    if (day == 1 && hourMinutes >= 1930 && hourMinutes <= 2230){
        this.setState({ streamOn: true});
        console.log("streamOn");
    }
    
    const width = Dimensions.get('screen').width;
    const height = Dimensions.get('screen').height;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
        { this.state.streamOn ? 
        <WebView
        source={{uri: 'https://player.jmvstream.com/6TkFNb3J9igpAQDq1LLvkmrCVKKv0h'}}
        style={{marginTop: 5, height: height, width: width}}
        />

       :
       <View stlye={styles.container}>
            <Text stlye={styles.titleTrasmissao}>Trasmissão de vídeo está desativada!</Text>
            <Text stlye={styles.textTrasmissao}>Disponível às segundas-feiras, entre 19:30 horas e 22:30 horas.!</Text>
        </View>
       }
  
      </View>
    );
  }
}