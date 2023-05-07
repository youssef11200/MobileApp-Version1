import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, StyleSheet, ScrollView, SafeAreaView, } from 'react-native';
import Background from '../Home/Background';
import Btn from '../Home/Btn';
import Field from '../Home/Field';
import { SceneView } from 'react-navigation';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';




const Sinup = ({ navigation }) => {
  const [fullname, onChangeFullname] = React.useState("")
  const [number, onChangeNumber] = React.useState(null)
  const [password, onChangePassword] = React.useState("")
  const [cpassword, onChangeCpassword] = React.useState("")
const userType =['Farmer','Buyer']
  return (
    <Background>

      <SafeAreaView style={{ flex: 1}} >

        <Text
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: 'bold',
            marginTop: '18%',
            paddingLeft: 40,
            paddingBottom: 10,
            letterSpacing: 8

          }}>
          Register
        </Text>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              backgroundColor: 'white',
              height: 550,
              width: 400,
              borderTopLeftRadius: 130,
              paddingTop: 20,
              paddingLeft: 65,
             justifyContent:'center',
             left:'12%'
            
            }}>
 <SelectDropdown  buttonStyle={{borderColor:'rgb(220,220, 220)',borderBottomWidth:1,width:300,}} data={userType}
          defaultButtonText='User Type' 
          renderDropdownIcon={()=>{
            return(<View><Icon
                           name="chevron-down-outline"
                           size={22}
                           color="black"
                           style={{paddingTop: 10,}}
                         /></View>)}}/>
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
              bgColor='#337722'>

            </Btn>

            <View style={{ paddingRight: '10%', }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                Already have an account ?
                <Text
                  onPress={() => navigation.navigate('Login')} style={{ color: '#337722', fontSize: 17, fontWeight: 'bold' }}>
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
