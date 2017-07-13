import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = (props)=>(
  <View style={styles.header}>
    <Text style={styles.title}>{props.title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header:{
    flex:1,
    backgroundColor: 'powderblue',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:35,
  },
})

export default Header;
