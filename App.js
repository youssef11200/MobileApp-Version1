import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/AuthNavigator';
import Home from './src/screens/Home/Home';
import BuyerView from './src/screens/Home/BuyerView';
import Addcoop from './src/screens/Home/Addcoop';
import Details from './src/screens/Home/Details'
import Production from './src/screens/Home/Production';
import { ScrollView } from 'react-native';


export default function App() {
  

 
  return (
    <NavigationContainer>
      
     <AuthNavigator/>
   
    </NavigationContainer>
  );
}