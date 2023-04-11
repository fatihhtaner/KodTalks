import React from 'react';
import { TextInput, View } from 'react-native'
import styles from './Input.style';

const Input = ({text, onChangeText, secureTextEntry}) => {
    return (
      <View style={styles.input_container}>
        <TextInput placeholder={text} placeholderTextColor="white" style={{marginLeft: 10,}} onChangeText={onChangeText} secureTextEntry={secureTextEntry} autoCapitalize="none"/>
        <View style={styles.lineStyle} />
      </View>
    );
}

export default Input;