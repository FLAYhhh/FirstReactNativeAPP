import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Users = (props)=>(


    <ScrollView>
      {props.users.map((e,index)=>(
        <View key={index} >
          <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}} style={{width: 50, height: 50}}/>
          <Text>{e.screenname}</Text>

        </View>
      ))}
    </ScrollView>

)

export default Users;
