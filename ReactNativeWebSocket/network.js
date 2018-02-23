import React, {Component} from 'react';
import {AppRegistry, Dimensions, StyleSheet, Text, View} from 'react-native';

let totolWidth = Dimensions.get('window').width;

export default class NetworkTest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            responseText: '',
        }
    }

    componentWillMount() {

    }

    fetchApiExample() {
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })

        // If above source can not work, try follow
        // fetch('https://mywebsite.com/endpoint/', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: 'key1=value1&key2=value2'
        // })
    }

    fetchApiExample2() {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson.movies;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ajaxExample() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('success', request.responseText);
            } else {
                console.warn('error');
            }
        };

        request.open('GET', 'https://mywebsite.com/endpoint/');
        request.send();
    }

    webSocketApiExample() {
        var ws = new WebSocket('ws://host.com/path');

        ws.onopen = () => {
            // 打开一个连接

            ws.send('something'); // 发送一个消息
        };

        ws.onmessage = (e) => {
            // 接收到了一个消息
            console.log(e.data);
        };

        ws.onerror = (e) => {
            // 发生了一个错误
            console.log(e.message);
        };

        ws.onclose = (e) => {
            // 连接被关闭了
            console.log(e.code, e.reason);
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}>
                    {/*{this.state.responseText}*/}
                </Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textStyle: {
        fontSize: 20,
    },
});

// AppRegistry.registerComponent('RnTutorial', () => NetworkTest);
