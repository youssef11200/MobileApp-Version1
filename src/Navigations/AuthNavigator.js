import React from 'react';
import Login from '../screens/auth/Login';
import Sinup from '../screens/auth/Sinup';
import BuyerView from '../screens/Home/BuyerView'
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
    
      <Stack.Screen name="Get started" component={GetStarted} />
      <Stack.Screen name='ForgotPasswords' component={ForgotPasswords} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      
      <Stack.Screen
        name="Sinup"
        component={Sinup}
        options={{headerShown: false}}
      />

<Stack.Screen 
        name="Home" component={MyDrawer}/>

        <Stack.Screen name="BuyerView" component={BuyerView} />
       
    
    </Stack.Navigator>
  );
}

export default AuthNavigator;
