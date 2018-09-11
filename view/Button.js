import React, {Component, PropTypes} from 'react';
import {View, Text, TouchableNativeFeedback, StyleSheet} from 'react-native';

export default class Button extends Component {
    render() {
        return(
            <TouchableNativeFeedback
                onPress={this.props.onPress}>
                <View style={styles.content}>
                    <Text style={styles.text}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

const styles = StyleSheet.create({
    text: {
      color: 'white',
      fontSize: 13,
    },
    content: {
      height: 45,
      backgroundColor: '#046ada',
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 3
    },
});