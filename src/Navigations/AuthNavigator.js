import React from 'react';
import Login from '../screens/auth/Login';
import Sinup from '../screens/auth/Sinup';
import Routes from '../constants/Routes';
import MyDrawer from './DrawerNavigator';
import GetStarted from '../screens/auth/GetStarted';
import ForgotPasswords from '../screens/auth/ForgotPasswords'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.GET_STARTED} component={GetStarted} />
      <Stack.Screen name='ForgotPasswords' component={ForgotPasswords} />
      <Stack.Screen
        name={Routes.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={Routes.SIGNUP}
        component={Sinup}
        options={{headerShown: false}}
      />

      <Stack.Screen 
        name="FarmerView" component={MyDrawer}/>
    
    </Stack.Navigator>
  );
}

export default AuthNavigator;
