import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, StatusBar} from 'react-native';
import Background from '../Home/Background';
import Btn from '../Home/Btn';
import  Icon  from 'react-native-vector-icons/Ionicons';



const Login = ({navigation}) => {
 
    const [pass, onChangePass] = React.useState("");
    const [number, onChangeNumber] = React.useState("");
   
    
   
    
  return (
 
    <Background>
     <StatusBar
        animated={true}
        barStyle='light-content'
        showHideTransition= 'slide'
      />
      <View style={{alignItems: 'center', width: '100%' ,marginLeft:'5%'}}>
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
            width: "95%",
            borderTopLeftRadius: 130,
            paddingTop: 70,
            alignItems: 'center',
            marginTop:'10%',
            margin: 20 ,
           
          }}>
          <Text style={{fontSize: 36, color: '#18a34a', fontWeight: 'bold'}}>
            Welcome Back
          </Text>
         <View style={styles.inputProduct}>
         <Icon name="call" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
          <TextInput

        style={styles.input1}
        onChangeText={onChangeNumber}
        value={number}
        placeholder='phone Number or E-mail'
       keyboardType='numeric'
       
      />
    
      </View>
      <View style={styles.inputProduct}>
      <Icon name="ios-lock-closed" size={22} color="#c3c3c3" style={{paddingRight:5,paddingTop:10}}  />
     <TextInput
        style={styles.input2}
        secureTextEntry={true}
        placeholder="Password"
        onChange={onChangePass}
       
       
      />
      </View>
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, }}>
            <TouchableOpacity><Text onPress={() => navigation.navigate("ForgotPasswords")} style={{color: '#18a34a', fontWeight: 'bold', fontSize: 16,marginTop:15}}>
              Forgot Password ?
            </Text></TouchableOpacity>
          </View>
          <View 
          style={{width:200}}>
          <Btn textColor='white' bgColor={'#18a34a'} btnLabel="Login"   Press={() => navigation.navigate("Home")}     /></View>
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold", }}>Don't have an account ? </Text>
           <Text onPress={() => navigation.navigate("Sinup")} style={{ color: '#18a34a', fontWeight: 'bold', fontSize: 16 }}>Signup</Text> 
          </View>
          <View style={{paddingTop:20}}>
          <Text  style={{fontWeight:'800'}}> Or explore our App as <Text style={{color:'#1776C7', fontWeight:'bold', fontSize:16,paddingVertical:10}} onPress={()=>{navigation.navigate('Home')}} >Guest</Text></Text>
          
          </View>
        </View>
      </View>
    </Background>
  );
};
const styles= StyleSheet.create({
 
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
