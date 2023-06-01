import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from './GetStarted';
import Login from './Login';

const Stack = createNativeStackNavigator();

 const NavigationApp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={GetStarted}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen name="Profile" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default NavigationApp;