import React from 'react';
import Login from '../screens/auth/Login';
import Sinup from '../screens/auth/Sinup';
import MapBox from '../screens/Home/MapBox';
import BuyerView from '../screens/Home/BuyerView';
import MyDrawer from './DrawerNavigator';
import GetStarted from '../screens/auth/GetStarted';
import ForgotPasswords from '../screens/auth/ForgotPasswords';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Production from'../screens/Home/Production'
import AnimatedForm from '../screens/Home/Addcoop';
import AddProduct from '../screens/Home/AddProduct';

const Stack = createNativeStackNavigator();
// Navigator, Screen, Group

function AuthNavigator() {
  //console.log(Stack);
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Get started" component={GetStarted} />
      <Stack.Screen name="ForgotPasswords" component={ForgotPasswords} />
      <Stack.Screen name="Login"  component={Login} options={{headerShown: false}}/>
      <Stack.Screen name="Sinup"  component={Sinup} options={{headerShown: false}}/>
      <Stack.Screen name="Home" component={MyDrawer} />
      <Stack.Screen name="BuyerView" component={BuyerView} />
      <Stack.Screen name="MapBox" component={MapBox} />
      <Stack.Screen name="Details" component={Production} />
      <Stack.Screen name="Addcoop" component={AnimatedForm} />
      <Stack.Screen name="Addproduct" component={AddProduct} />


      
    </Stack.Navigator>
  );
}

export default AuthNavigator;

