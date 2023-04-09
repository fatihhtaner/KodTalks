import { StyleSheet } from 'react-native';

const base_style = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    marginLeft: 5,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'white',
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: '#ffa040',
    },
    title: {
      ...base_style.title,
      color: 'white',
    },
  }),

  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: '#ffa040',
      borderWidth: 1,
    },
    title: {
      ...base_style.title,
      color: '#ffa040',
    },
  }),
};