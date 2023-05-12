import React from 'react';
import {TextInput} from 'react-native';


const Field = props => {
  return (
    <TextInput
      {...props}
      style={{ fontSize:12, color: '#585858', paddingHorizontal: 10, width: '90%',  marginVertical: 5,paddingVertical:1,height:'8%', borderBottomWidth: 1,
  borderBottomColor:'rgb(220,220, 220)',marginBottom:'5%'}}
      placeholderTextColor={'#585858'}></TextInput>
  );
};

export default Field;
