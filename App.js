import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/AuthNavigator';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  useEffect(() => {
   SplashScreen.hide()
  
   
  }, [])
  

 
  return (
    <NavigationContainer>
      
     <AuthNavigator/>
   
    </NavigationContainer>
  );
}