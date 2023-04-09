import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../auth/Login/Login';
import Sign from '../../auth/Sign/Sign';

const LoginStack = () => {
    const Stack = createStackNavigator();

    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
}

export default LoginStack;