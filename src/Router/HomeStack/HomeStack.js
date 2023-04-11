import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../pages/HomeScreen/HomeScreen';

const LoginStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
