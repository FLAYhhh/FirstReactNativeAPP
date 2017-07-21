import React, { Component } from 'react';
import { AppRegistry,View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import Footer from './components/Footer';
import Users from './components/Users';
var ws;
export default class FirstReactApp extends Component {
  constructor(props){
    super(props);
    this.state = {
      text:'',
      messages:[],
      users:[],
    };
    this.ws={};
    this.handleInput = this.handleInput.bind(this);
    this.completeInput = this.completeInput.bind(this);
  }

  componentDidMount(){
    this.ws = new WebSocket('wss://buct.briangillespie.net/messages');

    this.ws.onopen = () => {
      console.log("connection is open!")
      this.ws.send(JSON.stringify({
        type:'JOIN',
        data:{
          username:'flayhhh',
          screenname:'flayhhh',
          avatar_url:'https://buct.briangillespie.net/brian_avatar.png'
        }
      }));
    };

    this.ws.onmessage = (e) => {
      console.log(e.data);
      var o = JSON.parse(e.data);
      if(o.event==="UPDATE"&&o.channel==='users'){

        const newUsers = o.data
        this.setState({
          users:newUsers
        })
        console.log('in');
        console.log(this.state.users);
      }

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

    this.ws.send(JSON.stringify({
      type:'MESSAGE',
      data:{
        usernames:this.state.users.map(  (e)=>(e.username) ),
        body:this.state.text,
      }
    }));

    this.setState({
      messages:newMessages,
      text:''
    })

  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Simple Chatting APP"/>

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
