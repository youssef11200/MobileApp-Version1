import React from 'react';
import {View, Text, } from 'react-native';
import Background from '../Home/Background';
import Btn from '../Home/Btn';
import Field from '../Home/Field';


  

const Sinup = ({navigation}) => {
  const [fullname,onChangeFullname]= React.useState("")
  const [number,onChangeNumber] = React.useState(null)
  const [password,onChangePassword]= React.useState("")
  const [cpassword,onChangeCpassword]= React.useState("")

  return (
    <Background>
      <View style={{flex:1}} >
        <Text
          style={{
            color: 'white',
            fontSize: 35,
            fontWeight: 'bold',
            marginTop: '18%',
            paddingLeft:40,
            paddingBottom:10,
            letterSpacing:8
            
          }}>
          Register
        </Text>
       
        <View
          style={{
            backgroundColor: 'white',
            height: 440,
            width: '105%',
            borderTopLeftRadius: 130,
            paddingTop: 20,
           paddingLeft:65,
           marginLeft:'2%'
          }}>
          <Field placeholder="Full Name"  onChangeText={onChangeFullname}
        value={fullname} />
          <Field placeholder="Contact Number" keyboardType='numeric' onChangeText={onChangeNumber}
        value={number} />
          <Field placeholder="Password" secureTextEntry={true} onChangeText={onChangePassword}
        value={password} />
          <Field placeholder="Confirm Password" secureTextEntry={true} onChangeText={onChangeCpassword}
        value={cpassword} />
          <View>
            
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 14,textDecorationLine:'underline',marginTop:'5%'}}>
              Terms & Conditions  
            </Text>
          </View>
       <Btn  Press={()=>{
          alert('Accoutn created');navigation.navigate("Login")}}
           btnLabel='Sign Up'
           textColor='white'
           bgColor='#337722'>

           </Btn>
         
          <View  style={{paddingRight:'10%',}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>
              Already have an account ?
              <Text 
              onPress={() => navigation.navigate('Login')} style={{color:'#337722',fontSize:17,fontWeight:'bold'}}>
              Login
            </Text>
            </Text>
            
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Sinup;
