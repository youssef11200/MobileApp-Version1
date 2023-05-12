import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Background from '../Home/Background';
import Btn from '../Home/Btn';
import Field from '../Home/Field';
import { SceneView } from 'react-navigation';




const Sinup = ({ navigation }) => {
  const [fullname, onChangeFullname] = React.useState("")
  const [number, onChangeNumber] = React.useState(null)
  const [password, onChangePassword] = React.useState("")
  const [cpassword, onChangeCpassword] = React.useState("")

  return (
    <Background>

      <SafeAreaView style={{ flex: 1, height: 900 }} >

        <Text
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: 'bold',
            position:'relative',
            marginBottom:40,
            marginTop:40,
            left:'25%',
            top:'2%',
            letterSpacing: 8

          }}>
          Register
        </Text>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              backgroundColor: 'white',
              height: '50%',
              width: '90%',
              borderTopLeftRadius: 130,
              paddingTop: 20,
              paddingLeft: 65,
              marginLeft: '9%',
              borderTopRightRadius:10,
              borderBottomLeftRadius:10,
              borderBottomRightRadius:10,
              
          
            }}>

            <Field placeholder="Full Name" onChangeText={onChangeFullname}
              value={fullname} />
            <Field placeholder="Contact Number" keyboardType='numeric' onChangeText={onChangeNumber}
              value={number} />
            <Field placeholder="Password" secureTextEntry={true} onChangeText={onChangePassword}
              value={password} />
            <Field placeholder="Confirm Password"  returnKeyLabel='done' style={{ alignItems: 'center' }} secureTextEntry={true} onChangeText={onChangeCpassword}
              value={cpassword} />

            <View>

              <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14, textDecorationLine: 'underline', marginTop: '5%' }}>
                Terms & Conditions
              </Text>
            </View>
            <Btn Press={() => {
              alert('Account created'); navigation.navigate("Login")
            }}
              btnLabel='Sign Up'
              textColor='white'
              bgColor='#18a34a'>

            </Btn>

            <View style={{ paddingRight: '10%', }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Already have an account ?
                <Text
                  onPress={() => navigation.navigate('Login')} style={{ color: '#18a34a', fontSize: 17, fontWeight: 'bold' }}>
                  Login
                </Text>
              </Text>

            </View>
          </View>
        </TouchableWithoutFeedback>

      </SafeAreaView>
    </Background>
  );
};

export default Sinup;
const styles = StyleSheet.create({
  keyappear: {
    flex: 1
  }
})
