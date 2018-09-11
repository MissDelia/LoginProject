/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, PixelRatio, Alert} from 'react-native';
import Button from './view/Button';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: '',
    };
  }

  render() {
    return(
      <View style={styles.view}>
        <View style={{margin: 20}}>
        <View style={{height: 48,
                      marginTop: 100,
                      backgroundColor: 'white',
                      justifyContent: "center",
                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 5}}>
        <TextInput
          style={{height: 40}}
          placeholder="用户名"
          placeholderTextColor="#c4c4c4"
          onChangeText={(username) => this.setState({username})}/>
        </View>
        <View style={{height: 1/PixelRatio.get(), backgroundColor: '#c4c4c4'}}/>
        <View style={{height: 48,
                      backgroundColor: 'white',
                      justifyContent: "center",
                      borderBottomLeftRadius: 5,
                      borderBottomRightRadius: 5}}>
        <TextInput
          style={{height: 40}}
          placeholder="密码"
          placeholderTextColor="#c4c4c4"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}/>
        </View>
        <View style={{marginTop: 10}}>
            <Button text="登录" onPress={this._handleClick.bind(this)}/>
        </View>
        </View>
      </View>
    );
  }

  _handleClick() {
    console.warn('username:' + this.state.username);
    console.warn('password:' + this.state.password);
    // Alert.alert(this.state.username);
    // Alert.alert(this.state.password);
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: 'rgb(169,255,255)',
  },
});
