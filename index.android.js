import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';

export default class FirstReactApp extends Component {
  constructor(props){
    super(props); //why i need super?
    this.state = {
      text:'',
      messages:[],
      users:[],
    };
    this.handleInput = this.handleInput.bind(this);
    this.completeInput = this.completeInput.bind(this);
  }

  componentDidMount(){
    const ws = new WebSocket('wss://buct.briangillespie.net/messages');

    ws.onopen = () => {
      console.log("connection is open!")
      ws.send(JSON.stringify({
        type:'JOIN',
        data:{
          username:'flayhhh',
          screenname:'flayhhh',
          avatar_url:'https://buct.briangillespie.net/brian_avatar.png'
        }
      }));
    };

    ws.onmessage = (e) => {
      console.log(e.data);
      var o = JSON.parse(e.data);
      if(o.event==='UPDATE'){
        console.log('in');
        const newUsers = [
          ...this.state.users ,
          {
            username:o.data[0].username,
            screenname:o.data[0].screenname,
            avatar_url:o.data[0].avatar_url
          }
        ]
        this.setState({
          users:newUsers
        })
      }
      console.log(this.state.users);
    };


  }
  /*handleInput=(value)=>{
    this.setState({text:value});
  }*/
  handleInput(value){
    this.setState({
      text:value,
    })
  }

  completeInput(){
    if(!this.state.text) return;
    const newMessages = [
      ...this.state.messages ,
      {
        key:Date.now(),
        text:this.state.text,
      }
    ]
    this.setState({
      messages:newMessages,
      text:''
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="My App Title"/>

        <View style={styles.middle}>
          <Users users={this.state.users} />
        </View>

        <Footer
          value={this.state.text}
          handleInput={this.handleInput}
          completeInput={this.completeInput}
        />
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
