import {  StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../Home/Background'
import Btn from '../Home/Btn';
const  GetStarted = ({navigation}) => {
  return (
    
      <Background>
        <View style={{ marginHorizontal: "8%", marginVertical: '20%' }}>
        <Text style={{color:'white', fontSize:64}}>Get Started</Text>
        <Btn bgColor={'green'} textColor='white'  btnLabel="Login" Press={() => navigation.navigate('Login')} />
        <Btn bgColor='white' textColor={'#337722'} btnLabel="Sign up" Press={() => navigation.navigate('Sinup')} />
        </View>
      </Background>
   
  )
}
export default GetStarted;

const styles = StyleSheet.create({})