import React from 'react';
import { TextInput, View } from 'react-native'
import styles from './Input.style';

const Input = ({text}) => {
    return (
      <View style={styles.input_container}>
        <TextInput placeholder={text} placeholderTextColor="white" style={{marginLeft: 10,}}/>
        <View style={styles.lineStyle} />
      </View>
    );
}

export default Input;