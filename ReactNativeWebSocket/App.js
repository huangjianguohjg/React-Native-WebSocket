/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import NetworkTest from 'network'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    webSocketApiExample() {
        var ws = new WebSocket('ws://172.104.164.248:8096/ws?type=draw');

        ws.onopen = () => {
            // 打开一个连接
            ws.send('something'); // 发送一个消息

            alert('chenggong')
        };

        ws.onmessage = (e) => {
            // 接收到了一个消息
            console.log(e.data);
            alert(e.data);
        };

        ws.onerror = (e) => {
            // 发生了一个错误
            console.log(e.message);
            alert(e.message);
        };

        ws.onclose = (e) => {
            // 连接被关闭了
            console.log(e.code, e.reason);
            alert(e.code, e.reason);
        };

    }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
          {instructions}
          {this.webSocketApiExample()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
