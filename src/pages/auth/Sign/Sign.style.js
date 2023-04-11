import {StyleSheet, Dimensions} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    backgroundColor: '#ff6f00',
    flex: 1,
  },
  title_container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: deviceWidth,
    height: deviceHeight / 2,
  },
  title: {
    color: 'white',
    fontSize: 30,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
