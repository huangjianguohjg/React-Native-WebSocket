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

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {

    webSocketApiExample() {
        var ws = new WebSocket('ws://172.104.164.248:8096/ws?userid=jeiwuruewohruwehfuewuihfhewuhiufhiu');

        ws.onopen = () => {
            // 打开一个连接
            let formData = new FormData();
            formData.append("MsgType","draw");
            formData.append("draw",'cqssc');
            formData.append("cqssc",1);
            formData.append("DateTime","2018-02-23");
            // ws.send(formData); // 发送一个消息

            var dic = { "MsgType": "draw", "Code": "cqssc", "Status": 1, "DateTime": "2018-02-23"};
            ws.send(JSON.stringify(dic));
            alert('chenggong')
        };

        ws.onmessage = (e) => {
            // 接收到了一个消息
            // console.log(e.data);
            // alert(e.data);



            alert('ewwwwwwww');
            alert(e.data.DrawMsg);
            console.log(e.data);
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
        {/*<Text style={styles.welcome}>*/}
          {/*Welcome to React Native!*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*To get started, edit App.js*/}
        {/*</Text>*/}
        {/*<Text style={styles.instructions}>*/}
          {/*{instructions}*/}
        {/*</Text>*/}
          {/*{instructions}*/}
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
