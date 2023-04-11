import React from 'react';
import LoginStack from './LoginStack/LoginStack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FlashMessage from 'react-native-flash-message';
import HomeStack from './HomeStack/HomeStack';

const Router = () => {
    const Stack = createStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="LoginStack"
            component={LoginStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
        <FlashMessage position="top" />
      </NavigationContainer>
    );
}

export default Router;