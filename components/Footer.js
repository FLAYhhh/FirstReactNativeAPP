import React, { Component } from 'react';
import {TextInput, TouchableHighlight } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';

const Footer =(props)=>(
  <View style={styles.footer}>
    <TextInput
      style={styles.input}
      placeholder="Say someting here!"
      onChangeText={props.handleInput}
    />
    <TouchableHighlight
      style={styles.button}
      onPress={props.handleDone}
    >
      <Text style={styles.buttonText}>OK</Text>
    </TouchableHighlight>
  </View>
)
const styles = StyleSheet.create({
  footer:{
    flex:1,
    flexDirection:'row'
  },
  input:{
    backgroundColor:'steelblue',
    flex:4,
  },
  button:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  buttonText:{
    fontSize:25
  }
});

export default Footer;
