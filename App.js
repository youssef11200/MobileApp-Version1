import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/AuthNavigator';
import BuyerView from'./src/screens/Home/BuyerView'
import ShowMap from './src/screens/Home/MapBox';

export default function App() {
  

 
  return (
    <NavigationContainer>
      
     <AuthNavigator/>
   
    </NavigationContainer>
  );
}