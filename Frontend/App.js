import React,{useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/Navigations/AuthNavigator';
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux';
import {store} from './src/Redux/Store'
export default function App() {
  useEffect(() => {
   SplashScreen.hide()
  
   
  }, [])
  

 
  return (
   <Provider store={store}>
    <NavigationContainer>
      
     <AuthNavigator/>
   
    </NavigationContainer>
    </Provider>
  );
}