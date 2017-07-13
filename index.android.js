import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';

export default class FirstReactApp extends Component {
  constractor(props){
    this.super(props); //why i need super?
    this.state = {
      text:'',
    };
    //this.handleInput = this.handleInput.bind(this);
  }
  handleInput=(value)=>{
    this.setState({text:value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="My App Title"/>

        <View style={styles.middle}>

        </View>

        <Footer handleInput={this.handleInput}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  middle:{
    flex:8,
    backgroundColor:'skyblue',
  },
});


// skip this line if using Create React Native App
AppRegistry.registerComponent('AwesomeProject', () =>  FirstReactApp );
