import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
  input_container: {
    margin: 5,
    height: Dimensions.get('window').height / 13,
  },
  lineStyle: {
    borderWidth: 0.7,
    borderColor: 'white',
    margin: 10,
  },
});