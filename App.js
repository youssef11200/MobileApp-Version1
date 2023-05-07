import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/AuthNavigator';


export default function App() {
  

 
  return (
    <NavigationContainer>
      
     <AuthNavigator/>
   
    </NavigationContainer>
  );
}