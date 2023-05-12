import {  StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from '../Home/Background'
import Btn from '../Home/Btn';
const  GetStarted = ({navigation}) => {
  return (
    
      <Background>
        <View style={{ marginHorizontal: "8%", marginVertical: '20%' }}>
        <Text style={{color:'white', fontSize:55}}>Get Started</Text>
        <Btn bgColor='#18a34a' textColor='white'  btnLabel="Are you a Farmer" Press={() => navigation.navigate('Login')} />
        <Btn bgColor='#18a34a' textColor='white'  btnLabel="Are you a Buyer" Press={() => navigation.navigate('Login')} />
       
        </View>
      </Background>
   
  )
}
export default GetStarted;

const styles = StyleSheet.create({})
