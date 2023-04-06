import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Background from '../Home/Background';
import Btn from '../Home/Btn';
import  Icon  from 'react-native-vector-icons/Ionicons';



const Login = ({navigation}) => {
 
    const [text, onChangeText] = React.useState("");
    const [number, onChangeNumber] = React.useState(null);
    const STYLES = ['default', 'dark-content', 'light-content'];
    const TRANSITIONS = ['fade', 'slide', 'none'];
    
   
    
  return (
 
    <Background>
     <StatusBar
        animated={true}
        barStyle='light-content'
        showHideTransition= 'slide'
      />
      <View style={{alignItems: 'center', width: '60%' ,marginLeft:'12%'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
            marginTop:'20%',letterSpacing:2
           
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: '85%',
            width: 300,
            borderTopLeftRadius: 130,
            paddingTop: 70,
            alignItems: 'center',
            marginTop:'10%',
            margin: 20 ,
           
          }}>
          <Text style={{fontSize: 36, color: '#337722', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
         <View style={styles.inputProduct}>
         <Icon name="call" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
          <TextInput

        style={styles.input1}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='Telephone Number'
       keyboardType='numeric'
       
      />
    
      </View>
      <View style={styles.inputProduct}>
      <Icon name="ios-lock-closed" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
     <TextInput
        style={styles.input2}
        secureTextEntry={true}
        placeholder="Password"
        onChange={onChangeText}
        value={text}
       
      />
      </View>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, }}>
            <TouchableOpacity><Text onPress={() => navigation.navigate("ForgotPasswords")} style={{color: '#337722', fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text></TouchableOpacity>
          </View>
          <View 
          style={{width:200}}>
          <Btn textColor='white' bgColor={'#337722'} btnLabel="Login"   Press={() => navigation.navigate("FarmerView")}     /></View>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold", }}>Don't have an account ? </Text>
           <Text onPress={() => navigation.navigate("Sinup")} style={{ color: '#337722', fontWeight: 'bold', fontSize: 16 }}>Signup</Text> 
          </View>
          <View>
          <Text  style={{fontWeight:'800',padding:10}}> Or for explore our product as <TouchableOpacity activeOpacity={0.4}><Text style={{color:'#1776C7', fontWeight:'bold', fontSize:18 }}>Guest</Text></TouchableOpacity>  </Text>
          
          </View>
        </View>
      </View>
    </Background>
  );
};
const styles= StyleSheet.create({
  cguest:{
    position:'absolute',
    left:'10%',
    top:'55%',
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    paddingRight:20,
    borderRadius:100,
    marginTop:10,
    
},
input1:{
  borderBottomWidth: 1,
  borderBottomColor:'rgb(220,220, 220)',
  paddingVertical:5,
  width:"70%",
},
input2:{
  borderBottomWidth: 1,
  borderBottomColor:'rgb(220,220, 220)',
  paddingVertical:5,
  width:"70%",
},inputProduct:{
  height:40,
    borderRadius:5,
    marginTop:10,
    flexDirection:"row",
   paddingHorizontal:5,
   
   
}

 
  })

export default Login;