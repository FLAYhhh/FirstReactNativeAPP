import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Users = (props)=>(
    <ScrollView>
      {props.users.map((e,index)=>(
        <View key={index} style={{flex: 1, flexDirection: 'row'}}>
          <Image style={{flex:1}} source={{uri:e.avatar_url}} style={{width: 50, height: 50}}/>
          <Text style={{flex:3,  fontSize:20,}} >{e.screenname}</Text>
        </View>
      ))}
    </ScrollView>
)

export default Users;
